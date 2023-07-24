import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Wave, Random } from 'react-animated-text';

import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Layout from '../../Components/Layout/Layout';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Member() {

  const [validated, setValidated] = useState(false);
  const [input, setInput] = useState({});

  const handleChange = (event) => {
    const value = event.target.value
    // console.log(value);
    setInput(values =>({...values,[event.target]:value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
        console.log("false")
    }else{
      setValidated(true);
          // API IS CALLING HERE
    axios.post('http://192.168.1.105:1234/demoReg.php',input).then((response)=>{
      console.log('The response: ')
      console.log(response)
    })
    }

    
  };

  return (
    <Layout>
      <center>
        <div style={{ 'font-size': '30px', 'font-weight': '400' }}>
          <Wave

            text="Member Signin"
            effect="stretch"
            effectChange={2}
          />

        </div>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>

          <Form.Group as={Col} md="4" className='my-2'>

            <Form.Control
              required
              type="text"
              placeholder="Enter your email"
              name='email'
              onChange={handleChange}

            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" className='my-2'>

            <Form.Control
              required
              type="Password"
              placeholder="Type your Password"
              defaultValue=""
              name='password'
              onChange={handleChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>


          <Button type="submit">Submit form</Button>
        </Form>

      </center>
    </Layout>
  );
}

export default Member