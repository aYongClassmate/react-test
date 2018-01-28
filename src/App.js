import React, { Component } from 'react';
import {Router} from 'react-router-dom';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './components/common.css';
// 引入4个模块组件
import Plan from './components/plan.js';
import Home from './components/home.js';
import Popup from './components/popup.js';
import TestRouter from './components/testrouter.js'
import Detail from './components/detail.js';

// 引入路由
import createHistory from 'history/createBrowserHistory';
const history = createHistory();
console.log(history)
class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2 className='App-title'>Welcome to React Plan</h2>
          </div>
          <div>
            <Router history = {history}>
               <div className="contentBox">
                  <ul className="nav">
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/plan">计划表</Link></li>
                    <li><Link to="/test">二级路由</Link></li>
                  </ul>
                  <div className="content"> 
                    <Route exact path="/" component={Home}/>
                    <Route path="/plan" component={Plan}/>
                    <Route path="/test" component={TestRouter}/>
                    <Route path="/detail/:id" component={Detail}/>
                  </div>
              </div>
            </Router>
          </div>
      </div>
    );
  }
}

export default App;


//  class A extends Component{
//      render(){
//          return(
//              <div>注册页面</div>
//          )
//      }
//  }
//  class B extends Component{
//      render(){
//          return(
//              <div>登录页</div>
//          )
//      }
//  }
//  class App extends Component {
//      constructor(){
//          super();
//          this.state={
//              hash:"#/"
//          }
//      }
//      componentDidMount(){
//          window.onhashchange = ()=>{
//              this.setState({
//                  hash:window.location.hash
//              });
//       }
//     }
//     render() {
//         let o;
//         let {hash} = this.state;
//         console.log(hash);//当前路由
//         switch (hash) {
//             case "#/":
//                 o = (
//                     <div>首页</div>
//                 );
//                 break;
//             case "#/login":
//                 o = <B/>;
//                 break;
//             case "#/register":
//                 o = <A/>;
//                 break;
//             default:
//                 o = <A/>;
//         }
//         return (
//             <div className="App">
//                 {o}
//             </div>
//         );
//     }
//  }

// export default App;