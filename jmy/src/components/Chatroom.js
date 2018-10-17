
import React from "react";
import '../assets/css/chatroom.css'
export default class Chatroom extends React.Component {
    render() {
        return <div className="chatroom">
            <ul id="cont">
              <li>
                <iframe src="//player.bilibili.com/player.html?aid=25532419&cid=43483732&page=1" scrolling="no" border="0" frameBorder="no" framespacing="0" allowFullScreen="true" />
                <div id="info">
                  <p>【创造101】《逆风》纯享版</p>
                  <span />
                </div>
              </li>
              <li>
                <iframe src="//player.bilibili.com/player.html?aid=26169501&cid=44903921&page=1" scrolling="no" border="0" frameBorder="no" framespacing="0" allowFullScreen="true" />
                <div id="info">
                  <p>【创造101】B班舞蹈排练室</p>
                  <span />
                </div>
              </li>
              <li>
                <iframe src="//player.bilibili.com/player.html?aid=23986035&cid=40149060&page=1" scrolling="no" border="0" frameBorder="no" framespacing="0" allowFullScreen="true" />
                <div id="info">
                  <p>【创造101】Let Me Love You</p>
                  <span />
                </div>
              </li>
              <li>
              <iframe src="//player.bilibili.com/player.html?aid=24631129&cid=41399981&page=1" scrolling="no" border="0" frameBorder="no" framespacing="0" allowFullScreen="true" />
                <div id="info">
                  <p>【兄贵101】Pick me ♂ up</p>
                  <span />
                </div>
              </li>
            </ul>
          </div>;
    }
}