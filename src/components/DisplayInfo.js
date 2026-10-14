import React from "react";

class DisplayInfo extends React.Component{
    render(){
        //props ==> properites: tài sản 
        return(
            <div>
                <div>My name is {this.props.name}</div>
                <div>My age is {this.props.age}</div>
            </div>
        )
    }
}

export default DisplayInfo;