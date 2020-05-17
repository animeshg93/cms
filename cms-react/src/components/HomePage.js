import React,{ useEffect, useState }  from 'react';
import { Table, Button } from 'react-bootstrap';
import { withRouter} from 'react-router-dom';
import styles from '../css/styles.module.css';
import NewPlayerForm from './NewPlayerForm'
import PlayersTable from './PlayersTable'

export default function HomePage(props){
	const [playerFormShow, setPlayerFormShow] = useState(false);
	const [shouldRender, setShouldRender] = useState(false);

	useEffect(() => {
		fetch('http://localhost:3000/cms')
		.then(resp=> resp.json())
		.then(shouldRedirect)	
	},[])
	
	const shouldRedirect = (data)=>{
		if(data.status == "Login failed")
			props.history.push('/login')
		else
			setShouldRender(true)
	}

	if(shouldRender){
		return(	
			 <div className={styles.centerStyle} >
				{playerFormShow && <NewPlayerForm />}
				{playerFormShow &&<Button style={{marginTop:'10px'}} 
						variant="secondary" type="submit" onClick={()=>setPlayerFormShow(false)}>Done</Button> }
				{!playerFormShow &&<Button className={styles.centerStyle_relative} 
						variant="primary" type="submit" onClick={()=>setPlayerFormShow(true)}>Add New Player</Button> }
				{!playerFormShow && <PlayersTable />}
			</div>
		)
	}else return null;
}