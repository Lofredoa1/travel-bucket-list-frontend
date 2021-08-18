import React from "react"
import './App.css'

const Trip = (props) => {
    const {locations} = props
    console.log(locations.keyInterests[0].adventure1)
    return (
            <div> 
                <img className="img-trip"src={locations.img}/>
                <h1>{locations.activity}</h1>
                <h3>Location: {locations.location}</h3>
                <h3>Trip Planned for: {locations.travelGoal}</h3>
                <div>Main Goals for this trip:
                    <h3>{locations.keyInterests[0].adventure1}</h3>
                    <h3>{locations.keyInterests[0].adventure2}</h3>
                    <h3>{locations.keyInterests[0].adventure3}</h3>
                </div>
                <h4>{locations.description}</h4>

                <button onClick={() => props.history.goBack()}>Back</button>
            </div>               
    );

};

export default Trip