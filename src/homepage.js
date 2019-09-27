import React,{Component} from 'react';
import SideDrawer from './components/sideDrawer/SideDrawer';
import Toolbar from './components/toolbar/Toolbar';
import BackDrop from './components/backDrop/BackDrop';
import './Homepage.css';

class App extends Component{
  constructor(props){
    super(props)
  }
  state = {
    sideDrawerOpen: true
  };
  drawerToggleClickHandler = () => {
   
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };
  backDropClickHandler = () => {
      this.setState({sideDrawerOpen : false});
  };
  render() {
    const{...props}=this.props
    
    let backDrop;

    let sideDrawer;
    
    if(this.state.sideDrawerOpen) {
    
      backDrop= <BackDrop click= {this.backDropClickHandler}/>;
     }
    return(
      <div style = {{ height: '100%', width:'100%' }}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen}/>
          {/* <div>Hello Aayushi</div> */}
        {/* <div style={{marginTop: '64px', display:'flex'}}> */}
        
        {/* <div className="main-heading">Hello Aayushi!!! </div> */}
       {/* </div> */}
      </div>
    );
  }
}

export default App;
