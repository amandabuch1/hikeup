import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
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
  };

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }
  

  render() {

    return (
      <div className="App">
          <NavBar 
            user={this.state.user} 
            handleLogout={this.handleLogout}
          />
          {/* Hello this is app
          <Link to="/signup">
            Signup
          </Link>
  
          <Link to="/login">
            Login
          </Link> */}
  
          <Switch>
            <Route 
              exact
              path='/signup' 
              render={({history}) =>(
              <SignupPage 
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
              
              )}
            //   component={()=>
            //   <SignupPage/>
            // } 
            />
            <Route 
              path='/login' 
              render={ ({ history }) => (
                <LoginPage 
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin} 
                /> 
              )}
            />
          </Switch>
      </div>
    );
  }
  
}

export default App;
