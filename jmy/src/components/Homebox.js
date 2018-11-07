import React from 'react';
import '../assets/css/homebox.css';
// import * as types from "../store/types";
// import { connect } from "react-redux";
// import asyncAction from '../store/actions';

//引入图片
import qiyandi1 from "../assets/images/qiyandi1.jpg";
import zining3 from "../assets/images/zining3.jpg";
import zining2 from "../assets/images/zining2.jpg";
import laimeiyun2 from "../assets/images/laimeiyun2.jpg";
import liurenyu1 from "../assets/images/liurenyu1.jpg";
import xumengjie1 from "../assets/images/xumengjie1.jpg";
import duanaojuan2 from "../assets/images/duanaojuan2.jpg";
import duanaojuan1 from "../assets/images/duanaojuan1.jpg";
import wuxuanyi1 from "../assets/images/wuxuanyi1.jpg";
import fujing2 from "../assets/images/fujing2.jpg";
import fujing1 from "../assets/images/fujing1.jpg";
import yangfeng1 from "../assets/images/yangfeng1.jpg";
import yangfeng2 from "../assets/images/yangfeng2.jpg";

export default class Homebox extends React.Component {
//   constructor(props) {
//     super();
//     let url = `/data/follow.data`;
//     props.update_follow(url);
//   }
  render() {
    return <div className="homelist">
        <div id="recommend">
          <div id="recommend_title">
            <i className="iconfont">&#xe610;</i>
            <p>加入我们!</p>
          </div>
          <ul>
            <li>
              <img src={yangfeng2} alt="" />
              <span>公关部</span>
              <p>集团颜值</p>
            </li>
            <li>
              <img src={yangfeng1} alt="" />
              <span>游戏部</span>
              <p>Enchanted</p>
            </li>
            <li>
              <img src={laimeiyun2} alt="" />
              <span>赖美云</span>
              <p>齐鼓文化</p>
            </li>
            <li>
              <img src={liurenyu1} alt="" />
              <span>刘人语</span>
              <p>ETM活力时代</p>
            </li>
            <li>
              <img src={xumengjie1} alt="" />
              <span>徐梦洁</span>
              <p> 姊妹淘</p>
            </li>
            <li>
              <img src={duanaojuan2} alt="" />
              <span>段奥娟</span>
              <p> 龙舞天文化</p>
            </li>
            <li>
              <img src={wuxuanyi1} alt="" />
              <span>吴宣仪</span>
              <p>乐华娱乐 </p>
            </li>
            <li>
              <img src={fujing2} alt="" />
              <span>傅菁</span>
              <p>香蕉娱乐 </p>
            </li>
          </ul>
        </div>
        <div id="home_news">
          <div id="home_news_title">
            <i className="iconfont">&#xe605;</i>
            <p>小姐姐新闻</p>
          </div>
          <ul>
            <li>
              <img src={zining2} alt="" />
              <span>紫宁、孟美岐合奏吉他</span>
              <p>
                谢谢米奇一路陪伴我们老美不过强迫症，在这里要被逼死了哈哈！
              </p>
            </li>
            <li>
            <img src={fujing1} alt=''/>
              <span>傅菁直男爱情修炼手册</span>
              <p>小傅是怎么做到集帅脸奶泡直男乖乖于一身的啊啊啊啊啊！</p>
            </li>
            <li>
            <img src={duanaojuan1} alt=''/>
              <span>大娟终于会自拍了</span>
              <p>段奥娟后援会公益行动，希望各位奥利奥踊跃参加。</p>
            </li>
          </ul>
        </div>
      </div>;
  }
}

// const mapStateToProps = state => ({
//     followData: state.followData
// });

// const mapDispatchToProps = dispatch => ({
//     update_follow: (url) => { asyncAction(url, dispatch, types.UPDATE_FOLLOW) },
// });

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Follow);
