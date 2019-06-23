import React, { Component } from "react";

import Toolbar from "../components/Toolbar";
import Modal from "../components/Modal/Modal";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import PageLinks from "../components/PageLinks";
import Backdrop from "../components/Backdrop/Backdrop";
import ButtonLinks from "../components/ButtonLinks";

import resume from '../images/DennisSarmientoResumeWebDev3.pdf';
import { Link } from "react-router-dom";
import "./style.css";

class ResumePage extends Component {
  state = {
    showMe: false,
    sideDrawerOpen: false,
    modalInfoShow: false,
    modalAddTransShow: false,
    modalResume: false,
    visibleOu: false,
    visibleUo: false,
    slideNav: false,
    dY: 0,
    width: 0,
    height: 0,
    x: 0,
    y: 0,
    // showMe2: false,
  };

  componentDidMount() {
  }

  getUser = () => {

  }

  getDebts = () => {

  };

  // hideShow2 = () => {
  //   const newState = { ...this.state }
  //   newState.showMe2 = !newState.showMe2
  //   // newState.scale = this.state.scale > 1 ? 1 : 1.5
  //   this.setState(newState);
  // }

  handleSubmitInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleLogout = () => {

  };

  handleAddTransactionInputs = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    });
  }

  handleAddTransFormSubmit = event => {
    event.preventDefault();
    this.addTransaction();
  }

  addTransaction = () => {

  }



  // SIDEBAR CODE STARTS
  drawerToggleClickHandler = () => {
    const newState = { ...this.state }
    newState.sideDrawerOpen = !newState.sideDrawerOpen
    this.setState(newState);
  }

  backDropClickHandler = () => {
    const newState = { ...this.state }
    newState.sideDrawerOpen = false;
    newState.modalInfoShow = false;
    newState.modalAddTransShow = false;
    newState.modalResume = false;
    this.setState(newState);
  }

  modalInfoClikHandler = () => {
    const newState = { ...this.state }
    newState.modalInfoShow = !newState.modalInfoShow
    this.setState(newState);
  }

  modalAddTransClikHandler = () => {
    const newState = { ...this.state }
    newState.modalAddTransShow = !newState.modalAddTransShow
    this.setState(newState);
  }

  modalResumeClickHandler = () => {
    const newState = { ...this.state }
    newState.modalResume = !newState.modalResume
    this.setState(newState);
  }


  //ONWHEEL STARTS (remember to change the refs)
  // YOU CAN ALSO USE ONMOUSEWHEEL DISAPPEAR
  _onWheel = (e) => {
    const height = this.refs.profilecontainer.clientHeight
    const deltaWye = e.nativeEvent.deltaY
    //   console.log(this.refs)
    console.log(e.nativeEvent)
    console.log(height)
    console.log(deltaWye)

    if (deltaWye > 0) {
      this.setState({
        dY: deltaWye,
        slideNav: true
      })
    }
    else if (deltaWye < -1) {
      this.setState({
        dY: deltaWye,
        slideNav: true
      })

    }
    else if (deltaWye === -1) {
      this.setState({
        dY: deltaWye,
        slideNav: false
      })
    }

    // if(deltaWye < -1){
    //   this.setState({
    //     dY: deltaWye,
    //     slideNav: true
    //   })
    // }
    //   else{
    //   this.setState({
    //     dY: deltaWye,
    //     slideNav: false
    //   })
    // }
  }

  handleMouseEnter = () => {
    const newState = { ...this.state }
    newState.slideNav = true

    this.setState(newState)
  }

  

  //ONWHEEL ENDS

  render() {

    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop backDropClick={this.backDropClickHandler} />;
    }
    let showClass = 'toolbar';
    if (!this.state.slideNav) {
      showClass = 'toolbar--hidden'
    } else {
      showClass = 'toolbar'
    }

    return (
      <div className="profilecontainer"
        style={{ height: '100%' }}
        ref='profilecontainer'
        onWheel={this._onWheel}>
        <Toolbar
          modalInfoClikHandler={this.modalInfoClikHandler}
          drawerClickHandler={this.drawerToggleClickHandler}
          navtitle={<div>
            @dennis Resume
          </div>}
          handleMouseEnter={this.handleMouseEnter}
          toolBarStyle={showClass}
        >
          <ul>
            <li><button onClick={this.modalInfoClikHandler}>About (Just A Modal Ready For Use)</button></li>
          </ul>
        </Toolbar>
        <SideDrawer show={this.state.sideDrawerOpen}>
          <PageLinks backToSamePage={this.backDropClickHandler} />
        </SideDrawer>
        {backdrop}

        <main className="mainresumewrapper" style={{ paddingTop: '100px', paddingBottom: '100px', margin: '0', height: '100%' }}>
         
        <div className="embedwrapper"><embed src={resume} type="application/pdf"
				width="80%" height="900px" />
		</div>


          {this.state.modalInfoShow && <Backdrop backDropClick={this.backDropClickHandler} />}
          {this.state.modalInfoShow && <Modal title="USER INFO" logOut goBack onGoBack={this.backDropClickHandler}>
            <p>Modal Content</p>
          </Modal>}

          {/* RESUME PORTION  STARTS*/}
          <ButtonLinks
            modalResumeClick={this.modalResumeClickHandler}
          />

          {this.state.modalResume && <Backdrop backDropClick={this.backDropClickHandler} />}
          {this.state.modalResume && <Modal title="DENNIS RESUME" logOut goBack 
          onGoBack={this.backDropClickHandler}>
          <div className="embedwrapper"><embed src={resume} type="application/pdf"
				width="100%" height="100%" />
		</div>
          </Modal>}
          {/* RESUME PORTION ENDS */}

          

 
          <button><Link to="/"> TEMPORARY BUTTON TO GO BACK TO SIGNUP/LOGIN</Link></button>

          {/* MODAL ----------------------- */}

        </main>
      </div>
    );
  }
}

export default ResumePage;
