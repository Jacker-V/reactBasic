// Class component
// Funtion component
import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
    // JSX cú pháp đặc biệt của react mà vue và angular ko có, cho phép viết code bên trong HTML
    // JSX thì chỉ cho phép bạn trả ra 1 khối hay 1 div, sẽ có cách để khắc phục nhưng chưa nên biêt
    // muốn viết tiếp các element thì chúng ta sẽ viết trong thẻ div
    render() {
        const myAge = 22;
        return (
            <div>
                
                <UserInfo></UserInfo>
                <DisplayInfo name="Spider Man" age={myAge}></DisplayInfo>
            </div>
        );
    }
}

export default MyComponent;