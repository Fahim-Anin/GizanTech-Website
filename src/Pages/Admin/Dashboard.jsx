import React from 'react'
import { Col, Container } from 'react-bootstrap'

import AdminNavBar from './AdminNavBar'
import SidePanel from './SidePanel'
import './Admin.css'
import Manage from './Manage'
import { useState } from 'react'
const Dashboard = ({children}) => {
    const [isLog,SetLog] = useState('false');
    return (
        <div className='adminSection'>
            <AdminNavBar/>
            <Container>
            <center>

                <h1>DashBoard</h1>
            {children}
            </center>
            </Container>

        </div>
    )
}

export default Dashboard