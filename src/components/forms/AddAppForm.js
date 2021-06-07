import React, { useState } from "react";

import { AuthContext } from "../../App";
import {createApp, createSubscription} from '../../services/AppsService'

import {Input, SubmitButton} from "../../styles/Forms";


const AddAppForm = props => {
	const { state, dispatch } = React.useContext(AuthContext)
	const initialFormState = { name:'Example Name', description:'Example desc', type: 'Mobile', framework:'Django'}
	const [app, setApp] = useState(initialFormState);
	const [submitted, setSubmitted] = useState(false)

	const key = state.token

	const handleInputChange = event => {
		const { name, value } = event.target
		setApp({ ...app, [name]: value })
	}

	const saveApp = () => {
		let data = { name: app.name, description: app.description, type:app.type , framework:app.framework}
		createApp(data, key)
		.then(res => {
			let sub_data = {plan:1, app:res.id, active:true}
			const subs = createSubscription(sub_data, key)
			setSubmitted(true);
		})
		.catch(e => {
			props.setServerErrors({
				errorStatus: e.status,
				errorMessage:`An Error has occured: ${e.statusText}`
			});
		});
  };

	return (
		<div className="submit-form">
				<div>
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<Input
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
						<label htmlFor="type">Type</label>
						<select id="type" name="type"onChange={handleInputChange} required>
							<option value="Web">Web</option>
							<option value="Mobile">Mobile</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="framework">Framework</label>
						<select id="framework" name="framework" onChange={handleInputChange} required>
							<option value="Django">Django</option>
							<option value="React Native">React Native</option>
						</select>
					</div>
					<div className="form-group">
						<label htmlFor="description">Description</label>
						<Input
							type="text"
							className="form-control"
							id="description"
							required
							value={app.description}
							onChange={handleInputChange}
							name="description"
						/>
					</div>
					<SubmitButton onClick={saveApp}>
						Submit
					</SubmitButton>
				</div>
		</div>
	)
}

export default AddAppForm;
