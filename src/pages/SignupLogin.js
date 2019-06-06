import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
// import Footer from "../components/Footer";
import SignupLoginForm from "../components/SignupLoginForm";
// import logo from ''./logo.png";

import { Container } from "../components/Grid";
import logo from '../images/logotrans.png';

class SignupLogin extends Component {
  state = {
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
    redirectTo: null
  }

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
    return (
      <Container>
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
            <p>Keep your Money | Keep your Friends</p>
            <br></br>
            <p>What is UO?
                UO is financial app that keeps track of the money you have lent and borrowed. Forget
                the uncomfortable conversation of money, UO automates reminders and logs transactions so you
                can keep
                your money and your friends.
            </p>
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
