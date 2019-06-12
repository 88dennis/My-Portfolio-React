import React, { Component } from "react";
import { Link } from "react-router-dom";
import Toolbar from "../components/Toolbar";

import "./style.css";

const styles = ({
    divStyle: {
      marginTop: '50px',
      textAlign: "center",
      fontFamily: 'arial',
    },
    titleContainerStyle: {
        width: '300px',
        height: '100%',
        background: 'gray'
    }
  });

class TestPage extends Component {
  state = {
      slideNav: false,
      dY:0,

      width: 0,
      height:0,
      x: 0,
      y: 0,
  };

  // _onMouseMove = (e, ) => {
  //     const width = this.refs.titleContainer.clientWidth
  //     const height = this.refs.titleContainer.clientHeight
  //     const oX = Math.floor((e.nativeEvent.offsetX/width) * 100);
  //     const oY = Math.floor((e.nativeEvent.offsetY/height) *100);

  //     console.log(this.refs)
  //       console.log(e.nativeEvent)
  //     console.log(oX, oY)
  //     if(oY <=10){
  //       this.setState({
  //           visible: true
  //     x: oX,
  //     y: oY
  //       })
  //     }else{
  //       this.setState({
  //           visible: false
  //     x: oX,
  //     y: oY
  //       })
  //     }

  //   // this.setState ({
  //   //     x: oX,
  //   //     y: oY
  //   // })

  // }

    // YOU CAN ALSO USE ONMOUSEWHEEL DISAPPEAR
  _onWheel = (e) => {
    const height = this.refs.titleContainer.clientHeight
    const deltaWye = e.nativeEvent.deltaY
  //   console.log(this.refs)
      console.log(e.nativeEvent)
      console.log(height)
    console.log(deltaWye)

    if(deltaWye > 0){
      this.setState({
        dY: deltaWye,
        slideNav: true
      })
    }
    else if(deltaWye < -1){
      this.setState({
        dY: deltaWye,
        slideNav: true
      })
      
    }
      else if(deltaWye === -1){
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
    const newState = {...this.state} 
        newState.slideNav = true

        this.setState(newState)
  }

  handleHideShowNav = () => {
    const newState = {...this.state} 
        newState.slideNav = !newState.slideNav
        this.setState(newState)
  }

//   _onSwipe = (e) => {
//     const width = this.refs.titleContainer.clientWidth
//     const height = this.refs.titleContainer.clientHeight
//     const oX = Math.floor((e.nativeEvent.offsetX/width) * 100);
//     const oY = Math.floor((e.nativeEvent.offsetY/height) *100);

//   //   console.log(this.refs)
//       console.log(e.nativeEvent)
//     console.log(oX, oY)

//     if(oY <=30){
//       this.setState({
//           visible: true
//       })
//     }else{
//       this.setState({
//           visible: false
//       })
//     }

//   // this.setState ({
//   //     x: oX,
//   //     y: oY
//   // })

// }

  

  

//   handleScroll = () => {
//     const { prevScrollpos } = this.state;
//     const currentScrollPos = window.pageYOffset;
//     const visible = prevScrollpos > currentScrollPos;
//     this.setState({
//       prevScrollpos: currentScrollPos,
//       visible
//     });
//   };

  render() {

    let showClass = 'toolbar';
    if(!this.state.slideNav) {
showClass = 'toolbar--hidden'
    }else {
      showClass = 'toolbar'
    }

//     let showClass = 'navbar';
//     if(!this.state.visible) {
// showClass = 'navbar navbar--hidden'
//     }


    // if(this.state.y <=50){
//     showClass = 'navbar navbar--hidden'
// }

    return (
      <div style= {styles.titleContainerStyle} className="titleContainer"
      ref='titleContainer'
      onWheel={this._onWheel}
      // onMouseMove={this._onMouseMove}
      >
<Toolbar
          handleMouseEnter={this.handleMouseEnter}
          modalInfoClikHandler={this.modalInfoClikHandler}
          drawerClickHandler={this.drawerToggleClickHandler}
          toolBarStyle = {showClass}
          navtitle = {<div> 
            TESTING PAGE
          </div>}>
          <ul>
            <li><button onClick={this.modalInfoClikHandler}>About (Just A Modal Ready For Use)</button></li>
          </ul>
        </Toolbar>

        {/* <nav className={showClass}
        >
        <a href="/">ITEM    </a>
        <a href="/">ITEM</a>
        <a href="/">ITEM</a>
        
        </nav> */}

        <div>
            <p>Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of havinmore "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!Hi there! Isn't it easier and a lot more "React" to use the top position as a state key instead of having to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!g to query by element on each scroll event? If we talk about performance, document.getElement... is not the best option. And if we want to reuse the same component, that ID will be a problem later. Hope it helps. Kudos for the article!</p>
        </div>


        <button onClick = {this.handleHideShowNav} style={styles.divStyle}>SHOW HIDE</button>
          <button style={styles.divStyle}><Link to="/"> TEMPORARY BUTTON TO GO BACK TO SIGNUP/LOGIN</Link></button>
          </div>
    );
  }
}

export default TestPage;
