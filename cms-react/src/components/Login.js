import React from 'react';
import {useForm} from 'react-hook-form'
import { Form,Button } from 'react-bootstrap';
import NavigationBar from './NavigationBar'


export default function Login(props) {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = function(data){
    fetch(`http://localhost:3000/cms/login/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(resp=> resp.json())
      .then(redirect);
  }

  const redirect=function(data){
    document.getElementById("name-form").reset()
    if(data.status==="SUCCESS"){
      props.history.push('/home');
    }
  }

  const centerStyle = {
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)',
    marginTop:'10px'
  }

  return (
    <>
    <NavigationBar />
    <div style={centerStyle}>
      <Form onSubmit={handleSubmit(onSubmit)} id="name-form">
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control name="username" type="text" ref={register} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" ref={register} />
        </Form.Group>
        
        <Button variant="primary" type="submit">Login</Button>
      </Form>
    </div>
    </>
  );
}

