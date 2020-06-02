import React, { Component } from 'react';
// import UpdateHike from '../UpdateHike/UpdateHike';
// import { Link } from 'react-router-dom';

class AllHikes extends Component {

  

  render(){
    const hikes = this.props.hikes.length ?
     (this.props.hikes.map((h, idx) => (
      <article key={idx}>
        <div className="card text-center border-primary mb-3">
          <h3 className="card-header">
            Hike Name: {h.title}
          </h3> 
          <div className="card-body">
            <div className="card-title">User: {h.user.name}</div>

            <div className="card-text">Description: {h.description}</div>
            <div className="card-text">Date: {h.date}</div>
            
            
            {this.props.user._id===h.user._id ?
            (<button className="btn btn-primary" onClick={()=>{
              this.props.deleteHike(h._id);
            }}>
              Delete
            </button>)
              :
            null}

            {/* <button >
              <Link to={`update/${h._id}`}>
                    Update
              </Link>
            </button> */}
          </div>
        </div>
      </article>     
    ))) :
   "no hikes"

    return (
      <div>
        <h1>AllHikes</h1>
        <hr/>
            {hikes}
      </div>
    );
  }
}

export default AllHikes;