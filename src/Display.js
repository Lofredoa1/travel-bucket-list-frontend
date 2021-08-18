import React from "react"
import { Link } from "react-router-dom"
import './App.css'


const Display = (props) => {
    const {locations} = props
    
    const loading = <h1>Welcome Back! .... I'm getting the info...</h1> 

    const loaded = () => (
        <div className="main">
            {locations.map((location) => (
            <div className="thumbnail">
                <div>
                    <img className="img-thumbnail"src={location.img}/>
                    <h1>{location.activity}</h1>
                    <h3>{location.location}</h3>
                    <h3>{location.travelGoal}</h3>          
                </div> 
                <div className="buttons">
                    <Link to="/current-trip">
                        <button className="moreInfo-button">More Info</button>
                    </Link>
                    <button className="edit-button" onClick={() => {
                         props.selectLocation(location)
                         props.history.push("/edit")
                        }}>Edit</button>
                    <button className="delete-button" onClick={() => {
                        props.deleteLocation(location)
                        }}>Delete</button>
                </div>      
            </div>        
            ))}
        </div>
    );

return locations.length > 0 ? loaded() : loading

};

export default Display