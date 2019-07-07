import React, { Component } from "react";
// import AddTransForm from "../components/AddTransForm";
import Toolbar from "../components/Toolbar";
import Modal from "../components/Modal/Modal";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import PageLinks from "../components/PageLinks";
import Backdrop from "../components/Backdrop/Backdrop";
import Wrapper from "../components/Wrapper/";
// import Title from "../components/Title/";
import ProjectCard from "../components/ProjectCard/";
// import ButtonLinks from "../components/ButtonLinks/";
import projects from "../projects.json";
// import { Link } from "react-router-dom";
import "./style.css";
import ButtonLinks from "../components/ButtonLinks";




class ProjectsPage extends Component {
  state = {
    showMe: false,
    showMeUserInfo: false,
    sideDrawerOpen: false,
    modalInfoShow: false,
    modallProjectInfoShow: false,
    modalAddTransShow: false,
    visibleOu: false,
    visibleUo: false,
    dY: 0,
    width: 0,
    height: 0,
    x: 0,
    y: 0,
    projects,
    projectId:"",
    projectName:"",
    projectInfo:"",
    projectModalLink:""
    
  };

  componentDidMount() {
  }

  getUser = () => {

  }

  getDebts = () => {

  };

  projectLinkBtnHandler = id => {
    const newState = { ...this.state }
    const project = this.state.projects.find(project => project._id === id);
    newState.projectId = id
    newState.projectName = project.name
    newState.projectInfo = project.projectInfo
    newState.projectModalLink = project.projectLink
    newState.modallProjectInfoShow=!newState.modallProjectInfoShow
    console.log(id)
    console.log(project.name)
    // newState.showMe = !newState.showMe
    // newState.scale = this.state.scale > 1 ? 1 : 1.5

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
    newState.modallProjectInfoShow = false;
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

  //ONWHEEL STARTS (remember to change the refs)
  // YOU CAN ALSO USE ONMOUSEWHEEL DISAPPEAR
  _onWheel = (e) => {
    const height = this.refs.projectscontainer.clientHeight
    const deltaWye = e.nativeEvent.deltaY
      console.log(this.refs)
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
      <div className="projectscontainer"
      style={{height: '100%'}}
      ref='projectscontainer'
      onWheel={this._onWheel}>
        <Toolbar
          modalInfoClikHandler={this.modalInfoClikHandler}
          drawerClickHandler={this.drawerToggleClickHandler}
          navtitle = {<div> 
            PROJECTS
          </div>}
           handleMouseEnter={this.handleMouseEnter}
           toolBarStyle={showClass}
          >
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

          {this.state.modallProjectInfoShow && <Backdrop backDropClick={this.backDropClickHandler} />}
          {this.state.modallProjectInfoShow && <Modal title={this.state.projectName} logOut goBack onGoBack={this.backDropClickHandler}>
            <p>{this.state.projectInfo}</p>
            <br></br>
            <a href={this.state.projectModalLink} target="_blank" rel="noopener noreferrer">Open App</a>
          </Modal>}

          {/* <img src={require('../images/cookie.png')} alt="logo" className="brand-logo"/> */}

<Wrapper>
        {/* <Title>Projects List</Title> */}
        {this.state.projects.map(project => (
          <ProjectCard
            projectLinkBtnHandler={this.projectLinkBtnHandler}
            id={project._id}
            key={project._id}
            name={project.name}
            directProjectLink={project.projectLink}
            directGitHubLink={project.gitHubLink}
            image={project.image}
            gitimage={project.gitimage}
            projectName={this.state.projectName}
            projectInfo={this.state.projectInfo}
          >
          </ProjectCard>
        ))}
      </Wrapper>
        {/* <button onClick={this.modalAddTransClikHandler}>ADD TRANSACTION</button>
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
          <button><Link to="/"> TEMPORARY BUTTON TO GO BACK TO SIGNUP/LOGIN</Link></button> */}
          <ButtonLinks
          />

          {/* MODAL ----------------------- */}



        </main>
      </div>
    );
  }
}

export default ProjectsPage;
