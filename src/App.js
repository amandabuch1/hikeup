import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import SignupPage from './Pages/SignupPage/SignupPage';
import NavBar from './Components/NavBar/NavBar';
import LoginPage from './Pages/LoginPage/LoginPage';
import userService from './utils/userService';

class App extends Component{
  constructor(){
    super();
    this.state = {
      // Initialize user if there's a token, otherwise null
      user: userService.getUser()
    }
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  render() {

    return (
      <div className="App">
          <NavBar 
            user={this.state.user} 
            handleLogout={this.handleLogout}
          />
          Hello this is app
          <Link to="/signup">
            Signup
          </Link>
  
          <Link to="/login">
            Login
          </Link>
  
          <Switch>
            <Route path='/signup' component={()=>
              <SignupPage/>
            } />
            <Route path='/login' component={()=>
              <LoginPage />
            }/>
          </Switch>
      </div>
    );
  }
  
}

export default App;
