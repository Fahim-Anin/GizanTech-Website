import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import Dashboard from './Dashboard'
import galib from '../../Assets/Images/MemberProfiles/galib.jpg';

const Profile = () => {
    return (
        <div>
            <Dashboard>
                <Row>
                    <div className='col col-5 editForm py-4' md={6}>
                        <img className="teamMember " src={galib} alt="banner" />
                        <div>
                            <Form>

                                <Form.Group as={Col} controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Name" value={`Md Musanna Galib`} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" id='formGridPassword' placeholder="Email" value={`mglaib100@gmail.com`} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Position</Form.Label>
                                    <Form.Control type="text" id='formGridPassword' placeholder="position" value={`Junior Software Engineering`} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Button type="submit"  className='my-2'> Submit</Button>
                                </Form.Group>

                            </Form>
                        </div>
                    </div>
                    <div className='col col-6 offset-1 bg-info' md={6}>

                    </div>
                </Row>
            </Dashboard>

        </div>
    )
}

export default Profile