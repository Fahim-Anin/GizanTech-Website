import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Layout from '../../Components/Layout/Layout';
import './Apply.css'

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}
const Apply = () => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <div>
      <Layout>
        <Form>
      <Row className="mb-3">
        <h5 className='my-1 labelText'>Personal information:</h5>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Institutions</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Series</Form.Label>
          <Form.Control type="number" placeholder="Series" />
        </Form.Group>
      </Row>
     
      <Row className="mb-3">     
      <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
        <Form.Label>Date of Birth </Form.Label>
        <Form.Control type='date' placeholder="" />
      </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Gender</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>Male</option>
            <option>FeMale</option>
          </Form.Select>
        </Form.Group>
    <h5 className='my-2 labelText'>Documents:</h5>
        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Resume</Form.Label>
          <Form.Control type='file'/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
      <Form.Label>Legal Agreements</Form.Label>
        <Form.Check type="checkbox" label="I agree to Gizan tech's Privacy Policy" />
      </Form.Group>

     
      <center>
      <Button
      variant="outline-primary"
      size='lg'
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? 'Loading…' : 'Submit'}
    </Button>
      </center>
     
    </Form>
    </Layout>
    </div>
  )
}

export default Apply