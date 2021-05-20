import React, { useState } from "react";
import axios from "axios";
import { getUser, getAllApps, getApp, createApp, updateApp,	patchApp} from '../../http/api'
import { AuthContext } from "../../App";


const AddAppForm = props => {
	const { state } = React.useContext(AuthContext);
	const initialFormState = { name:'Money', description:'Made', type: 'Mobile', framework:'Django'}
	const [app, setApp] = useState(initialFormState);
	const [submitted, setSubmitted] = useState(false);


	const handleInputChange = event => {
		const { name, value } = event.target

		setApp({ ...app, [name]: value })
	}

	const token = "59ed93513ebf146e3016250012ee92b37e804b2a"

	const saveApp = () => {
		fetch("https://hiring-example-25770.botics.co/api/v1/apps/", {
			method: "post",
			headers: {
				"Content-type": "application/json",
				"Authorization": `Token ${token}`,
			},
			body: JSON.stringify(
				{ name: app.name, description: app.description, type:app.type , framework:app.framework}
			)
			})
	    .then(response => {
				console.log("the request within the app", response)

      })
      .catch(e => {
        console.log(e);
      });
  };
	const newApp = () => {
    setApp(initialFormState);
    setSubmitted(false);
  };

	return (
		<div className="submit-form">
			{submitted ? (
				<div>
					<h4>You submitted successfully!</h4>
					<button className="btn btn-success" onClick={newApp}>
						Add
					</button>
				</div>
			) : (
				<div>
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							className="form-control"
							id="name"
							required
							value={app.name}
							onChange={handleInputChange}
							name="name"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="name">Type</label>
						<input
							type="text"
							className="form-control"
							id="type"
							required
							value={app.type}
							onChange={handleInputChange}
							name="type"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="description">Description</label>
						<input
							type="text"
							className="form-control"
							id="description"
							required
							value={app.description}
							onChange={handleInputChange}
							name="description"
						/>
					</div>
					<button onClick={saveApp} className="btn btn-success">
						Submit
					</button>
				</div>
			)}
		</div>
	)
}

export default AddAppForm
