import React , { useState, useEffect, Fragment } from 'react'
import {ListGroup, Table, Card, Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';
import { AuthContext } from "../App";


import {getPlans, createSubscriptions} from '../services/AppsService'

const Button = styled.button`
	 margin-left: 82%;
`
const SelectButton = styled.button`
	display: flex;
	fle
`
const TableWrapper = styled(Table)`
		margin-top: 8%;
`;

export const CardsWrapper = styled.div`
	border: 1px solid #cccccc;
	border-radius: 5px;
	padding: 30px 0px 30px 0px;
`;

const Plans = (props) => {
	// const { state } = React.useContext(AuthContext);
	// let key = state.token

	// useEffect(() => {
	// 	getPlans(key)
	// 	.then(response => {console.log("why",response); setPlans(response);})
 	// }, [plans]);

	// const subscribe = (id, app, active) => {
	// 	createSubscriptions(id, app, active, key)
	// 	.then(res => {
	// 			console.log("Deleted successfully", res)
	// 	})
	// 	.catch(e => {
	// 		console.log(e);
	// 	});
	// };

	// return (
	// 	<TableWrapper striped bordered hover >
	//   <thead>
	//     <tr>
	//       <th>Name</th>
	//       <th>Description</th>
	//       <th>Price</th>
	// 			<th></th>
	//     </tr>
	//   </thead>
	//   <tbody>
	// 	{props.plans.length > 0 ? (
	//    props.plans.map(plan => (
	// 	    <tr key={plan.id}>
	// 				<td style={{color:"#5a05ff"}} >{plan.name}</td>
	// 				<td>{plan.description}</td>
	// 				<td>{plan.price}</td>
	// 				<td>
	// 					<Button
	//
	//             className="button muted-button"
	//           >
	//             Select
	//           </Button>
	//         </td>
	// 	    </tr>
	// 		))
	// 		<Button
	// 			onClick={() => props.setShowingPlans(false)}
	// 			className="button muted-button"
	// 		>
	// 			Cancel
	// 		</Button>
	//      ) : (
	//        <tr>
	//          <td colSpan={3}>No plans</td>
	//        </tr>
	//      )}
	//   </tbody>
	// </TableWrapper>
	// )
	return(
		<Container>
		<CardsWrapper>
		  <Row xs={3} style={{marginLeft: "20px"}} >

				{[
					'Light',
				].map((variant, idx) => (
					props.plans.map(plan => (
						<Col >
							<Card
								bg={variant.toLowerCase()}
								key={idx}
								text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
								style={{ width: '12rem', height: '20rem' }}
								className="mb-2"
							>
							<Card.Header>Header</Card.Header>
							<Card.Body>
								<Card.Title>{variant} {plan.name} </Card.Title>
								<Card.Text>
									Description :{plan.description}
									Price: {plan.price}
								</Card.Text>
							</Card.Body>
							<Card.Footer className="text-muted">
								<SelectButton
								className="button muted-button"
								>
								Select
								</SelectButton>
							</Card.Footer>
							</Card>
							</Col>
					))
				))}

				</Row>

				<Button
					onClick={() => props.setShowingPlans(false)}
					className="button muted-button"
					>
					Cancel
				</Button>
				</CardsWrapper>
		</Container>

	)
}

export default Plans;
