import React, { Component } from "react";
// import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";
import logo from '../images/DS3BLACKNOBGNOSH.png';
import logo2 from '../images/DS3NOBGBG.png';

const styles = ({
  divStyle: {
    fontSize: '25px',
    textAlign: "center",
    fontFamily: 'arial',
  },

  divStyle2: {
    fontSize: '20px',
    textAlign: "center"
  },

});

class LandingPage extends Component {
state = {
  btnmsg: "Welcome",
  showLogo1: true,
}

handleShowLogo1 = ()  => {
  const newState = {...this.state}
  newState.showLogo1 = !newState.showLogo1
  // newState.showLogo2 = !newState.showLogo2
  // newState.btnmsg = "hello"
  this.setState(newState)
}

componentWillMount() {
  setInterval(this.handleShowLogo1, 5000)
}

  render() {

    
let hideLogo = {
  'display': "flex" 
};
let hideLogo2 = {
  'display': "none" 
};

    if(!this.state.showLogo1) {
      hideLogo = { 
        'display': "none"
     };
      hideLogo2 = { 'display': "flex" };
    }
    
    return (
      <div className = "landingPageContainer" 
      // style={{ height: '100%' }}
      
      >
        <div className="homepagewrap">
          {/* LOGO START */}
          <div className="logocont">
            <div className="logocont2">
              <div className="logocirclewrap1" onMouseEnter= {this.handleShowLogo1} style={hideLogo}>
                <div  className="logocirclewrap2">
                  <img className="logoimghome" src={logo} alt="Logo" />
                </div>
              </div>
            </div>
          </div>
          {/* LOGO ENDS */}
          {/* LOGO START */}
          <div className="logocont">
            <div className="logocont2"  >
              <div className="logocirclewrap1" onMouseLeave= {this.handleShowLogo1} style={hideLogo2}>
                <div className="logocirclewrap3">
                  <img className="logoimghome3" src={logo2} alt="Logo" />
                </div>
              </div>
            </div>
          </div>
          {/* LOGO ENDS */}
          <br></br>
          <br></br>
          {/* APP DESCRIPTION STARTS */}
          <div className="descwrap1">
            <div className="descwrap2">
              <div style={styles.divStyle}>
                <p>Looking for Web Designs?</p>
              </div>
              <br></br>
              {/* <div style={styles.divStyle}>
                <p>Welcome to Sarmiento Dev!</p>
              </div> */}
              <br></br>
              <div style={styles.divStyle2}>
                <p>Sarmiento Dev | Design | Development</p>
              </div>
              <br></br>
            </div>
          </div>
          <br></br>
          {/* APP DESCRIPTION ENDS */}
          <div className="loginsignupbtnhomewrap">
            <button onMouseEnter={() => this.setState({ btnmsg: "Go Inside!" })} onMouseLeave={() => this.setState({ btnmsg: 'Welcome!' })} className="loginsignupbtnhome"><Link to="/homepage"><div className={window.location === "/homepage" ? "landpagediv landnow" : "landpagediv landnotnow"}>
              {this.state.btnmsg}</div></Link></button>
          </div>
        </div>
      </div>
    );
  }
}
export default LandingPage;
