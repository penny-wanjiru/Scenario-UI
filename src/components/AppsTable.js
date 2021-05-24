import React from 'react'
import { useHistory, Redirect, Link} from 'react-router-dom';
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

	const handleUpgrade = (app_id, sub_id ) =>{
		history.push({
			pathname: '/plans',
			state:{appId: app_id, subscriptionId:sub_id }
		});
	}


	return(
		<TableWrapper striped bordered hover >
	  <thead>
	    <tr>
	      <th>Name</th>
	      <th>Description</th>
	      <th>Type</th>
				<th>Framework</th>
				<th>Plan</th>
				<th>Actions</th>
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
				<td>{app.subscription}</td>
				<td>
          <UpgradeButton
            onClick={() => {
              props.editRow(app)
            }}
            className="button muted-button"
          	>
            Edit
          </UpgradeButton>
					<UpgradeButton
            onClick={() => props.deleteApplication(app.id)}
            className="button muted-button"
          >
            Delete
          </UpgradeButton>
					<UpgradeButton
						onClick={() => handleUpgrade(app.id, app.subscription)}
            className="button muted-button">
            Upgrade
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
