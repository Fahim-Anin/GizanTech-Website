import React from 'react'
import { Link } from 'react-router-dom'
import Dashboard from './Dashboard'

const Manage = () => {
    return (
        <div>
            <Dashboard>



            <div className='row'>
               
              
                <div className='col  col-3 offset-1 optionCard'>
                <Link to='emp/attendence'>   Employee Attendence  </Link>
                </div>
             

                <div className='col  col-3 offset-1 optionCard'>
                   <Link>
                   Recruitement Infomation
                   </Link> 
                </div>
                <div className='col  col-3 offset-1 optionCard'>
                  <Link to='/adminpanel/empinfo'>
                    Employee Information
                  </Link>

                </div>
            </div>
            </Dashboard>
        </div>
    )
}

export default Manage