// import React from 'react';
// import classNames from 'classnames';

// class ZoomImage extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       width:this.props.width
//     };
//     this.hadleMouseWheel = this.hadleMouseWheel.bind(this);
//   }

//   hadleMouseWheel(evt) {
//     if(evt.deltaY > 0) {
//         this.setState({
//         width:(this.state.width - 5)
//       });
//     } else if(evt.deltaY < 0) {
//       this.setState({
//         width:(this.state.width + 5)
//       });
//     }
//   }

//   render() {
//     const imgStyle = {
//       width:this.state.width+'px'
//     };
//     const {width, ...props} = this.props;
//     return (
//       <img {...props} style={imgStyle} onWheel={this.hadleMouseWheel}/>
//     );
//   }
// }

// ZoomImage.propTypes = {
//   width:React.PropTypes.number
// }

// ZoomImage.defaultProps = {
//   width:400
// }

// export default ZoomImage;