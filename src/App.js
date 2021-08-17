import './App.css';
import React, { useState, useEffect } from "react"
import { Route, Link, Switch } from "react-router-dom"
//import components
import Display from './Display';
import Form from './Form';

function App() {

  const url = "https://travel-locations-api.herokuapp.com"

  const [locations, setLocations] = useState([]);

  //empty location for new posts
  const emptyLocation = {
    activity: "",
    location: "",
    img: "",
    description: ""
  };

  const [selectedLocation, setSelectedLocation] = useState(emptyLocation)

  const getLocations = () => {
    fetch(url + "/locations/")
    .then((response) => response.json())
    .then((data) => {
      setLocations(data)
    })
  };

  useEffect(() => {getLocations()}, [])

  //Create new 
  const handleCreate = (newLocation) => {
    fetch(url + "/locations", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLocation),
    }).then(() => {
      getLocations();
    })
  };

  //Update existing
  const handleUpdate = (location) => {
    fetch(url + "/locations/" + location.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(location),
    }).then(() => {
      getLocations();
    })
  };

  const selectLocation = (location) => {
    setSelectedLocation(location)
  };

  //Destroy route
  const deleteLocation = (location) => {
    fetch(url + "/locations/" + location.id, {
      method: "delete",
    }).then(() => {
      getLocations();
    })
  };

  return (
    <div className="App">
      <h1>Travel Bucket List</h1>
      <hr />
      <Link to="/create">
        <button className="add-button">Add to the List</button>
      </Link>
      <main>
        <Switch>
        <Route exact path="/" render={(rp) => <Display {...rp} locations={locations} selectLocation={selectLocation} deleteLocation={deleteLocation} />} />
        <Route path="/create" render={(rp) => <Form {...rp} label="create" locations={emptyLocation} handleSubmit={handleCreate} />} />
        <Route path="/edit" render={(rp) => <Form {...rp} label="update" locations={selectedLocation} handleSubmit={handleUpdate} />} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
