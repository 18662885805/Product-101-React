import React from "react";
import '../assets/css/buycar.css'
import { connect } from 'react-redux';
class Buycar extends React.Component {
    render() {
        let { buyCar, removeItem, clearBuyCar } = this.props;
        return (
        <div className="buycar">
            <div id="title">我的收藏</div>
                    {
                        buyCar.map((item, index) => {
                            return <dl key={item.id}>
                                <dt>
                                  <img src={item.imgUrl} alt="" />
                                </dt>
                                <dd>
                                    <div id="info">
                                        <p>{ item.title }</p>
                                        <p>{ item.name }</p>
                                    </div>
                                    <button onClick={removeItem.bind(null, item)} >删除</button>
                                </dd>                                                              
                              </dl>;
                        })
                    }                
            {buyCar.length ? <button onClick={clearBuyCar} id='clearall'>清空收藏夹</button> : null}
        </div>
        ); 
    }
}

//获取store
const mapStateToProps = (state, ownProps) => {
    return {
        buyCar: state.buyCar
    }
};

//转发actins
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        removeItem: (item) => {
            // console.log('buycar37',item);
            dispatch({
                type: 'REMOVE_ITEM',
                payload: item
            });
        },
        clearBuyCar: () => {
            dispatch({
                type: 'REMOVE_ALL'
            });
        }
    }
};
//容器组件 ->链接-> counter组件
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Buycar);