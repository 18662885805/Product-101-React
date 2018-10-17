import React from 'react';
import Slider from "./Slider";
import Homebox from './Homebox';
// import List from "./List";


export default class Home extends React.Component {
  // componentDidMount() {
  //   let url = `/data/index.data`;
  //   this.props.update_home(url);
  // }
  render() {
    return (
      <React.Fragment>
        <Slider />
        <Homebox />
      </React.Fragment>
    );
  }
}


/*const Home = ({homeData,update_home}) => {
  return (
    <React.Fragment>
      <Slider />
      <div onClick={()=>{update_home('/data/index.data')}}>div</div>
      <List list={homeData} dataName="home"/>
    </React.Fragment>
  );
};*/

// const mapStateToProps=state=>({
//   homeData:state.homeData
// });

// const mapDispatchToProps=dispatch=>({
//   update_home:(url)=>{asyncAction(url,dispatch,types.UPDATE_HOME)},
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Home);
