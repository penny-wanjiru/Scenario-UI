import React from 'react'
import { useHistory, Redirect } from 'react-router-dom';
import Plans from '../pages/Plans'

import {Table} from 'react-bootstrap';

import styled from 'styled-components';

const TableWrapper = styled(Table)`
		margin-top: 8%;
`;
const Button = styled.button`
		margin-left: 2%;
`;
const UpgradeButton = styled.button`
		margin-left: 2%;
		margin-top: 4%;
		width: 65%;
`;

const AppsTable = props => {
	let history = useHistory();

	const RenderPlans = () => {
	  return  <Redirect  to="/signup" />
	}

	const location = {
	  pathname: '/plans',
	}

	return(
		<TableWrapper striped bordered hover >
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
					<UpgradeButton
						onClick={() => props.getPlans()}
            className="button muted-button"
          >
            Upgrade Plan
          </UpgradeButton>
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
)};

export default AppsTable
