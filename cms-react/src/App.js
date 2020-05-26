import React, {useState} from 'react';
import NewUserForm from './components/NewUserForm'
import Login from './components/Login'
import HomePage from './components/HomePage'
import NavigationBar from './components/NavigationBar'
import { BrowserRouter, Route } from "react-router-dom"
import { UserProvider } from './context/AppContext'


export default function App() {
  const [logout,setLogout] = useState(false)

  const toggleLogout = function(){
  	setLogout(!logout)
  }

  const auth = {shouldLogout: logout, logoutFunc: toggleLogout}

  return (
  	<UserProvider value={auth}>
		<NavigationBar />
	  	<BrowserRouter>
	    	<Route path="/login" component={Login} />
	    	<Route path="/add" component={NewUserForm}/>
	    	<Route path="/home" component={HomePage} />
	     </BrowserRouter>
	</UserProvider>
  );
}

