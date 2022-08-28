import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import NavStyle from "./Nav.module.css"
class Nav extends Component {
    render() {
        return (
            <div className={NavStyle.nav}>
                <div className=''>
                    <NavLink to={"/"} className={NavStyle.link}>Transcations</NavLink> 
                    <NavLink to={"/operations"} className={NavStyle.link}>Operation</NavLink> 
                    <NavLink to={"/category"} className={NavStyle.link}>Category</NavLink> 
                </div>
                <div>
                    <div>
                    <span className={NavStyle.link}>Balance :</span>
                    <span className={NavStyle.balance}>${this.props.Balance}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav