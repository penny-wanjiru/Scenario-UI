import React, { useState } from "react";
import { AuthContext } from "../../App";
import {createApp} from '../../services/AppsService'


const AddAppForm = props => {
	const { state } = React.useContext(AuthContext);
	const initialFormState = { name:'Money', description:'Made', type: 'Mobile', framework:'Django'}
	const [app, setApp] = useState(initialFormState);
	const [submitted, setSubmitted] = useState(false);


	const handleInputChange = event => {
		const { name, value } = event.target

		setApp({ ...app, [name]: value })
	}


	const saveApp = () => {
		let data = { name: app.name, description: app.description, type:app.type , framework:app.framework}
		createApp(data)
		.then(res => {
				console.log("Updated successfully", res)
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
