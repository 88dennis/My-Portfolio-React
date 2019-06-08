import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
// import Footer from "../components/Footer";
import SignupLoginForm from "../components/SignupLoginForm";
// import logo from ''./logo.png";

import { Container } from "../components/Grid";
import logo from '../images/DS3.png';

// const divStyle = {
//   fontSize: '25px',
//   textAlign: "center"
// };

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

const styleHeader = {
  backgroundColor: '#fff',
  padding: '10px',
  textDecoration: 'none',
  position: 'fixed',
  width: '100%',
  zIndex: '2',
  top: '0',
  height: '30px',
  boxShadow: '0px 1px 7px 0px rgba(0, 0, 0, 0.4)',
  display: 'flex',
  transition: 'top 0.2s ease-in-out',
};

class SignupLogin extends Component {
  state = {
    styleHeader: styleHeader,
    isScrolling: false,
    showMe: false,
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    loginusername: "",
    loginemail: "",
    loginpassword: "",
    loggedIn: false,
    loginMessage: "",
    signupMessage: "",
    redirectTo: null,
    isHide: false,
  }

 
//   hideBar = () => {
//     const { isHide } = this.state

//     window.scrollY > this.prev ?
//     !isHide && this.setState({ isHide: true })
//     :
//     isHide && this.setState({ isHide: false });

//     this.prev = window.scrollY;
//  }
//   componentDidMount(){
//     window.addEventListener('scroll', this.hideBar);
// }

// componentWillUnmount(){
//      window.removeEventListener('scroll', this.hideBar);
// }

// componentDidMount() {
//   window.addEventListener("scroll", this.onScroll);
// }

// componentWillUnmount() {
//   window.removeEventListener("scroll", this.onScroll);
// }

// onScroll = () => {
//   this.setState({ isScrolling: true });

//   clearTimeout(this.timeout);

//   this.timeout = setTimeout(() => {
//     this.setState({ isScrolling: false });
//   }, 200);
// };


  hideShow = () => {
    const newState = { ...this.state }
    newState.showMe = !newState.showMe
    newState.scale = this.state.scale > 1 ? 1 : 1.5
    this.setState(newState);
  }

  handleSubmitInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleLoginInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value

    });
  }

  handleSignupFormSubmit = async event => {
    
  }

  handleLoginFormSubmit = event => {
  
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    }

    // const classHide = this.state.isHide ? 'hide' : '';
    return (
      <Container>

{/* <div style={this.state.styleHeader}>
asdasd
</div> */}

{/* <div className={`topbar ${classHide}`}>topbar</div> */}

{/* <div style={{ height: 500, overflowY: "scroll" }}>
        <div style={{ paddingTop: 50 }}>
          {this.state.isScrolling ? "Hidden" : "Shown"}
        </div>
      </div> */}
        
        <div className="homepagewrap">
        {/* LOGO START */}
        <div className="logocont">
          <div className="logocont2">
            <div className="logocirclewrap1">
              <div className="logocirclewrap2">
                <img className="logoimghome" src={logo} alt="Logo" />
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
          <div style={styles.divStyle}>
            <p>Welcome to Sarmiento Dev!</p>
            </div>
            <br></br>
          <div style={styles.divStyle2}>
            <p>Design | Development</p>
            </div>
            <br></br>
 
          </div>
        </div>
        <br></br>
        <br></br>
        {/* APP DESCRIPTION ENDS */}

        <div className="loginsignupbtnhomewrap">
        <button className="loginsignupbtnhome" onClick={() => this.hideShow()}>Log In/ Sign Up</button>
        </div>

        <SignupLoginForm
          handleSubmitInputChange={this.handleSubmitInputChange}
          handleSignupFormSubmit={this.handleSignupFormSubmit}
          id={this.state.id}

          username={this.state.username}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          password={this.state.password}
          handleLoginInputChange={this.handleLoginInputChange}
          handleLoginFormSubmit={this.handleLoginFormSubmit}
          loginusername={this.state.loginusername}
          loginemail={this.state.loginemail}
          loginpassword={this.state.loginpassword}
          loginMessage={this.state.loginMessage}
          signupMessage={this.state.signupMessage}
          showMe={this.state.showMe}
          hideShow={this.hideShow}
        />
        {/* <Footer /> */}
        </div>
      </Container>
    );
  }
}

export default SignupLogin;
