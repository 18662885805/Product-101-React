import React from 'react';
import '../assets/css/follow.css'
import List from "./List";
import * as types from "../store/types";
import {connect} from "react-redux";
import asyncAction from '../store/actions';


class Follow extends React.Component {
  componentDidMount() {
    let url = `/data/song.data`;
    this.props.update_song(url)
  }
  render() {
    return <React.Fragment>
        <div className="song">
          <div id="song_top">
            <p>
            <i className="iconfont">&#xe60a;</i>一周热歌
            </p>
            <ul>
              <li>
                <p>逆光——吴映香 李紫婷...</p>
              </li>
              <li>
                <p>路——强东玥</p>
              </li>
              <li>
                <p>独家记忆——紫宁</p>
              </li>
              <li>
                <p>摩天轮的眼泪——魏瑾...</p>
              </li>
              <li>
                <p>撑腰——孟美岐 张溪...</p>
              </li>
              <li>
                <p>123我爱你——戚砚笛</p>
              </li>
            </ul>
          </div>
          <div id="song_list">
            <div id="song_list_title">
            <i className="iconfont">&#xe612;</i>
              <span>所有歌单</span>
            </div>
            <List list={this.props.songData} dataName="song" />
            
          </div>
        
        </div>
      </React.Fragment>;
  }
}
const mapStateToProps = state => ({
  songData: state.songData
});

const mapDispatchToProps = dispatch => ({
  update_song: url => {
    asyncAction(url, dispatch, types.UPDATE_SONG);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Follow);

