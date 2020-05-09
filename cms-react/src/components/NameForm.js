import React from 'react';
import {useForm} from 'react-hook-form'
import { Form,Button } from 'react-bootstrap';



export default function NameForm() {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = function(data){
    fetch('http://localhost:3000/cms/login/', {
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
          <Form.Label>First Name </Form.Label>
          <Form.Control name="first_name" type="text" ref={register} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Last Name </Form.Label>
          <Form.Control name="last_name" type="text" ref={register} />
        </Form.Group>
        
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </div>
  );
}

