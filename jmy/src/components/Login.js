import React from 'react';
import '../assets/css/login.css'
import * as types from "../store/types";

import {connect} from "react-redux";
import asyncAction from "../store/actions";
class Login extends React.Component {
  constructor() {
    super();
    this.state = { username: "", password: "" };
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.logClick = this.logClick.bind(this);
  }

  changeUsername(ev) {
    this.setState({ username: ev.target.value });
  }
  changePassword(ev) {
    this.setState({ password: ev.target.value });
  }
  logClick(dispatch) {
    console.log(this.state.username + "-----" + this.state.password);
    fetch(`http://localhost:3000/login/add`, {
      method: "POST",
      headers: {
        Accept: "application/json,text/plain,*/*",
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    }).then(res => {
        return res.json();
      })
      .then((res) => {
        switch (res.error) {
          case 0:
            alert(res.msg); 
            dispatch({ type: 'User_login', payload: res.username })          
            this.props.history.go(-2);  
            
            break;
          case 1:
            alert(res.msg);
            break;
          case 2:
            alert(res.msg);
          default:
            break;
        }
      });
  }

  render() {
    return <div className="login-content">
        <ul>
          <li className="lifirst">
            <input type="text" value={this.state.username} onChange={this.changeUsername} />
            <span>帐号</span>
          </li>
          <li>
            <input type="text" value={this.state.password} onChange={this.changePassword}  />
            <span>密码</span>
          </li>
        </ul>
        <div className="footbox">
        <input type="button" onClick={this.logClick} value="登 录" className="login-btn" />
          <p className="tishi">忘记密码？</p>
        </div>
      </div>;
  }
}

const mapStateToProps=state=>({   
    userName: state.username
});

const mapDispatchToProps=dispatch=>({
  login: (username, password, history) => {
    asyncAction("http://localhost:3000/login/add", dispatch, username, password, history);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
