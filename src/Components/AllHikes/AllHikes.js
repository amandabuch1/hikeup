import React, { Component } from 'react';
// import UpdateHike from '../UpdateHike/UpdateHike';
// import { Link } from 'react-router-dom';

class AllHikes extends Component {

  

    render(){
        return (
          <div>
            <h1>AllHikes</h1>
            <hr/>
             
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
                         
                          {/* <button className="btn btn-primary" onClick={()=>{
                            this.props.deleteHike(idx, h._id);
                          }}>
                            Delete
                          </button> */}
                          
                          {/* <button >
                            <Link to={`update/${h._id}`}>
                                  Update
                            </Link>
                      
                           
                          </button> */}
                          
                        </div>
                  </div>
                </article>
                    
              ))}
                
          </div>
        );
    }
}

export default AllHikes;