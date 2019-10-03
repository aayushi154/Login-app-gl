import React, { Component, Fragment } from 'react';
import Accounts from '../Accounts'
import { Link } from 'react-router-dom';
import './SideDrawer.css';

class SideDrawer extends Component {
    render(){
    const {...props}= this.props;
    let drawerClasses = ['side-drawer'];
    if(props.show){
        drawerClasses = 'side-drawer open';
    }
    return (
       <nav className = {drawerClasses}>
            <div className="main-div">
                <span className="header">MMT</span>
            </div>
            <ul>
                <li className="list" ><Link to='/dashBoard'>Dashboard</Link><br/></li>
                <li className="list" ><Link to='/accounts'>Accounts</Link><br/></li>
                <li className="list" ><Link to='/jobs'>Jobs</Link></li>
            </ul>
        </nav>
    )}
}
export default SideDrawer;