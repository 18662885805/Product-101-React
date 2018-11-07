import React from 'react';
import '../assets/css/footer.css'
import '../assets/font_58s6xfeugmu6jemi/iconfont'
import {NavLink} from 'react-router-dom'
export default class Footer extends React.Component {

  render() {
    return <div className="footer">
        <ul>
          <li>
            <NavLink to="/home" activeClassName="active" tag="li">
              <span>
                <i className="iconfont">&#xe60d;</i>
                <p>集团首页</p>
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/user" activeClassName="active" tag="li">
            <span>
                <i className="iconfont">&#xe606;</i>
                <p>会员中心</p>
            </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/chatroom" activeClassName="active" tag="li">
            <span>
                <i className="iconfont">&#xe601;</i>
                <p>姐妹讨论</p>
            </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/buycar" activeClassName="active" tag="li">
            <span>
                <i className="iconfont">&#xe609;</i>
                <p>一键找鸭</p>
            </span>
            </NavLink>
          </li>
        </ul>
      </div>;
  }
}
