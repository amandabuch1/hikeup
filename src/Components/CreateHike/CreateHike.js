import React, { Component } from 'react';
import tokenService from '../../utils/tokenService';
// import hikesService from '../../utils/hikeService';


class CreateHike extends Component {

    state = {
        // hikes: [{ title: "runyon cannon", description: 4 }],
        newHike:{
            title: '',
            description: '',
            date: '',
        }
    };
    
    // async componentDidMount() {
    //     const hikes = await hikesService.index();
    //     this.props.handleUpdateScores(hikes);
    // }

    addHike = (e) => {
        e.preventDefault();

        console.log(this.state.newHike)

        fetch('/api/hikes/' + 'create', {
            method: 'POST',
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin',
            headers: {
                'Authorization': 'Bearer ' + tokenService.getToken(),
                'Content-Type': 'application/json'
              },
            // headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(this.state.newHike)
          })
        
          .then(res => {
            if (res.ok){
                // Using the "function" approach because relying on existing state
                // console.log(res);
                // this.props.updateHikes(this.state.newHike)
                this.setState(state => ({
                    // Always replace, don't mutate top-level state properties
                    // hikes: [...state.hikes, this.state.newHike],
                    // Reset the inputs for better UX
                    newHike: {title: '', description: '', date:''}

                }));
                return res.json();
            };
            // Probably a duplicate email
            // res.json().then(function(err) {
            //     throw new Error(err)
            // })
          })
          .then(data=>{
            //   console.log(data)
              this.props.updateHikes(data.hike)
          })
        
    };

    handleFormChange = e => {
        e.persist();
        // Shows what <input> your typing in
        // console.log(e.target);
        this.setState( state =>{
            const newState = {newHike: {...state.newHike} };
            newState.newHike[e.target.name] = e.target.value;
            return newState;
        });
        
    };


    render() {
        return (
            <section>
                <h2>Create a Hike</h2>
                <hr />
              
                <hr />
                <form onSubmit={this.addHike}>
                    <label>
                    <span>Hike Name</span>
                    <input 
                        name='title'
                        value={this.state.newHike.title}
                        onChange={this.handleFormChange}
                        required
                    />
                    </label>
                    <label>
                    <span>Description</span>
                    <input
                        name='description'
                        value={this.state.newHike.description}
                        onChange={this.handleFormChange}
                    />
                    </label>

                    <label>
                        <span>Date</span>
                        <input 
                            type="datetime-local" 
                            name="date"
                            onChange={this.handleFormChange}
                            value={this.state.newHike.date}
                        >
                        
                        </input>
                        {/* <DatetimeInput
                            datetime={this.state.datetime}
                            onChange={this.handleOnChange.bind(this)}>
                        </DatetimeInput> */}
                    </label>

                    <button>ADD Hike</button>
                </form>
            </section>
        );
    }
}

export default CreateHike;