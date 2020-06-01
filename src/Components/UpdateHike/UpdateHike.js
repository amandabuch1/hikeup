import React, { Component } from "react";
// import tokenService from "../../utils/tokenService";
import HikeForm from "../HikeForm/HikeForm";
// import { useParams } from "react-router-dom";

class UpdateHike extends Component {

    state = {
        // hikes: [{ title: "runyon cannon", description: 4 }],
        newHike: {
          title: "",
          description: "",
          date: "",
        },
      };

    componentDidMount(){
        console.log("component will mount")
        // this is where i do the fetch 
        // fetch("/api/hikes/" + this.props.routeParams.match.params.id, {
        //     method: "GET",
        //     // need for react to talk to express
        //     mode: "cors",
        //     cache: "no-cache",
        //     // looks for stuff like api keys
        //     credentials: "same-origin",
        //     // option value with more values api keys
        //     headers: {
        //       Authorization: "Bearer " + tokenService.getToken(),
        //       // what type of data is being passed
        //       "Content-Type": "application/json",
        //     },
        //     // this is a post request. in post requests we ussually send a body.
        //     // body: JSON.stringify(this.state.newHike),
        //   })
        // .then((res) => {
        //   console.log(res)
        //     if (res.ok) {

        //       this.setState((state) => {
        //         console.log(res.json())
        //         // update the state with the response
        //         // newHike: { title: "", description: "", date: "" },
        //       });
        //       return res.json();
        //     }
        //   })
          console.log("component did finish")
    }

    handleFormChange = (e) => {
        e.persist();
        // Shows what <input> your typing in
        // console.log(e.target);
        this.setState((state) => {
          const newState = { newHike: { ...state.newHike } };
          newState.newHike[e.target.name] = e.target.value;
          return newState;
        });
    };
 
    render(){
        // gives us the id to hike we clicked on all hikes page
        console.log(this.props.routeParams.match.params.id)

        // fetch hike from backend and pass to HikeForm
        
        // create hike to do update

        // onsubmit update instead of create


        return(
            <HikeForm 
                // addHike={this.addHike}
                handleFormChange={this.handleFormChange}
                nearbyTrails={this.props.nearbyTrails}
                formTitle="Update Hike"
                buttonText="Update"
                newHike={this.state.newHike}
            />
         
        )
    }
//   state = {
//     // hikes: [{ title: "runyon cannon", description: 4 }],
//     hikeData: {
//       title: this.props.hike.title,
//       description: this.props.hike.description,
//       date: this.props.hike.date,
//       id: this.props.hike._id 
//     },
//   };


// //   addHike = (e) => {
// //     e.preventDefault();

// //     // console.log(this.state.newHike);

// //     fetch("/api/hikes/" + "create", {
// //       method: "POST",
// //       // need for react to talk to express
// //       mode: "cors",
// //       cache: "no-cache",
// //       // looks for stuff like api keys
// //       credentials: "same-origin",
// //       // option value with more values api keys
// //       headers: {
// //         Authorization: "Bearer " + tokenService.getToken(),
// //         // what type of data is being passed
// //         "Content-Type": "application/json",
// //       },
// //       // this is a post request. in post requests we ussually send a body.
// //       body: JSON.stringify(this.state.newHike),
// //     })
// //       // fisrt resolves promise
// //       .then((res) => {
// //         if (res.ok) {
// //           // Using the "function" approach because relying on existing state
// //           // console.log(res);
// //           // this.props.updateHikes(this.state.newHike)
// //           this.setState((state) => ({
// //             // Always replace, don't mutate top-level state properties
// //             // hikes: [...state.hikes, this.state.newHike],
// //             // Reset the inputs for better UX
// //             newHike: { title: "", description: "", date: "" },
// //           }));
// //           return res.json();
// //         }
// //       })
// //       // second handles datat in the promise
// //       .then((data) => {
// //         console.log(data)
// //         this.props.updateHikes(data.hike);
// //       });
// //   };

//   handleFormChange = (e) => {
//     e.persist();
//     // Shows what <input> your typing in
//     // console.log(e.target);
//     this.setState((state) => {
//       const newState = { newHike: { ...state.newHike } };
//       newState.newHike[e.target.name] = e.target.value;
//       return newState;
//     });
//   };

//   render() {

//     return (
//       <HikeForm 
//         addHike={this.addHike}
//         handleFormChange={this.handleFormChange}
//         nearbyTrails={this.props.nearbyTrails}
//         formTitle="Create Hike"
//         buttonText="Create"
//         newHike={this.state.newHike}
//       />

//     );
//   }
}

export default UpdateHike;
