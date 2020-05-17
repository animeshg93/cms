import React,{useContext} from 'react';
import {useForm} from 'react-hook-form'
import { Form,Button } from 'react-bootstrap';
import AppContext  from '../context/AppContext'
import styles from '../css/styles.module.css';

export default function Login(props) {
  const { register, handleSubmit, watch, errors } = useForm();
  const logoutObject = useContext(AppContext)

  const onSubmit = (data) => {
    fetch(`http://localhost:3000/cms/login/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(resp=> resp.json())
      .then(redirect);
  }

  const redirect= (data) =>{
    document.getElementById("name-form").reset()
    if(data.status==="LOGIN SUCCESS"){
      props.history.push('/home');
      logoutObject.shouldLogout = true
      logoutObject.logoutFunc()
    }
  }

  return (
    <>
    <div className={styles.centerStyle}>
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

