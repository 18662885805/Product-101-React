import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import User from "./User";
import Login from "./Login";
import Reg from "./Reg";
import Error from "./Error";
import Detail from "./Detail";
import Column from "./Column";
import Follow from "./Follow";
import Skill from "./Skill";
import Chatroom from "./Chatroom";
import Buycar from "./Buycar";
import {Loading} from "./Loading";
import {connect} from 'react-redux';
import * as types from '../store/types'
import AuthUser from "../guard/AuthUser";


class App extends React.Component {
  constructor(props){
    super();
  }
  render() {
    let path = this.props.location.pathname;
    let {bNav,bFoot,bLoading,view_nav,view_foot} = this.props;
    //正则判断
    if (/home|follow|column|skill|chatroom|detail/.test(path)){
      setTimeout(()=>{
        view_nav(true);view_foot(true)
      },0);
    }
    if (/user|login|reg/.test(path)){
      setTimeout(()=>{view_nav(true)},0);
      setTimeout(()=>{view_foot(false)},0);
    }



    return <React.Fragment>
        {bLoading && <Loading />}
        {bNav && <Header />}
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/follow" component={Follow} />
          <Route path="/column" component={Column} />
          <Route path="/chatroom" component={Chatroom} />
          {/* <Route path="/buycar" component={Buycar} /> */}
          <AuthUser path="/buycar" component={Buycar} />
          <Route path="/user" component={User} />
          <Route path="/login" component={Login} />
          <Route path="/reg" component={Reg} />
          <Route path="/skill" component={Skill} />
          <Route path="/detail/:aid" component={Detail} />
          <Redirect exact from="/" to="/home" />
          <Route component={Error} />
        </Switch>
        {bFoot ? <Footer /> : null}
      </React.Fragment>;
  }
}

const mapStateToProps=state=>({
  bNav:state.bNav,
  bFoot:state.bFoot,
  bLoading:state.bLoading,
  userName: state.userName,
});

const mapDispatchToProps=dispatch=>({
  view_nav:(bl)=>{dispatch({type:types.NAV_VIEW,payload:bl})},
  view_foot:(bl)=>{dispatch({type:types.FOOT_VIEW,payload:bl})},
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
