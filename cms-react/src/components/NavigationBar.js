import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';

export default function NavigationBar(){
	return (
		<Navbar bg="dark" variant="dark">
			<Nav className="mr-auto">
		      <Nav.Link href="/login">Login</Nav.Link>
		      <Nav.Link href="/admin">Add User</Nav.Link>
		    </Nav>
		</Navbar>
	)
}