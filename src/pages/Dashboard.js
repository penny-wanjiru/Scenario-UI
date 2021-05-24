import React, { useState, useEffect, Fragment } from 'react'
import AddAppForm from '../components/forms/AddAppForm'
import EditAppForm from '../components/forms/EditAppForm'
import AppsTable from '../components/AppsTable'
import Plans from '../pages/Plans'
import { AuthContext } from "../App";
import {getAllApps, updateApp, deleteApp, getPlans} from '../services/AppsService'


const Dashboard = () => {
	const { state } = React.useContext(AuthContext);
	const initialFormState = { id: null, name: '', description: '', type:'', framework:''}

	// Setting state
	const [apps, setApps] = useState([]);
	const [addedApp, setAddedApp] = useState([]);

	const [ currentApp, setCurrentApp ] = useState(initialFormState)
	const [ showPlans, setShowingPlans ] = useState(false)
	const [ editing, setEditing ] = useState(false)
	const [serverErrors, setServerErrors] = useState( {errorStatus:null, errorMessage: null});

	let key = state.token

	useEffect(() => {
		getAllApps(key)
		.then(response => {console.log("app res",response); setApps(response)})
 	}, [addedApp]);

	const editRow = app => {
		setEditing(true)
		setCurrentApp({ id: app.id, name: app.name, description: app.description, type: app.type, framework:app.framework})
	}

	const updateApplication = (id, app) => {
		updateApp(id, app, key)
		.then(res => {
				console.log("Updated successfully", res)
				setAddedApp(res)
			})
		.catch(e => {
			setServerErrors({
				errorStatus: e.status,
				errorMessage:`An Error has occured: ${e.statusText}`
			});
		});
	};

	const deleteApplication = (id, app) => {
		deleteApp(id, app, key)
		.then(res => {
				console.log("Deleted successfully", res)
				setAddedApp(res)
			})
		.catch(e => {
			setServerErrors({
				errorStatus: e.status,
				errorMessage:`An Error has occured: ${e.statusText}`
			});
		});
  };

	return (
		<div className="container">
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
								setAddedApp={setAddedApp}
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
