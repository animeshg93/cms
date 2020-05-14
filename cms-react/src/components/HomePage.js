import React,{ useEffect, useState }  from 'react';
import { Button } from 'react-bootstrap';
import { withRouter} from 'react-router-dom';

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

	return(
		<>
			<h1>{message}</h1>
		</>
	
	)
}