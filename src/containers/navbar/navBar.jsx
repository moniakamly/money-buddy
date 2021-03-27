import React from 'react'
import  './navBar.scss'
import NavItems from './navItems/navItems' 
import NavItem from './navItems/navItem/navItem'
import logo from '../../logo.png'

const navBar = (props) =>(
    <div className='navbar'>
        <img src={logo} alt='logo' className='navbar-logo'/>
        <NavItems/>
        <NavItem link='auth'  className='btn btn-primary' activeClassName='btn btn-primary'>Register!</NavItem>
    </div>
)
export default navBar