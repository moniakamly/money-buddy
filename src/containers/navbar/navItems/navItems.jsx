import React from 'react'
import './navItems.scss'
import NavItem from './navItem/navItem'

class NavItems extends React.Component{

        render(){
            return(
                <div className='nav-items'>
                    <NavItem link='/' exact className='btn btn-three' activeClassName='btn btn-secondary'>Home</NavItem>
                    <NavItem link='/about' className='btn btn-three' activeClassName='btn btn-secondary'>About</NavItem>
                    <NavItem link='/my-list' className='btn btn-three' activeClassName='btn btn-secondary'>My list</NavItem>
                    <NavItem link='/auth' className='btn btn-three' activeClassName='btn btn-secondary'>SignIn/Up</NavItem>
                </div>
            )
        }


}


export default NavItems