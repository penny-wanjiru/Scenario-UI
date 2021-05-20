import React, { useState, useEffect } from 'react'

const EditAppForm = props => {
  const [ app, setApp ] = useState(props.currentApp)

  // useEffect(
  //   () => {
  //     setApp(props.currentApp)
  //   },
  //   [ props ]
  // )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

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
      <label>Type</label>
      <input type="text" name="type" value={app.type} onChange={handleInputChange} />
			<label>Description</label>
      <input type="text" name="desription" value={app.description} onChange={handleInputChange} />
      <label>Framework</label>
      <input type="text" name="framework" value={app.framework} onChange={handleInputChange} />
      <button>Update App</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditAppForm;
