import React, { Component, Fragment } from 'react';
import Accounts from '../Accounts'

import './SideDrawer.css';

class SideDrawer extends Component {
    constructor(props){
        super(props);
        this.state={compo:false}
    }
      
    handleClick=()=>{
        this.setState({compo:true})
    }
    render(){ 
    const {...props}= this.props;
    let drawerClasses = ['side-drawer'];
    if(props.show){
        drawerClasses = 'side-drawer open';
    }
    
    return (
        !this.state.compo ?
        <div><div><nav className = {drawerClasses}>
            <div className="main-div">
                <span className="header">MMT</span>
                </div>
            <ul>
                <li className="list">Dashboard<br/></li>
                <li className="list" onClick={this.handleClick}>Accounts<br/></li>
                <li className="list">Jobs</li>
            </ul>
        </nav></div>
        <div className="main-heading">Hello Aayushi</div></div>
        : 
        <Fragment>
            <nav className = {drawerClasses}>
            <div className="main-div">
                <span className="header">MMT</span>
                </div>
            <ul>
                <li><a href="/">Dashboard</a><br/></li>
                <li>Accounts<br/></li>
                <li><a href="/Jobs">Jobs</a><br/></li>
            </ul>
            </nav>
            <Accounts/>
            </Fragment>
    );
    }
}
export default SideDrawer;