import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logotrans.png';
import "./style.css";


function SignupLoginForm({ showMe, hideShow, username, firstName,
  lastName, email, password, loginemail, loginusername, loginpassword,
  handleSubmitInputChange, handleSignupFormSubmit, handleLoginInputChange,
  handleLoginFormSubmit, signupMessage, loginMessage }) {
  return (

    <div>

      {showMe ?
        <div className="overlaysignuploginform">

          <div className="logocont">
            <div className="logocont2">
              <div className="logocirclewrap1">
                <div className="logocirclewrap2">
                  <img className="logoimghome" src={logo} alt="Logo" />
                </div>
              </div>
            </div>
          </div>

          <div className="loginsignupwrapmain">
            <div className="signUpwrap">
              <div className="signUpwrap2">
                <div className="signuptext"> Sign Up</div>
                <form>
                  <div className="formgroup">
                    <div>
                      <label>
                        <strong>User Name</strong>
                      </label>
                      <div>
                        <input
                          //  autoComplete="off" 
                          autoCorrect="off"
                          autoCapitalize="off"
                          spellCheck="false"
                          data-gramm="false"
                          // autoComplete="off"
                          className="formcontrol"
                          type="text"
                          value={username}
                          // placeholder="Restaurant"
                          name="username"
                          onChange={handleSubmitInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <br></br>
                      <label>
                        <strong>First Name</strong>
                      </label>
                      <div>
                        <input
                          //  autoComplete="off" 
                          autoCorrect="off"
                          autoCapitalize="off"
                          spellCheck="false"
                          data-gramm="false"
                          className="formcontrol"
                          type="text"
                          value={firstName}
                          // placeholder="First Name"
                          name="firstName"
                          onChange={handleSubmitInputChange}
                          required
                        />
                      </div>

                      <label>
                        <strong>Last Name</strong>
                      </label>
                      <div>
                        <input
                          //  autoComplete="off" 
                          autoCorrect="off"
                          autoCapitalize="off"
                          spellCheck="false"
                          data-gramm="false"
                          className="formcontrol"
                          type="text"
                          value={lastName}
                          // placeholder="Last Name"
                          name="lastName"
                          onChange={handleSubmitInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label>
                        <strong>Email</strong>
                      </label>
                      <div>
                        <input
                          //  autoComplete="off" 
                          autoCorrect="off"
                          autoCapitalize="off"
                          spellCheck="false"
                          data-gramm="false"
                          className="formcontrol"
                          type="email"
                          value={email}
                          // placeholder="Email Address"
                          name="email"
                          onChange={handleSubmitInputChange}
                          required
                        />
                      </div>

                      <label>
                        <strong>Password</strong>
                      </label>
                      <div>
                        <input
                          //  autoComplete="off" 
                          autoCorrect="off"
                          autoCapitalize="off"
                          spellCheck="false"
                          data-gramm="false"
                          className="formcontrol"
                          type="password"
                          value={password}
                          // placeholder="Password"
                          name="password"
                          onChange={handleSubmitInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="sigupmessage"><h2 className="message">{signupMessage}</h2></div>
                  <div className="pull-right">

                    <button
                      onClick={handleSignupFormSubmit}
                      type="submit"
                      className="submitbtnsignup"
                    >
                      Submit
        </button>
                  </div>
                </form>
              </div>
            </div>


            <div className="loginwrap">
              <div className="loginwrap2">
                <div className="logintext"> Log In</div>
                <form>
                  <div className="formgroup">
                    <div>


                      <label>
                        <strong>User Name</strong>
                      </label>
                      <div>
                        <input
                          //  autoComplete="off" 
                          autoCorrect="off"
                          autoCapitalize="off"
                          spellCheck="false"
                          data-gramm="false"
                          className="formcontrol"
                          type="text"
                          value={loginusername}
                          // placeholder="Email Address"
                          name="loginusername"
                          onChange={handleLoginInputChange}
                          required
                        />
                      </div>


                      <label>
                        <strong>or Email</strong>
                      </label>
                      <div>
                        <input
                          //  autoComplete="off" 
                          autoCorrect="off"
                          autoCapitalize="off"
                          spellCheck="false"
                          data-gramm="false"
                          className="formcontrol"
                          type="email"
                          value={loginemail}
                          // placeholder="Email Address"
                          name="loginemail"
                          onChange={handleLoginInputChange}
                          required
                        />
                      </div>

                      <label>
                        <strong>Password</strong>
                      </label>
                      <div>
                        <input
                          //  autoComplete="off" 
                          autoCorrect="off"
                          autoCapitalize="off"
                          spellCheck="false"
                          data-gramm="false"
                          className="formcontrol"
                          type="password"
                          value={loginpassword}
                          // placeholder="Password"
                          name="loginpassword"
                          onChange={handleLoginInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="loginmessage"><h2 className="message">{loginMessage}</h2></div>
                  <div className="pull-right">

                    <button
                      onClick={handleLoginFormSubmit}
                      type="submit"
                      className="loginbtnsignup"
                    >
                      Login
                      </button>
                  </div>
                </form>
              </div>
            </div>

          </div>



          <div className="btnwrap">
            <button className="backtohome" onClick={() => hideShow()}><i className="fa fa-chevron-circle-left 2x" aria-hidden="true"></i></button>
            <button><Link to="/usermainpage"> TEMPORARY BUTTON TO GO TO USER PAGE</Link></button>

          </div>
        </div>

        : null
      }

    </div>
  );
}

export default SignupLoginForm;
