import React, { Component } from "react";
import Ou from "../components/Ou";
import Uo from "../components/Uo";
import AddTransForm from "../components/AddTransForm";
import Toolbar from "../components/Toolbar";
import Modal from "../components/Modal/Modal";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import PageLinks from "../components/PageLinks";
import Backdrop from "../components/Backdrop/Backdrop";
// import ProfilePicture from "../components/ProfilePicture";

import { List } from "../components/List";
import { Link } from "react-router-dom";
// import logo from '../images/logotrans.png';
import "./style.css";

class UserMainPage extends Component {
  state = {
    lentList: [],
    debtList: [],
    borrowerName: "",
    lenderName: "",
    debtId: "",
    lentId: "",
    showMeOuDetails: "",
    showMeUoDetails: "",
    borrowerEmail: "",
    lentAmount: "",
    messageToBorrower: "",
    dueDate: "",
    someArrayFromLentList: [],
    someArrayFromDebtList: [],
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
    scale: 0,

  };

  componentDidMount() {
  }

  getUser = () => {

  }

  getDebts = () => {

  };

  hideShowOuDetails = id => {
    const newState = { ...this.state }
    const lent = this.state.lentList.find(lent => lent._id === id);
    newState.showMeOuDetails = !newState.showMeOuDetails
    newState.lentId = id
    newState.lenderName = lent.name
    newState.someArrayFromLentList = lent.someArrayFromLentList
    newState.scale = this.state.scale > 1 ? 1 : 1.5
    this.setState(newState);
  }

  hideShowUoDetails = id => {
    const newState = { ...this.state }
    const debt = this.state.debtList.find(debt => debt._id === id);
    newState.showMeUoDetails = !newState.showMeUoDetails
    newState.debtId = id
    newState.borrowerName = debt.borrowerName
    newState.someArrayFromDebtList = debt.someArrayFromDebtList
    newState.scale = this.state.scale > 1 ? 1 : 1.5
    this.setState(newState);
  }

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

  handleDebtDelete = id => {
  
  };

  handleLentDelete = id => {
   
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

  handleClickOuShow = () => {
    const newState = { ...this.state }
    newState.visibleOu = !newState.visibleOu
    newState.scale = this.state.scale > 1 ? 1 : 1.5
    this.setState(newState);
  }


  

  handleClickUoShow = () => {
    const newState = { ...this.state }
    newState.visibleUo = !newState.visibleUo
    this.setState(newState);
  }


  render() {

    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop backDropClick={this.backDropClickHandler} />;
    }

    let uodivshowhide;
    if (this.state.visibleUo) {
      uodivshowhide = 'openuo panel'
    } else {
      uodivshowhide = 'closeuo panel'
    }

    let oudivshowhide;
    if (this.state.visibleOu) {
      oudivshowhide = 'openou panel'
    } else {
      oudivshowhide = 'closeou panel'
    }

    return (
      <div className = "homePageContainer" 
      // style={{ height: '100%' }}
      
      >
        <Toolbar
          modalInfoClikHandler={this.modalInfoClikHandler}
          drawerClickHandler={this.drawerToggleClickHandler}
          navtitle = {<div> 
            HOME PAGE
          </div>}>
          {/* <ul>
            <li><a className="alinks" href="/">Profile</a></li>
            <li><a className="alinks" href="/">Settings</a></li>
            <li><button onClick={this.modalInfoClikHandler}>About (Just A Modal Ready For Use)</button></li>
          </ul> */}
        </Toolbar>

        <SideDrawer show={this.state.sideDrawerOpen}>

        <PageLinks backToSamePage = {this.backDropClickHandler}/>
        
        </SideDrawer>;
          {backdrop}
          
        <main style={{ marginTop: '100px' }}>

        {this.state.modalInfoShow && <Backdrop backDropClick={this.backDropClickHandler} />}
          {this.state.modalInfoShow && <Modal title="ABOUT" logOut goBack onGoBack={this.backDropClickHandler}>
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


          
              <div className="oubtnshowwrapper">
                <button onClick={this.handleClickOuShow}>OU</button>
                {/* <button onClick={this.handleClickOu}>{this.state.visible ? 'OU' : 'OU'}</button> */}
              </div>

<div className="oucont">
              <div className={oudivshowhide}>
                      {this.state.lentList.length ? (
                          <List>
                            {this.state.lentList.map(lent => (
                              <Ou
                                key={lent._id}
                                id={lent._id}
                                name={lent.name}
                                borrowerName={this.state.borrowerName}
                                handleLentDelete={this.handleLentDelete}
                                showMeOuDetails={this.state.showMeOuDetails}
                                hideShowOuDetails={this.hideShowOuDetails}
                                someArrayFromLentList={this.state.someArrayFromLentList}
                              />
                            ))}
                          </List>
                        ) : (
                            <h2 className="text-center">Not Available</h2>
                          )}
              </div>
              </div>

              {/* end of dropdown */}
            {/* ----------------------------------------------------------------------------------- */}

              <div className="uobtnwrapnew">
              <button onClick={this.handleClickUoShow}>UO</button>
              </div>
              <div className="uocont">
              <div className={uodivshowhide}>
              {this.state.debtList.length ? (
                        <List>
                          {this.state.debtList.map(debt => (
                            <Uo
                              key={debt._id}
                              id={debt._id}
                              name={debt.name}
                              handleDebtDelete={this.handleDebtDelete}
                              showMeUoDetails={this.state.showMeUoDetails}
                              hideShowUoDetails={this.hideShowUoDetails}
                              lenderName={this.state.lenderName}
                              someArrayFromDebtList={this.state.someArrayFromDebtList}
                            />
                          ))}
                        </List>
                      ) : (
                          <h2 className="text-center">Not Available</h2>
                        )}
              </div>
              </div>

 {/* end of dropdown */}
            


            
          
          <button><Link to="/"> TEMPORARY BUTTON TO GO BACK TO SIGNUP/LOGIN</Link></button>

          

        </main>
      </div>
    );
  }
}

export default UserMainPage;
