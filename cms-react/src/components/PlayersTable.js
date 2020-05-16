import React,{useEffect,useState}  from 'react';
import { Table } from 'react-bootstrap';
import styles from '../css/styles.module.css';

export default function PlayersTable(props){

	const[playersList, setPlayersList] = useState([])
	useEffect(() => {
		fetch('http://localhost:3000/cms/getPlayers')
		.then(resp=> resp.json())
		.then(data=>setPlayersList(data))	
		},[])

	const renderRows = function(){
		return playersList.map((player, index)=>{
		  		const {first_name, last_name, team_name, years_played} = player 
		  		return (
		  		<tr>
			      <td>{first_name}</td>
			      <td>{last_name}</td>
			      <td>{team_name}</td>
			      <td>{years_played}</td>
			    </tr>
			    )
		  	})	
	}

	return(		
		<Table striped bordered hover>
		  <thead>
		    <tr>
		      <th>First Name</th>
		      <th>Last Name</th>
		      <th>Team</th>
		      <th>Years played</th>
		    </tr>
		  </thead>
		  <tbody>
		  	{renderRows()}		  	
		  </tbody>
		</Table>	
	)
}