import React, { useState, useEffect } from 'react'

import {Input, SubmitButton} from "../../styles/Forms";

const EditAppForm = props => {
  const [ app, setApp ] = useState(props.currentApp)

  // useEffect(
  //   () => {
  //     setApp(props.currentApp)
  //   },
  //   [ props ]
  // )

  const handleInputChange = event => {
    const { name, value } = event.target

    setApp({ ...app, [name]: value })
  }

  return (
	    <form
	      onSubmit={event => {
	        event.preventDefault()
	        props.updateApplication(app.id, app)
	      }}
	    >
      <label>Name</label>
      <input type="text" name="name" value={app.name} onChange={handleInputChange} />
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
			<label>Description</label>
      <input type="text" name="description" value={app.description} onChange={handleInputChange} />
      <button style={{marginTop: "1rem"}}>Update App</button>
      <button style={{float:"right", marginTop: "1rem"}} onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditAppForm;
