import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import SignupPage from './Pages/SignupPage/SignupPage';
import NavBar from './Components/NavBar/NavBar';
import LoginPage from './Pages/LoginPage/LoginPage';
import userService from './utils/userService';
import Home from './Components/Home/Home'
import AllHikes from './Components/AllHikes/AllHikes';
import CreateHike from './Components/CreateHike/CreateHike';


class App extends Component{
  constructor(){
    super();
    this.state = {
      // Initialize user if there's a token, otherwise null
      user: userService.getUser(),
      hikes: [
        // { title: "runyon cannon", description: 4 }
      ],
    }
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  updateHikes =(newHike)=>{
    console.log(newHike);
    this.setState({ 
        hikes: [
          ...this.state.hikes,
          newHike
        ]
    })
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
              path="/" 
              component={Home} 
            />

            <Route
              exact
              path="/hikes" 
              render={()=>
                <AllHikes 
                  hikes={this.state.hikes}

                />
              }
            />

            <Route
              exact
              path="/createhike" 
              render={()=>
                <CreateHike 
                  allHikes={this.state.hikes}
                  updateHikes={this.updateHikes}
                />
              }
            />


            <Route 
              exact
              path='/signup' 
              render={({history}) =>(
              <SignupPage 
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
              )}
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
