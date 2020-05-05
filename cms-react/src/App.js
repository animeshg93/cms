import React from 'react';
import {useForm} from 'react-hook-form'
import { Form,Button } from 'react-bootstrap';



export default function App() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
  const centerStyle = {
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)',
    marginTop:'10px'
  }

  return (
    <div style={centerStyle}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>First Name </Form.Label>
          <input name="first" ref={register} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Last Name </Form.Label>
          <input name="last" ref={register} />
        </Form.Group>
        
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </div>
  );
}

