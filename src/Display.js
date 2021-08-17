import React from "react"
import './App.css'
import Trip from "./Trip";

const Display = (props) => {
    const {locations} = props
    
    const loading = <h1>Welcome Back! .... I'm getting the info...</h1> 

    const loaded = () => (
        <div className="main">
            {locations.map((location) => (
            <div className="thumbnail">
                <Trip locations={location}/>
            </div>               
            ))}
        </div>
    );

return locations.length > 0 ? loaded() : loading

};

export default Display