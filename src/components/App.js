import React, { useEffect, useState } from 'react';
import DogBar from "./DogBar.js"
import Dog from "./Dog.js"

function App() {
  const [dogs, setDogs] = useState([]);
  const [currentDog, setCurrentDog] = useState({});

  useEffect (() => {
    fetch("http://localhost:3001/pups")
    .then((res) => res.json())
    .then((data) => {
      setCurrentDog(data[0])
      setDogs(data)})
  }, [])

  return (
    <div className="App">
        <DogBar dogList={dogs} setCurrentDog={setCurrentDog} />
        <div id="dog-summary-container">
        <h1 style={{ fontSize: "107px", marginTop: "0" }}>🐶</h1>
        <Dog dog={currentDog} setDog={setCurrentDog} />
        </div>
    </div>
  );
};

export default App;