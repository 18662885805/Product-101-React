import React from 'react';
import '../assets/css/header.css';
import {NavLink} from 'react-router-dom'
export default class Header extends React.Component {

  render() {
    return <div className="nav">
        <div id="logo">
          <span>上海天霸集团</span>
        </div>
        <ul>
          <li>
            <NavLink to="/home" activeClassName="active" tag="li">
              <p>首页</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/follow" activeClassName="active" tag="li">
              <p>活动</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/column" activeClassName="active" tag="li">
              <p>交友</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/skill" activeClassName="active" tag="li">
              <p>招聘</p>
            </NavLink>
          </li>
        </ul>
      </div>;
  }
}
