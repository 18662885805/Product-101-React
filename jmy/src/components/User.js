import React from 'react';
import '../assets/css/user.css';
import { NavLink } from 'react-router-dom'
import headimg from "../assets/images/headimg.png";
export default class User extends React.Component {

  render() {
    return (<div className="content">
      <div className="userheader">
        <div id="imgbox">
          <div>
            <img src={headimg} alt=''/>
          </div>
        </div>
        <div className="user-box">
          <p>
            <NavLink to="/login">
              <span>登录</span>
            </NavLink>
          </p>
          <p>
            <NavLink to="/reg">
              <span>注册</span>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
    );
  }
}
