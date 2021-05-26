import React, { useState, useEffect, Fragment } from 'react'

import { AuthContext } from "../App";
import {getAllApps, updateApp, deleteApp, getPlans} from '../services/AppsService'

import AddAppForm from '../components/forms/AddAppForm'
import EditAppForm from '../components/forms/EditAppForm'
import AppsTable from '../components/AppsTable'
import Plans from '../pages/Plans'

const Dashboard = () => {
	const { state } = React.useContext(AuthContext);
	const initialFormState = { id: null, name: '', description: '', type:'', framework:''}

	// Setting state
	const [apps, setApps] = useState([]);
	const [ currentApp, setCurrentApp ] = useState(initialFormState)
	const [ showPlans, setShowingPlans ] = useState(false)
	const [ editing, setEditing ] = useState(false)
	const [serverErrors, setServerErrors] = useState( {errorStatus:null, errorMessage: null});

	let key = state.token

	useEffect((key) => {
		getAllApps(key)
		.then(response => {setApps(response)})
 	}, [Object.values(apps)]);

	const editRow = app => {
		setEditing(true)
		setCurrentApp({ id: app.id, name: app.name, description: app.description, type: app.type, framework:app.framework})
	}

	const updateApplication = (id, app) => {
		updateApp(id, app, key)
		.then(res => {
			 // return res.json();
			})
		.catch(e => {
			setServerErrors({
				errorStatus: e.status,
				errorMessage:`An Error has occured: ${e.statusText}`
			});
		});
	};

	const deleteApplication = (id, app) => {
		deleteApp(id, key)
		.then(res => {
			return res.json();
		})
		.catch(e => {
			setServerErrors({
				errorStatus: e.status,
				errorMessage:`An Error has occured: ${e.statusText}`
			});
		});
  };

	return (
		<div className="container" style={{marginTop: "5%"}}>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit App</h2>
							<EditAppForm
								editing={editing}
								setEditing={setEditing}
								currentApp={currentApp}
								updateApplication={updateApplication}
							/>
							{serverErrors.errorStatus && (
		            <span className="form-error" style={{ color: "red" }} >
									{serverErrors.errorMessage}
								</span>
		        	)}
						</Fragment>
						) : (
						<Fragment>
							<h2>Add App</h2>
							<AddAppForm
								setServerErrors={setServerErrors}
							/>
							{serverErrors.errorStatus && (
		            <span className="form-error" style={{ color: "red" }} >
									{serverErrors.errorMessage}
								</span>
		        	)}
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>App list</h2>
					<AppsTable apps={apps} editRow={editRow} deleteApplication={deleteApplication}/>
				</div>
			</div>

		</div>
	)
}

export default Dashboard
