import React from 'react'
import {Table} from 'react-bootstrap';

import styled from 'styled-components';

const TableWrapper = styled(Table)`
		margin-top: 8%;
`
const Button = styled.button`
		margin-left: 2%;
`
const AppsTable = props => (
		<TableWrapper striped bordered hover>
	  <thead>
	    <tr>
	      <th>Name</th>
	      <th>Description</th>
	      <th>Type</th>
				<th>Framework</th>
				<th></th>
	    </tr>
	  </thead>
	  <tbody>
		{props.apps.length > 0 ? (
	   props.apps.map(app => (
	    <tr key={app.id}>
				<td>{app.name}</td>
				<td>{app.description}</td>
				<td>{app.type}</td>
				<td>{app.framework}</td>
				<td>
          <Button
            onClick={() => {
              props.editRow(app)
            }}
            className="button muted-button"
          	>
            Edit
          </Button>
					<Button
            onClick={() => props.deleteApplication(app.id)}
            className="button muted-button"
          >
            Delete
          </Button>
        </td>
	    </tr>
			))
	     ) : (
	       <tr>
	         <td colSpan={3}>No apps</td>
	       </tr>
	     )}
	  </tbody>
	</TableWrapper>
  // <table>
  //   <thead>
  //     <tr>
  //       <th>Name</th>
  //       <th>Description</th>
  //       <th>Type</th>
  //     </tr>
  //   </thead>
  //   <tbody>
  //     {props.apps.length > 0 ? (
  //       props.apps.map(app => (
  //         <tr key={app.id}>
  //           <td>{app.name}</td>
  //           <td>{app.description}</td>
	// 					<td>
  //             <button
  //               onClick={() => {
  //                 props.editRow(app)
  //               }}
  //               className="button muted-button"
  //             	>
  //               Edit
  //             </button>
	// 						<button
  //               onClick={() => props.deleteApp(app.id)}
  //               className="button muted-button"
  //             >
  //               Delete
  //             </button>
  //           </td>
  //         </tr>
  //       ))
  //     ) : (
  //       <tr>
  //         <td colSpan={3}>No apps</td>
  //       </tr>
  //     )}
  //   </tbody>
  // </table>
)

export default AppsTable
