import React, { Component } from 'react';
import hikesService from '../../utils/hikeService';

class CreateHike extends Component {

    state = {
        hikes: [{ title: "runyon cannon", description: 4 }],
        newHike:{
            title: '',
            description: 'add description',
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
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(this.state.newHike)
          })
        
          .then(res => {
            if (res.ok){
                // Using the "function" approach because relying on existing state
                this.setState(state => ({
                    // Always replace, don't mutate top-level state properties
                    hikes: [...state.hikes, this.state.newHike],
                    // Reset the inputs for better UX
                    newHike: {title: '', description: 'add description'}
                }));
            };
            // Probably a duplicate email
            // res.json().then(function(err) {
            //     throw new Error(err)
            // })
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
                {this.state.hikes.map((h, idx) => (
                    <article key={idx}>
                        <div>{h.title}</div> 
                        <div>{h.description}</div>
                    </article>
                ))}
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
                    <span>description</span>
                    <input
                        name='description'
                        value={this.state.newHike.description}
                        onChange={this.handleFormChange}
                    />
                    </label>
                    <button>ADD Hike</button>
                </form>
            </section>
        );
    }
}

export default CreateHike;