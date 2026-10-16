import React from "react";

class DisplayInfo extends React.Component {
    state = {
        isShowListUser: true
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }

    render() {
        // destructuring array/object
        const { listUsers } = this.props;//object
        //props ==> properites: tài sản 
        return (
            <div>
                <div>
                    <span onClick={() => { this.handleShowHide() }}>{this.state.isShowListUser === true ? "Hide list users:" : "Show list users:"}</span>
                </div>
                {this.state.isShowListUser &&

                    <div>
                        {/* <div>My name is {name}</div>
                <div>My age is {age}</div> */}
                        {
                            listUsers.map((user) => {
                                console.log(user);

                                return (
                                    <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                        <div>My name is {user.name}</div>
                                        <div>My age is {user.age}</div>
                                        <hr></hr>
                                    </div>
                                )


                            })
                        }
                    </div>
                }
            </div>

        )
    }
}

export default DisplayInfo;