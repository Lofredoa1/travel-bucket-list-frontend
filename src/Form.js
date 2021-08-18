import { useState } from "react"
import React from "react-router-dom"
import "./App.css"

const Form = (props) => {
    const [formData, setFormData] = useState(props.locations)

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleSubmit(formData)
        props.history.push("/")
    };

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
        console.log(formData)
        console.log(event.target)
    };

    const handleChangeKI = (event) => {
        setFormData({...formData, keyInterests: {...formData.keyInterests, [event.target.name]: event.target.value}})
        console.log(formData)
        console.log(event.target)
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
            <h2>Where To Next?</h2>
                <input
                    className="form-input"
                    type="text"
                    name="activity"
                    placeholder="Enter Trip Title"
                    onChange={handleChange}
                    value={formData.locations}
                />
                <input
                    className="form-input"
                    type="text"
                    name="location"
                    placeholder="Enter Location"
                    onChange={handleChange}
                    value={formData.locations}
                />
                <input
                    className="form-input"
                    type="text"
                    name="description"
                    placeholder="Enter trip description"
                    onChange={handleChange}
                    value={formData.locations}
                />
                <input
                    className="form-input"
                    type="text"
                    name="travelGoal"
                    placeholder="Travel Goal"
                    onChange={handleChange}
                    value={formData.locations}
                />
            </div>
            <div className="adventures">
                <h2>What will we do?</h2>
                <input
                    className="form-input"
                    type="text"
                    name="adventure1"
                    placeholder="Enter Adventure"
                    onChange={handleChangeKI}
                    value={formData.locations}
                />
                <input
                    className="form-input"
                    type="text"
                    name="adventure2"
                    placeholder="Enter Adventure"
                    onChange={handleChange}
                    value={formData.locations}
                />
                <input
                    className="form-input"
                    type="text"
                    name="adventure3"
                    placeholder="Enter Adventure"
                    onChange={handleChange}
                    value={formData.locations}
                />
                </div>
                <h4>Insert a Cover Photo for Trip</h4>
                <input
                    className="form-input"
                    type="text"
                    name="img"
                    placeholder="Needs to be an img URL"
                    onChange={handleChange}
                    value={formData.locations}
                />
            <input className="create-button" type="submit" value={props.label}/>
        </form>
    );
};

export default Form