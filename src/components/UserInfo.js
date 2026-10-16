import React from "react";

class UserInfo extends React.Component {
    state = {
        name: 'Jacker V',
        address: 'Thai Binh',
        age: 16
    }

    handleClick(event) {
        // console.log("Loan Tang");
        // console.log(event);
        console.log(this.state.name);
        this.setState({
            name: 'HoangHa'
        })
    }

    handleOnMouseOver(event) {
        console.log(event);
    }

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);

    }
    render() {

        return (
            <div>
                My name is {this.state.name} & i'm {this.state.age}
                <p></p>
                <button onClick={(event) => { this.handleClick(event) }}>Click me</button>
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
                <p></p>
                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    <label>Your name: </label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => { this.handleOnChangeInput(event) }} />
                    <p></p>
                    <label>Your age: </label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => { this.handleOnChangeAge(event) }} />
                    <p></p>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfo;