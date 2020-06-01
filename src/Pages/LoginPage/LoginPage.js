import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService'

// import './LoginPage.css';

class LoginPage extends Component {
  state = {
    email: '',
    pw: ''
  };

  handleChange = (e) => {
    // TODO: implement in an elegant way
    this.setState({
        [e.target.name]: e.target.value
    });
  }
 
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Update to call login instead of signup
      await userService.login(this.state);  
      this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push('/');
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      alert('Invalid Credentials!');
    }
  }

  render() {
    return (
      <div className="LoginPage">
        <h1 className="header-footer">Log In</h1>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default">Log In</button>&nbsp;&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default LoginPage;