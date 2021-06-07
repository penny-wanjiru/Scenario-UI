import React , { useState, useEffect, Fragment } from 'react'
import { useHistory} from "react-router-dom";
import {ListGroup, Table, Card, Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';
import { AuthContext } from "../App";

import {createSubscription} from '../components/forms/AddAppForm'
import {getSubscriptionPlans, getSubscription, createSubscriptions, updateSubscription} from '../services/AppsService'

const Button = styled.button`
	 margin-left: 85%;
`
const SelectButton = styled.button`

`
const TableWrapper = styled(Table)`
		margin-top: 8%;
`;

const Description = styled.div`
	margin-left:7%;
	font-weight:500;
	border:1px solid #cccccc;
	border-radius:5px;
	padding:8px;
	width: 30%
`


const Plans = (props) => {
	const history = useHistory();
	const { appId , subscriptionId } = props.location.state;
	const [subId, setSubId] = useState([]);
	const [currentPlan, setCurrentPlan] = useState();
	const [plans, setPlans] = useState([]);
	const [planId, setPlanId] = useState();


	const { state } = React.useContext(AuthContext);
	let key = state.token

	useEffect(() => {
		getSubscriptionPlans(key)
		.then(data => data.json())
		.then(response => { setPlans(response);})
 	}, []);

	useEffect(() => {
		getSubscription(subscriptionId, key)
		.then(data => data.json())
		.then(response => {setCurrentPlan(response.plan)})
	}, []);

	const handleupdates = (planId, appId) => {
		let data = {plan:planId, app: appId, active:true}
		updateSubscription(subscriptionId, data, key)
		.then(data => data.json())
		.then(response => {setCurrentPlan(response.plan)})
	}

	const handleRedirect = ( ) =>{
		history.push({
			pathname: '/dashboard',
		});
	}

	return (
		<Container>
			<Button
				style={{marginTop:"5%"}}
				className="button muted-button"
				onClick={handleRedirect}>
				Back
			</Button>
			{currentPlan?
				<Description >You are currently subscribed to plan number: {currentPlan}</Description>:
				<Description >You don't have a current subscription</Description>
			}


		  <Row xs={3} style={{width:"90%", marginLeft:"6%", marginTop:"10%"}} >
				{[
					'Light',
				].map((variant, idx) => (
					plans.map(plan => (
						<Col >
							<Card
								bg={variant.toLowerCase()}
								key={idx}
								text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
								style={{ width: '20rem', height: '20rem' }}
								className="mb-2"
							>
							<Card.Header style={{color: "#5a05ff", fontWeight:600}}>Plan Number: {plan.id}</Card.Header>
							<Card.Header style={{color: "#5a05ff", fontWeight:600}}>{plan.name}</Card.Header>
							<Card.Body>
								<Card.Title></Card.Title>
								<Card.Text style={{fontSize:"14px", fontStyle: "Italic" }}>
									Description :<br/>
									{plan.description}
								</Card.Text>
								<Card.Text style={{color: "green"}}>
									Price: {plan.price}
								</Card.Text>
							</Card.Body>
							<Card.Footer className="text-muted">
								<SelectButton
								className="button muted-button"
								onClick={() => handleupdates(plan.id, appId)}
								>
								Upgrade
								</SelectButton>
							</Card.Footer>
							</Card>
							</Col>
					))
				))}
				</Row>

		</Container>
	)
}

export default Plans;
