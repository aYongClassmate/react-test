import React, { Component } from 'react';
import {Router} from 'react-router-dom';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import '../src/assets/project/base.css';
import '../src/assets/project/layout.css';
import '../src/assets/project/style.css';
//components
import Home from './components/home.js';
import Plan from './components/plan.js';

//bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
// 引入路由
import createHistory from 'history/createBrowserHistory';
const history = createHistory();
console.log(history);

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router history = {history}>
      <div className="contentBox">
            <div id="nav">
    <div className="navbar navbar-default navbar-static-top">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="javascript:void(0)"></a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li className="active"><Link to="/">首页</Link></li>
                    <li><Link to="/plan">项目服务</Link></li>
                    <li><a href="javascript:void(0)">培训</a></li>
                    <li><a href="javascript:void(0)">加入我们</a></li>
                    <li><a href="javascript:void(0)">公司动态</a></li>
                    <li><a href="javascript:void(0)">关于我们</a></li>
                    <li><a href="javascript:void(0)">开放平台</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="javascript:void(0)">
                        <span className="glyphicon glyphicon-phone-alt " aria-hidden="true"></span>&nbsp;&nbsp;
                        400-898-6666</a></li>
                </ul>
            </div>
        </div>
    </div>
  </div>
  <div>
    
      <div className="content">
        <Route exact path="/" component={Home}/>
        <Route path="/plan" component={Plan}/>
      </div>
   
  </div>
    <div className=" Module Column footer Module2">
    <div className="banxin">
        <div className="content clearfix" id="content2">
            <div className="col-md-7 col-sm-7 col-xs-6 text-center clearfix">
                <div>
                    <p>微信扫码关注星星送，立即预约</p>
                    
                </div>
            </div>
            <div className="col-md-1 col-sm-0 col-xs-0"></div>
            <div className="col-md-4 col-sm-5 col-xs-6 clearfix">
                <p>联系方式</p>
                <ul>
                    <li>客服电话：400-898-6666</li>
                    <li>加盟电话：010-84798768</li>
                    <li>邮箱：uuhoo@uuhoo.net</li>
                    <li>星星送官方微博：</li>
                </ul>
            </div>
        </div>
        <div className="content" id="content3">
            <ul className="footer_link row">
                <li><a href="">服务项目</a></li>
                <li><a href="">培训</a></li>
                <li><a href="">加入我们</a></li>
                <li><a href="">公司动态</a></li>
                <li><a href="">关于我们</a></li>
                <li><a href="">开放平台</a></li>
            </ul>
        </div>
        <div className="text-center Copyright">Copyright  2017.六六科技(北京)有限公司 All rights reserved.<br/>
            备案许可证号：京ICP备  15040045号</div>

    </div>
</div>
</div>
 </Router>
      </div>
    );
  }
}

export default App;



/   // <Route exact path="/" component={Home}/>
   //                  <Route path="/plan" component={Plan}/>
   //                  <Route path="/test" component={TestRouter}/>
   //                  <Route path="/detail/:id" component={Detail}/>

//  className A extends Component{
//      render(){
//          return(
//              <div>注册页面</div>
//          )
//      }
//  }
//  className B extends Component{
//      render(){
//          return(
//              <div>登录页</div>
//          )
//      }
//  }
//  className App extends Component {
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