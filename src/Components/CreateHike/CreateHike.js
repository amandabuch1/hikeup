import React, { Component } from 'react';

class CreateHike extends Component {

    state = {
        hikes: [{ title: "runyon cannon", description: 4 }],
        newHike:{
            title: '',
            description: 'add description',
        }
    };
    
    addHike = (e) => {
        e.preventDefault();
        
        // Using the "function" approach because relying on existing state
        this.setState(state => ({
            // Always replace, don't mutate top-level state properties
            hikes: [...state.hikes, state.newHike],
            // Reset the inputs for better UX
            newHike: {title: '', description: 'add description'}
        }));
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