import React from 'react'
import './Sidebar.css'
import {NavLink} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to='/info' className="sidebar-option">
                <p>Customers</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar