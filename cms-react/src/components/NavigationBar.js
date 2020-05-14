import React, {useContext} from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import AppContext  from '../context/AppContext'

export default function NavigationBar(props){
	const logout = useContext(AppContext)
	return (
		<Navbar bg="dark" variant="dark">
			<Nav className="mr-auto">
		      <Nav.Link href="/login">Login</Nav.Link>
		      <Nav.Link href="/add">Add User</Nav.Link>
		      {logout.shouldLogout && <Nav.Link href="/login" >Logout</Nav.Link>}
		    </Nav>
		</Navbar>
	)
}