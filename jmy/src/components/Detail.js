import React from 'react';
import '../assets/css/detail.css'
import querystring from 'query-string'
import date from '../common/date'

export default class Detail extends React.Component {
  constructor(props){
    super();
    this.state={
      detail:{}
    };
    let id = props.match.params.aid;
    let dataName=querystring.parse(props.location.search).dataName;
    fetch(
      `/data/article_${dataName}.data`
    ).then(
      res=>res.json()
    ).then(
      data=>this.setState({detail:data[id-1]})
    )

  }
  render() {
    return <React.Fragment>        
        <div className="detail">
            <dl>
              <dt>
            <img src={this.state.detail.imgUrl} alt="" />
              </dt>
              <dd>
                <div id="info">
                  <p>{this.state.detail.title}</p>
                  <p>{this.state.detail.name}</p>
                </div>
            <button onClick={() => {this.props.history.go(-1)}}>返回</button>              
              </dd> 
            </dl>
        </div>
      </React.Fragment>;
  }
}
