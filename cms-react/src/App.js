import React from 'react';
import NameForm from './components/NameForm'
import HomePage from './components/HomePage'
import NavigationBar from './components/NavigationBar'
import { BrowserRouter, Route } from "react-router-dom"


export default function App() {
  return (
  	<>
	  	<NavigationBar />
	  	<BrowserRouter>
	    	<Route path="/login" render={(props) => <NameForm {...props} action="login" button="Login"/>}  />
	    	<Route path="/admin" render={(props) => <NameForm {...props} action="addAdmin" button="Add"/>}  />
	    	<Route path="/home" component={HomePage} />
	     </BrowserRouter>
	</>
  );
}

