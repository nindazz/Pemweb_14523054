// import React from "react";

// function Images(props) {

//        return (
//            <img src= {this.props.srcGambar}
//            alt="food" width="150" height="75"/>
//        );
 //   }
 import React from "react"; 

 class Images extends React.Component {
    
    render () {
        return(
            <img src={this.props.srcGambar} width="150"/>
        )
    }
 }

 export default Images;