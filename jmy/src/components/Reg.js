import React from 'react';
import '../assets/css/reg.css';

export default class Reg extends React.Component {
                 constructor(props) {
                   super(props);
                   this.state = { username: "", password: "" };
                   this.changeUsername = this.changeUsername.bind(this);
                   this.changePassword = this.changePassword.bind(this);
                   this.addClick = this.addClick.bind(this);
                 }

                 changeUsername(ev) {
                   this.setState({ username: ev.target.value });
                 }
                 changePassword(ev) {
                   this.setState({ password: ev.target.value });
                 }
                 addClick() {
                   console.log(this.state.username + "-----" + this.state.password);
                   fetch(
                     `http://localhost:3000/reg/add?username=${this.state.username}&password=${this.state.password}`,
                     {  
                       method:'POST',
                       headers: {
                         "Accept":
                           "application/json,text/plain,*/*",
                         "Content-type":
                           "application/x-www-form-urlencoded;charset=utf-8"
                       },
                       body:JSON.stringify({
                         username: this.state.username,
                         password: this.state.password
                       })                        
                     }
                   ).then(res => {
                     return res.json();
                   }).then(res=>{
                     switch (res.error) {
                       case 0:
                         alert(res.msg +'      请登录');
                         this.props.history.go(-1);  
                         break;
                       case 1:
                         alert(res.msg);
                         break;
                       default:
                         break;
                      }
                   })                
                 }
                 render() {
                   return <div className="reg-content">
                       <ul>
                         <li className="lifirst">
                           <input type="text" value={this.state.username} onChange={this.changeUsername} />
                           <span>帐号</span>
                         </li>
                         <li>
                           <input type="text" value={this.state.password} onChange={this.changePassword} />
                           <span>密码</span>
                         </li>
                       </ul>
                       <div className="footbox">
                       <input type="button" value="注 册" className="login-btn" onClick={this.addClick} />
                       </div>
                     </div>;
                 }
               }
