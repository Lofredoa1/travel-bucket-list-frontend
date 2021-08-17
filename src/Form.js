import { useState } from "react"
import React from "react-router-dom"
import "./App.css"

const Form = (props) => {
    const [formData, setFormData] = useState(props.location)

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleSubmit(formData)
        props.history.push("/")
    };

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
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
                />
                <input
                    className="form-input"
                    type="text"
                    name="location"
                    placeholder="Enter Location"
                    onChange={handleChange}
                />
                <input
                    className="form-input"
                    type="text"
                    name="description"
                    placeholder="Enter trip description"
                    onChange={handleChange}
                />
            </div>
            <div className="adventures">
                <h2>What will we do?</h2>
                <input
                    className="form-input"
                    type="text"
                    name="keyInterests.adventure1"
                    placeholder="Enter Adventure"
                    onChange={handleChange}
                />
                <input
                    className="form-input"
                    type="text"
                    name="keyInterests.adventure2"
                    placeholder="Enter Adventure"
                    onChange={handleChange}
                />
                <input
                    className="form-input"
                    type="text"
                    name="keyInterests.adventure3"
                    placeholder="Enter Adventure"
                    onChange={handleChange}
                />
                </div>
                <h4>Insert a Cover Photo for Trip</h4>
                <input
                    className="form-input"
                    type="text"
                    name="img"
                    placeholder="Needs to be an img URL"
                    onChange={handleChange}
                />
            <input className="create-button" type="submit" value={props.label}/>
        </form>
    );
};

export default Form