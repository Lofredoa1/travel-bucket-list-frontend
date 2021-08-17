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
            <input
                type="text"
                name="activity"
                placeholder="Enter Bucket List Trip"
                onChange={handleChange}
            />
            <input
                type="text"
                name="location"
                placeholder="Enter Location"
                onChange={handleChange}
            />
            <input
                type="text"
                name="img"
                placeholder="Enter URL of IMG to style"
                onChange={handleChange}
            />
            <input
                type="text"
                name="keyInterests.adventure1"
                placeholder="Enter Adventure"
                onChange={handleChange}
            />
            <input
                type="text"
                name="keyInterests.adventure2"
                placeholder="Enter Adventure"
                onChange={handleChange}
            />
            <input
                type="text"
                name="keyInterests.adventure3"
                placeholder="Enter Adventure"
                onChange={handleChange}
            />
            <input type="submit" value={props.label}/>
        </form>
    );
};

export default Form