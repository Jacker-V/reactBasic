import React from "react";

class DisplayInfo extends React.Component{
    render(){
        // destructuring array/object
        const {listUsers} = this.props;//object
        //props ==> properites: tài sản 
        return(
            <div>
                {/* <div>My name is {name}</div>
                <div>My age is {age}</div> */}
                { 
                    listUsers.map((user) => {
                        return(
                            <div key={user.id}>
                                <div>My name is {user.name}</div>
                                <div>My age is {user.age}</div>
                                <hr></hr>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default DisplayInfo;