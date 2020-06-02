import React, { Component } from "react";

class HikeForm extends Component {
    render(){
        const hikesList =
        // if hikes have been fetched from api, then map through them:
        this.props.nearbyTrails.length > 0 &&
        this.props.nearbyTrails.map((trail) => {
          return (
            <option key={trail.id} value={trail.name}>
              {trail.name}
            </option>
          );
        });
        return(
            <section>
                <h1>{this.props.formTitle}</h1>
                <hr />

                <form onSubmit={this.props.addHike}>
                    <label>
                    <span>Hike Name</span>
                    <select 
                    name="title" 
                    id="title" 
                    required
                    value={this.props.newHike.title}
                    onChange={this.props.handleFormChange}
                    placeholder=" "
                    >
                    {hikesList}
                    </select>
                    </label>
                    <br />
                    <label>
                        <span>Description</span>
                        <input
                        name="description"
                        value={this.props.newHike.description}
                        onChange={this.props.handleFormChange}
                        />
                    </label>
                    <br/>
                    <label>
                        <span>Date</span>
                        <input
                        type="datetime-local"
                        name="date"
                        onChange={this.props.handleFormChange}
                        value={this.props.newHike.date}
                        ></input>
                    </label>

                    <button>{this.props.buttonText}</button>
                </form>
            </section>

        )
    }
}

export default HikeForm;