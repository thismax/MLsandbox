import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './Login.css';
import { FormGroup, ControlLabel, FormControl, Modal, Button } from 'react-bootstrap';

var Signupform = (props) => {
  return (
    <div className="login_container">
      <div id="login">
        <a href="#" id="close-body" data-dismiss="modal" onClick={props.onClose} 
        aria-label="Close" className="close-button"></a>
        <form id="login-fields">
        <fieldset className="clearfix">
          <p className="login_p"><span className="fa fa-user"></span>
            <input type="text" placeholder="Username" 
            id="signupEmail"
            required/></p>
          <p className="login_p"><span className="fa fa-lock"></span><input 
            id="signupPassword"
            type="password" 
            placeholder="Password" 
            required/></p> 
          <p className="login_p"><span className="fa fa-lock"></span><input 
            id="confirmPassword"
            type="password" 
            placeholder="Confirm Password" 
            required/></p> 
          <p className="login_p"><input onClick={props.signUp} type="button" defaultValue="Sign Up"/></p>  
        </fieldset>
        </form>
        <p className="login_p">Already Registered? 
          <a href="#" onClick={props.switchForm}>Login here</a>
          <span className="fontawesome-arrow-right"></span></p>
      </div>
    </div>
  );
}

export default Signupform;