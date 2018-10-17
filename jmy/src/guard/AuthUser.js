import React,{Component} from 'react';
import {Route,Redirect} from 'react-router-dom';
import {connect} from "react-redux";

class Authuser extends Component {
  render() {
    let { component: Component, username, ...rest } = this.props
    return (
      <Route {...rest} render={(props) => {
        return (username ? <Component  {...props} username={username} /> : <Redirect to='/login' />)
      }} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.userName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Authuser)