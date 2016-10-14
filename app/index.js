import React from 'react';
import ReactDom from 'react-dom';
import { render } from 'react-dom'

import { Router, Route, hashHistory ,browserHistory, Link } from 'react-router'
import { IndexRoute } from 'react-router'
// let style = {
//     fontSize: '25px',
//     color: '#ff0000'
// };
//
// let style2 = {
//     fontSize: '25px',
//     color: '#00ff00'
// };
//
// let MyComponent = () => (
//     <div >Hello, World!</div>
// );
// let MyComponent2 = (props) => {
//     return (
//         <div style={props.style}>Hello, World!2</div>
//     );
// };
// class MyComponent3 extends React.Component {
//     render() {
//         let thisStyle = this.props.style;
//         return (
//             <div style={thisStyle}>Hello, World!3</div>
//         );
//     }
// }
//
// let MyComponent4 = (props) => (
//     <div >{props.name}</div>
// );
//
// // PropTypes 驗證，若傳入的 props type 不是 string 將會顯示錯誤
// // MyComponent4.propTypes = {
// //     name: React.PropTypes.string,
// // }
//
// // Prop 預設值，若對應 props 沒傳入值將會使用 default 值 Zuck。用法等於 ES5 的 getDefaultProps
// MyComponent4.defaultProps = {
//     name: ['Zuck', '-=Zuck', '-Zuck'],
// }
//
// var MyComponent5 = React.createClass({
//     render(){
//         return (
//             <h1>MyComponent5</h1>
//         );
//     }
// })
//
// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             route: window.location.hash.substr(1)
//         }
//     }
//
//     // componentDidMount() {
//     //     window.addEventListener('hashchange', ()=> {
//     //         // console.log(window.location.hash.substr(1));
//     //         this.setState({
//     //             route: window.location.hash.substr(1)
//     //         })
//     //     });
//     // }
//
//     render() {
//         // let Child;
//         // switch (this.state.route) {
//         //     case '/MyComponent':
//         //         Child = <MyComponent/>;
//         //         break;
//         //     case '/MyComponent2':
//         //         Child = <MyComponent2/>;
//         //         break;
//         //     case '/MyComponent3':
//         //         Child = <MyComponent3/>;
//         //         break;
//         //     case '/MyComponent4':
//         //         Child = <MyComponent4/>;
//         //         break;
//         //     default:
//         //         Child = <MyComponent/>;
//         // }
//
//         return (
//             <div>
//                 <h1>Hello Jason!!</h1>
//                 {/*<ul>*/}
//                     {/*<li><a href="#/MyComponent">MyComponent</a></li>*/}
//                     {/*<li><a href="#/MyComponent2">MyComponent2</a></li>*/}
//                     {/*<li><a href="#/MyComponent3">MyComponent3</a></li>*/}
//                     {/*<li><a href="#/MyComponent4">MyComponent4</a></li>*/}
//                 {/*</ul>*/}
//                 <ul>
//                     <li><Link to="/MyComponent">MyComponent</Link></li>
//                     <li><Link to="/MyComponent2">MyComponent2</Link></li>
//                     <li><Link to="/MyComponent3">MyComponent3</Link></li>
//                     <li><Link to="/MyComponent4">MyComponent4</Link></li>
//                     <li><Link to="/MyComponent4">MyComponent5</Link></li>
//                 </ul>
//
//                 <hr/>
//                 {this.props.children}
//             </div>
//         );
//     }
// }

// ReactDom.render(
//     <Router>
//         <Route path="/" component={App}>
//             <Route path="MyComponent" component={MyComponent}/>
//             <Route path="MyComponent2" component={MyComponent2}/>
//             <Route path="MyComponent3" component={MyComponent3}/>
//             <Route path="MyComponent4" component={MyComponent4}/>
//             <Route path="MyComponent5" component={MyComponent5}/>
//         </Route>
//     </Router>,
//     document.getElementById('app'));


const Dashboard = React.createClass({
    render() {
        return <div>Welcome to the app!</div>
    }
})
const About = React.createClass({
    render() {
        return <h3>About</h3>
    }
})

const Inbox = React.createClass({
    render() {
        return (
            <div>
                <h2>Inbox</h2>
                {this.props.children}
            </div>
        )
    }
})

const Message = React.createClass({
    render() {
        return <h3>Message {this.props.params.id}</h3>
    }
})

class App2 extends React.Component{
    render(){
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox/messages/123">Inbox</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

ReactDom.render(
    <Router  history={browserHistory}>
        <Route path="/" component={App2}>
            <IndexRoute component={Dashboard} />
            <Route path="about" component={About} />
            <Route path="inbox" component={Inbox}>
                <Route path="messages/:id" component={Message} />
            </Route>
        </Route>
    </Router>,
    document.getElementById('app'));