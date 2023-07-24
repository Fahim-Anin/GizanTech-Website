import React from 'react'
import Jobs from './DemoJobs'
import './Registration.css';
import { Accordion, Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const OpenJobs = () => {
  return (
    Jobs.map((job,key) => {
      return <div key={key} className='w-10 my-3 rounded'>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
            <Row className='rounded  p-3 d-flex '>
          <Col md={12}>
            <h5 className='titleText'>{job.title}</h5>
            <div className='details'>
              1 day ago  <span>&nbsp;•&nbsp;</span> {job.type}  <span>&nbsp;•&nbsp;</span> {job.location}
            </div>
          </Col>
          
        </Row>
            </Accordion.Header>
            <Accordion.Body>
              <div className='semititleText'>
              Job description:
              </div>
             <p>
                {job.details}
                </p> 
              <div>
                <div className='semititleText'>
              Job  requirements:
                </div>
                {job.requirements}
              </div>
                
              
              <Link to={`/apply/${job.id}`}> <Button className='m-1'> Apply Now </Button></Link>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        
      </div>
    })

  )
}

export default OpenJobs