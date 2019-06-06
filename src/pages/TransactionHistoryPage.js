import React, { Component } from "react";
import AddTransForm from "../components/AddTransForm";
import Toolbar from "../components/Toolbar";
import Modal from "../components/Modal/Modal";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import PageLinks from "../components/PageLinks";
import Backdrop from "../components/Backdrop/Backdrop";

import { Link } from "react-router-dom";
import "./style.css";

class SearchPeoplePage extends Component {
  state = {
    showMe: false,
    showMeUserInfo: false,
    user: "",
    name: "",
    lastName: "",
    email: "",
    password: "",
    loggedIn: true,
    redirectTo: null,
    greet: "",
    userId: "",
    usefirstName: "",
    uselastName: "",
    useEmail: "",
    sideDrawerOpen: false,
    modalInfoShow: false,
    modalAddTransShow: false,
    visibleOu: false,
    visibleUo: false,
  };

  componentDidMount() {
  }

  getUser = () => {

  }

  getDebts = () => {

  };

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


  hideShowUserInfo = id => {
    const newState = { ...this.state }
    if (newState.user === null) {
      console.log("you lose");
      newState.greet = "Hello Guest"
    }
    else if (newState.user.firstName) {
      newState.greet = "Welcome"
      newState.useId = newState.user._id
      newState.usefirstName = newState.user.firstName
      newState.uselastName = newState.user.lastName
      newState.useEmail = newState.user.email
      newState.userestaurantName = newState.user.restaurantName
      console.log(newState.useId);
    }
    newState.showMeUserInfo = !newState.showMeUserInfo
    this.setState(newState);
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

  render() {

    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop backDropClick={this.backDropClickHandler} />;
    }

    return (
      <div style={{ height: '100%' }}>
        <Toolbar
          modalInfoClikHandler={this.modalInfoClikHandler}
          drawerClickHandler={this.drawerToggleClickHandler}
          navtitle = {<div> 
            TRANSACTION HISTORY
          </div>}>
          <ul>
            <li><button onClick={this.modalInfoClikHandler}>About (Just A Modal Ready For Use)</button></li>
          </ul>
        </Toolbar>
        <SideDrawer show={this.state.sideDrawerOpen}>
        <PageLinks backToSamePage = {this.backDropClickHandler}/>
        </SideDrawer>;
          {backdrop}
        <main style={{ marginTop: '100px' }}>

        {this.state.modalInfoShow && <Backdrop backDropClick={this.backDropClickHandler} />}
          {this.state.modalInfoShow && <Modal title="USER INFO" logOut goBack onGoBack={this.backDropClickHandler}>
            <p>Modal Content</p>

          </Modal>}

        <button onClick={this.modalAddTransClikHandler}>ADD TRANSACTION</button>
          {this.state.modalAddTransShow && <Backdrop backDropClick={this.backDropClickHandler} />}
          {this.state.modalAddTransShow && <Modal title="ADD TRANSACTION" logOut goBack onGoBack={this.backDropClickHandler}>
          <AddTransForm 
          handleAddTransactionInputs={this.handleAddTransactionInputs}
          handleAddTransFormSubmit={this.handleAddTransFormSubmit}
          id={this.state.id}
          borrowerName={this.state.borrowerName}
          lentAmount={this.state.lentAmount}
          dueDate={this.state.dueDate}
          messageToBorrower={this.state.messageToBorrower}
          borrowerEmail={this.state.borrowerEmail}
          backDropClickHandler={this.backDropClickHandler}
          />
          </Modal>}

          
          <button><Link to="/"> TEMPORARY BUTTON TO GO BACK TO SIGNUP/LOGIN</Link></button>

          {/* MODAL ----------------------- */}

        </main>
      </div>
    );
  }
}

export default SearchPeoplePage;
