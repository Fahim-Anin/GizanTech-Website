import React from 'react'
import { Button, Table } from 'react-bootstrap'
import Dashboard from './Dashboard'
import { mlResearch, embeded, blockChain, managing, appDev, webDev, iot } from '../Team/teamMemberList'
import { Link } from 'react-router-dom'
export const EmployeeInfo = () => {

    return (
        <div>
            <Dashboard>

                <h4 className='color-light bg-info'>
                    EmployeeInfo
                </h4>

                <div className=' color-light'>
                    <Table borderless className='empInfoList' hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>designation</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {iot.map((emp) => (
                                <tr>
                                    <td>{emp.id} </td>
                                    <td className=''>{emp.name}</td>
                                    <td>demomail@gizantech.com</td>
                                    <td>{emp.position} </td>
                                    <td> <Link to={`/adminpanel/empinfo/profile/${emp.id}`} ><Button variant='secondary'> Edit</Button> </Link></td>
                                    <td>  <Button variant='danger'> Delete</Button></td>
                                </tr>
                            ))}

                        </tbody>
                    </Table>
                </div>
            </Dashboard>

        </div>
    )
}
