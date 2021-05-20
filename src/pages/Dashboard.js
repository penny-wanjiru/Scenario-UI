import React, { useState, useEffect, Fragment } from 'react'
import AddAppForm from '../components/forms/AddAppForm'
import EditAppForm from '../components/forms/EditAppForm'
import AppsTable from '../components/AppsTable'
import { getUser,  getAllApps, getApp, createApp, updateApp,	patchApp} from '../http/api'
import { AuthContext } from "../App";


const Dashboard = () => {
	const { state } = React.useContext(AuthContext);
	const initialFormState = { id: null, name: '', description: '', type:'', framework:''}

	// Setting state
	const [apps, setApps] = useState([]);
	const [ currentApp, setCurrentApp ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	useEffect(() => {
	 retrieveApps();
 	}, [apps]);



	const retrieveApps = () => {
		fetch("https://hiring-example-25770.botics.co/api/v1/apps/", {
			method: "get",
			headers: {
				"Content-type": "application/json",
				"Authorization": `Token ${state.token}`,
			},
		})
		.then(res => {
			if (res.ok) {
				return res.json();
			}
			throw res;
		})
		.then(resJson => {
			console.log("Get user id", resJson)
			setApps(resJson);
		})
		.catch(e => {
			console.log(e);
		});
	};

	// const updateApp = (id, updatedApp) => {
	// 	setEditing(false)
	//
	// 	setApps(apps.map(app => (app.id === id ? updatedApp : app)))
	// }

	const editRow = app => {
		setEditing(true)
		setCurrentApp({ id: app.id, name: app.name, description: app.description, type: app.type, framework:app.framework})
	}

	const updateApp = (id, app) => {
		fetch(`https://hiring-example-25770.botics.co/api/v1/apps/${id}`, {
			method: "put",
			headers: {
				"Content-type": "application/json",
				"Authorization": `Token ${state.token}`,
			},
			body: JSON.stringify(
				{ id:id, name: app.name, description: app.description, type:app.type , framework:app.framework}
			)
		})
		.then(res => {
			if (res.ok) {
				return res.json();
			}
			throw res;
		})
		.then(resJson => {
			console.log("Updated successfully", resJson)
		})
		.catch(e => {
			console.log(e);
		});
  };

	const deleteApp = (id, app) => {
		fetch(`https://hiring-example-25770.botics.co/api/v1/apps/${id}`, {
			method: "delete",
			headers: {
				"Content-type": "application/json",
				"Authorization": `Token ${state.token}`,
			},
		})
		.then(res => res.json()) // or res.json()
		.then(res => console.log("Deleted successfully", res))
		.catch(e => {
			console.log(e);
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
								updateApp={updateApp}
							/>
						</Fragment>
						) : (
						<Fragment>
							<h2>Add App</h2>
							<AddAppForm/>
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>App list</h2>
					<AppsTable apps={apps} editRow={editRow} deleteApp={deleteApp}/>
				</div>
			</div>
		</div>
	)
}

export default Dashboard
