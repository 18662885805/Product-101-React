import * as types from './types'
const reducer = (state,{type,payload}) => {
  switch (type) {
    case types.NAV_VIEW:
      return Object.assign({}, state, { bNav: payload });
    case types.FOOT_VIEW:
      return Object.assign({}, state, { bFoot: payload });
    case types.LOADING_VIEW:
      return Object.assign({}, state, { bLoading: payload });
    case types.User_login:
      return Object.assign({}, state, { userName: payload });
    case types.UPDATE_HOME:
      return Object.assign({}, state, { homeData: payload });
    case types.UPDATE_FOLLOW:
      return Object.assign({}, state, { followData: payload });
    case types.UPDATE_SKILL:
      return Object.assign({}, state, { skillData: payload });
    case types.UPDATE_SONG:
      return Object.assign({}, state, { songData: payload });
    case types.UPDATE_DANCE:
      return Object.assign({}, state, { danceData: payload });
    case types.UPDATE_USER:
      return Object.assign({}, state, { user: payload });
    case "ADD_ITEM":
      alert("添加收藏成功！");
      let find = false;
      state.buyCar.forEach((item, index) => {
        if (item.id === payload.id) {
          find = true;
          item.number++;
        }
      });
      if (!find) {
        payload.number = 1;
        state.buyCar.push(payload);
      }
      return Object.assign({}, state, { buyCar: [...state.buyCar] });
    case "REMOVE_ITEM":
      alert("删除成功");
      state.buyCar.forEach((item, index) => {
        if (item.id === payload.id) {
          state.buyCar.splice(index, 1);
        }
      });
      return Object.assign({}, state, { buyCar: [...state.buyCar] });
    case "REMOVE_ALL":
      alert("删除成功");
      return Object.assign({}, state, { buyCar: [] });

    default:
      return state;
  }
};
export default reducer


