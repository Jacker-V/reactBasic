// Class component
// Funtion component
import React from "react";

class MyComponent extends React.Component{
    // JSX cú pháp đặc biệt của react mà vue và angular ko có, cho phép viết code bên trong HTML
    // JSX thì chỉ cho phép bạn trả ra 1 khối hay 1 div, sẽ có cách để khắc phục nhưng chưa nên biêt
    // muốn viết tiếp các element thì chúng ta sẽ viết trong thẻ div
    state = {
        name: 'Jacker V',
        address: 'Thai Binh',
        age: 26
    }

    render(){
        return (
            <div>My name is {this.state.name} & i'm from {this.state.address}
            </div>   
        );
    }
}

export default MyComponent;