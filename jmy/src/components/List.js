import React from 'react';
import '../assets/css/list.css'
import {Link} from 'react-router-dom'
import querystring from 'query-string'
import {connect} from 'react-redux'
class List extends React.Component {
                 render() {
                   return <div className="newsList">
                       <ul>
                         {this.props.list.map((item, index) => {
                           return <li key={index}>
                               <Link to={{ pathname: "/detail/" + item.id, 
                               search: querystring.stringify({dataName: this.props.dataName}) 
                               }}>
                                 <span>{item.name}</span>
                                 <p>{item.title}</p>
                                 <img src={item.imgUrl} alt="" />
                               </Link>
                               <p id="shoucang" onClick={this.props.addItem.bind(this,item)}>
                                 收藏
                               </p>
                             </li>;
                         })}
                       </ul>
                     </div>;
                 }
                //  add(){console.log('dianjile')}
               }


//获取store
const mapStateToProps = (state, ownProps) => {
  return {
    // buyCar:state.buyCar
  }
};

//转发actins
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addItem: (item) => {
      dispatch({
        type: 'ADD_ITEM',
        payload: item
      });
    }
  }
};
//容器组件 ->链接-> counter组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);