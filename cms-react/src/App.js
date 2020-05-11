import React from 'react';
import NameForm from './components/NameForm'
import Login from './components/Login'
import HomePage from './components/HomePage'
import { BrowserRouter, Route } from "react-router-dom"


export default function App() {
  return (
  	<>
	  	
	  	<BrowserRouter>
	    	<Route path="/" component={Login}  exact />
	    	<Route path="/admin" render={(props) => <NameForm {...props} action="addAdmin" button="Add"/>}  />
	    	<Route path="/home" component={HomePage} />
	     </BrowserRouter>
	</>
  );
}

