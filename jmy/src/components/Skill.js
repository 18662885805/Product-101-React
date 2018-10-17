import React from "react";
import List from "./List";
import '../assets/css/skill.css';
import * as types from '../store/types';
import { connect } from "react-redux";
import asyncAction from '../store/actions';
class Skill extends React.Component {
    componentDidMount() {
        let url = `/data/skill.data`;
        this.props.update_skill(url)
    }
    render() {
        return <React.Fragment>
            <div className="skill">
              <p id="title"><i className="iconfont">&#xe608;</i>热门花絮</p>
              <List list={this.props.skillData} dataName="skill" />
            </div>
          </React.Fragment>; 
    }
}

const mapStateToProps = state => ({
    skillData: state.skillData
});

const mapDispatchToProps = dispatch => ({
    update_skill: (url) => { asyncAction(url, dispatch, types.UPDATE_SKILL) },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Skill);
