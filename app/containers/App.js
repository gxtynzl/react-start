import React, { Component } from 'react' // 引入React
import { Link } from 'react-router'
import '../assets/css/app.css'

export default class App extends Component {
  render(){
    return (
      <div>
        <div className="panel-body">
          { this.props.children }
        </div>
        <ul>
          <li>
            <Link to="/" activeStyle={{color: '#555'}}>
              
              <span>外卖</span>
            </Link>
          </li>
          <li>
            <Link to="/find" activeStyle={{color: '#555'}}>发现</Link>
          </li>
          <li>
            <Link to="/order" activeStyle={{color: '#555'}}>订单</Link>
          </li>
          <li>
            <Link to="/mine" activeStyle={{color: '#555'}}>我的</Link>
          </li>
        </ul>
      </div>
    )
  }
}
