import React from 'react';
import {useForm} from 'react-hook-form'
import { Form,Button } from 'react-bootstrap';
import styles from '../css/styles.module.css';

export default function NewPlayerForm(props) {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = function(data){
    fetch(`http://localhost:3000/cms/addPlayer/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(resp=> resp.json())
      .then(document.getElementById("name-form").reset());
  }

  return (
      <Form onSubmit={handleSubmit(onSubmit)} id="name-form">
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control name="first_name" type="text" ref={register} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control name="last_name" type="text" ref={register} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Team</Form.Label>
          <Form.Control name="team_name" type="text" ref={register} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Years played</Form.Label>
          <Form.Control name="years_played" type="number" ref={register} />
        </Form.Group>
        
        <Button variant="primary" type="submit">Add Player</Button>
      </Form>
  );
}

