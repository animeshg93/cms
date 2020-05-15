import React from 'react';
import {useForm} from 'react-hook-form'
import { Form,Button } from 'react-bootstrap';
import styles from '../css/styles.module.css';

export default function NewUserForm(props) {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = function(data){
    fetch(`http://localhost:3000/cms/addAdmin/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(resp=> resp.json())
      .then(document.getElementById("name-form").reset());
  }

  return (
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
        
        <Button variant="primary" type="submit">Add</Button>
      </Form>
    </div>
  );
}

