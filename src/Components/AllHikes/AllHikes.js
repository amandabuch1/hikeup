import React, { Component } from 'react';

class AllHikes extends Component {
    render(){
        return (
          <div>
            <h1>AllHikes</h1>
             
              {this.props.hikes.map((h, idx) => (
                
              
                <article key={idx}>
                  <div className="card text-center border-primary mb-3">
                        <h3 className="card-header">
                          Hike Name: {h.title}
                        </h3> 
                        <div className="card-body">
                          <div className="card-title">User: {h.user.name}</div>

                          <div className="card-text">Description: {h.description}</div>
                          <div className="card-text">Date: {h.date}</div>
                         
                          <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                  </div>
                </article>
                    
              ))}
                
          </div>
        );
    }
}

export default AllHikes;