import React from "react"
import './App.css'

const Trip = (props) => {
    const {locations} = props
    return (
 
            <div>
                <img className="img-thumbnail"src={locations.img}/>
                <h1>{locations.activity}</h1>
                <h3>{locations.location}</h3>
                <h3>{locations.description}</h3>
            </div>               
    );

};

export default Trip