import React from 'react';

class Welcome extends React.Component {
    render() { 
        return <><h1>Midterm Practice {this.props.name}</h1></>;
    }
}
 
export default Welcome;

// export function Greeting(){
//     return <div><h1>Welcome{this.props.name}</h1></div>;
// }

export function Greeting(props) {
    return <h2>Hello {props.name}!</h2>;
}