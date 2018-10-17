import * as types from './types'

//设置中间件
const asyncAction=(url,dispath,type)=>{
  dispath({type:types.LOADING_VIEW,payload:true});
  setTimeout(()=>{
    fetch(
      url
    ).then(
      res=>res.json()
    ).then(
      payload=>{
        dispath({type:types.LOADING_VIEW,payload:false});
        dispath({type,payload});
        dispath({ type: types.User_login, payload:2})
      }
    )
  },1000)
};

export default  asyncAction; 