import React from 'react';
import ReactDom from 'react-dom';
let style = {
    fontSize: '25px',
    color: '#ff0000'
};
let MyComponent = () => (
    <div >Hello, World!</div>
);
let MyComponent2 = () => {
    return (
        <div >Hello, World!2</div>
    );
};
class MyComponent3 extends React.Component {
    render() {
        let thisStyle = this.props.style;
        return (
            <div style={thisStyle}>Hello, World!3</div>
        );
    }
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>Hello Jason!!</h1>
                <MyComponent style={style}/>
                <MyComponent2 style={style}/>
                <MyComponent3 style={style}/>
            </div>
        );
    }
}

ReactDom.render(<App />, document.getElementById('app'));