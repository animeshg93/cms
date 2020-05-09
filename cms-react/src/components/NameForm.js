import React from 'react';
import {useForm} from 'react-hook-form'
import { Form,Button } from 'react-bootstrap';
import { withRouter} from 'react-router-dom';

export default function NameForm(props) {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = function(data){
    fetch(`http://localhost:3000/cms/${props.action}/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(resp=> resp.json())
      .then(redirect);
  }

  const redirect=function(data){
    document.getElementById("name-form").reset()
    if(data.status==="SUCCESS" && props.action === "login"){
      props.history.push('/home');
    }
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
        
        <Button variant="primary" type="submit">{props.button}</Button>
      </Form>
    </div>
  );
}

