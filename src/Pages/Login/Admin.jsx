import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Layout from '../../Components/Layout/Layout';
import {Random} from 'react-animated-text'
import axios from 'axios';
function Admin() {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
   
  };

  return (
    <Layout>
      <center>
        <div style={{'font-size':'30px','font-weight':'400'}}>
        <Random
        text="  Admin Signin  "
        effect="jump"
        effectChange={2.0}
        effectDuration={0.3}
        
        />
        </div>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>

          <Form.Group as={Col} md="4" className='my-2' controlId="validationCustom01">
            <Form.Control
              required
              type="text"
              placeholder="Enter your email"

            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" className='my-2' controlId="validationCustom01">
            <Form.Control
              required
              type="Password"
              placeholder="Type your Password"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>


          <Button type="submit">Submit form</Button>
        </Form>

      </center>
    </Layout>
  );
}

export default Admin