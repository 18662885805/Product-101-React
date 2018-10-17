import React from 'react';
import '../assets/css/column.css';
import List from "./List";
import * as types from "../store/types";
import { connect } from "react-redux";
import asyncAction from '../store/actions';

class Column extends React.Component {
  componentDidMount() {
    let url = `/data/dance.data`;
    this.props.update_dance(url);
  }
  render() {
    return <React.Fragment>
        <div className="dance">
          <div id="dance_top">
            <p>
              <i className="iconfont">&#xe60a;</i>一周热舞
            </p>
            <ul>
              <li>
                <p>撑腰——孟美岐 张溪...</p>
              </li>
              <li>
                <p>创造101——李子璇</p>
              </li>
              <li>
                <p>街舞solo——高颖浠</p>
              </li>
              <li>
                <p>红昭愿——蒋申</p>
              </li>
              <li>
                <p>红昭愿——吴芊盈</p>
              </li>
              <li>
                <p>王菊——地狱空荡荡</p>
              </li>
            </ul>
          </div>
          <div id="dance_list">
            <div id="dance_list_title">
            <i className="iconfont">&#xe607;</i>
              <span>所有舞蹈</span>
            </div>
            <List list={this.props.danceData} dataName="dance" />
          </div>
        </div>
      </React.Fragment>;
  }
}
const mapStateToProps = state => ({
  danceData: state.danceData
});

const mapDispatchToProps = dispatch => ({
  update_dance: url => {
    asyncAction(url, dispatch, types.UPDATE_DANCE);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Column);