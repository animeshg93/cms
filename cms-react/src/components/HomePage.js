import React,{ useEffect, useState }  from 'react';
import { Table, Button } from 'react-bootstrap';
import { withRouter} from 'react-router-dom';
import styles from '../css/styles.module.css';

export default function HomePage(props){
	const [message, setMessage] = useState('');

	useEffect(() => {
		fetch('http://localhost:3000/cms')
		.then(resp=> resp.json())
		.then(shouldRedirect)	
		})
	
	const shouldRedirect = function(data){
		if(data.status == "Login failed")
			props.history.push('/login')
		else setMessage(data.status)
	}


	const centerStyle2 = {
	    position: 'relative', left: '50%', top: '50%',
	    transform: 'translate(-50%, -50%)',
	    marginTop:'10px'
	  }

	return(
		<div className={styles.centerStyle}>
			<Button variant="primary" type="submit" style={centerStyle2}>Add New Player</Button>
			<Table striped bordered hover>
			  <thead>
			    <tr>
			      <th>#</th>
			      <th>First Name</th>
			      <th>Last Name</th>
			      <th>Team</th>
			      <th>Years played</th>
			    </tr>
			    <tr>
			      <td>1</td>
			      <td>Tom</td>
			      <td>Brady</td>
			      <td>New England Patriots</td>
			      <td>20</td>
			    </tr>
			  </thead>
			  <tbody>
			  
			  </tbody>
			</Table>
		</div>
	)
}