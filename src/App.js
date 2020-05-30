import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SignupPage from "./Pages/SignupPage/SignupPage";
import NavBar from "./Components/NavBar/NavBar";
import LoginPage from "./Pages/LoginPage/LoginPage";
import userService from "./utils/userService";
import Home from "./Components/Home/Home";
import AllHikes from "./Components/AllHikes/AllHikes";
import CreateHike from "./Components/CreateHike/CreateHike";
import tokenService from "./utils/tokenService";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // Initialize user if there's a token, otherwise null
      user: userService.getUser(),
      location: {
        lat: null,
        long: null,
      },
      hikes: [
        // from our DB
        // { title: "runyon cannon", description: 4 }
      ],
      nearbyTrails: [{ id: 5, name: "Hello" }],

      // { trails: [{ id: 5, name: "Hello" }] },
      // from 3d party API
      // { title: "runyon cannon", description: 4 }
      isLoading: true,
    };
  }

  async componentDidMount() {
    await window.navigator.geolocation.getCurrentPosition((position) => {
      this.setState(
        {
          location: {
            lat: position.coords.latitude,
            long: position.coords.longitude,
          },
          isLoading: false,
        },
        (newState) => {
          this.getAllHikes();
        }
      );
    });
  }


  updateHikes = (newHike) => {
    console.log(newHike);
    this.setState({
      hikes: [...this.state.hikes, newHike],
    });
  };

  getAllHikes = () => {
    const { lat, long } = this.state.location;
    // change string to match hiking project url
    fetch(
      `https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${long}&maxDistance=10&key=${process.env.REACT_APP_HIKING_PROJECT_KEY}`,
    )
      .then((res) => {
        console.log(res);
        if (res.ok) {
          return res.json();
        }
      })
      .then((hikes) => {
        console.log(hikes.trails);
        console.log("Updating state with hikes");
        this.setState({ nearbyTrails: hikes.trails });
      });
  };

  

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.getAllHikes();
    this.indexGetAllHikes();
    this.setState({ user: userService.getUser() });
  };

  indexGetAllHikes= () => {
    fetch("/api/hikes/" + "index", {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken(),
            'Content-Type': 'application/json'
          },
        // headers: new Headers({'Content-Type': 'application/json'}),
        // body: JSON.stringify(this.state.newHike)
      }
    )
      .then((res) => {
        console.log(res);
        if (res.ok) {
          return res.json();
        }
      })
      .then((hikes) => {
        console.log("HIKKKKKES", hikes)
        this.setState({hikes});

      });
  };

  render() {
    return (
      <div className="App">
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        {/* Hello this is app
          <Link to="/signup">
            Signup
          </Link>
  
          <Link to="/login">
            Login
          </Link> */}

        <Switch>
          <Route exact path="/" component={Home} />

          <Route
            exact
            path="/hikes"
            render={() => 
            <AllHikes 
              hikes={this.state.hikes} 
              // indexGetAllHikes={this.indexGetAllHikes}
            />}
          />

          <Route
            exact
            path="/createhike"
            render={() => (
              <CreateHike
                nearbyTrails={this.state.nearbyTrails}
                updateHikes={this.updateHikes}
              />
            )}
          />

          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />

          <Route
            path="/login"
            render={({ history }) => (
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
