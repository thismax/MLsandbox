import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Options from './Options';
import Logout from '../Logout/index';
import jwt from 'jsonwebtoken';

class Sandbox extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    var token = localStorage.jwtToken;
    this.props.dispatch({type:"VALIDATE_AUTH", user:jwt.decode(token)});
  }

  render () {
    return(
      <div className="sandbox-page">
        <div className="sandbox-heading">
          <div className="user-management">
            <div className="greeting">Hello, {this.props.user}</div>
            <Link to ="/settings"><div className="profile-link">Profile settings</div></Link>
            <Logout />
          </div>
          <Link to ="/Wiki"><div className="wiki-link">LEARN/INFORMATION</div></Link>
        </div>
        <Options />
      </div>
    )
  }
}

export default connect((store) => {
  return {
    user: store.auth.authentication.user.username
  }
})(Sandbox);