import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import SignupPage from './Pages/SignupPage/SignupPage'
import LoginPage from './Pages/LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
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

export default App;
