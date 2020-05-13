import React from 'react';
import {useForm} from 'react-hook-form'
import { Form,Button } from 'react-bootstrap';
import styles from '../css/mystyle.module.css'

export default function NameForm(props) {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = function(data){
    fetch(`http://localhost:3000/cms/addAdmin/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(resp=> resp.json())
      .then(document.getElementById("name-form").reset());
  }

  const centerStyle = {
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)',
    marginTop:'10px'
  }

  return (
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
        
        <Button variant="primary" type="submit">{props.button}</Button>
      </Form>
    </div>
  );
}

