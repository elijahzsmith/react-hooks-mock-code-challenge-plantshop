import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

const API = 'http://localhost:6001/plants'
function App() {
  const [plantsList, setPlantsList] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(plantsData => {
      console.log(plantsData)
      setPlantsList(plantsData)
    })
  }, [])

  const handleFilter = () => {
    const afterFilter = plantsList.filter(plant => {
      return plant.name.toLowerCase().includes(search)
    })
    return afterFilter
  }

  return (
    <div className="app">
      <Header />
      <PlantPage 
        API={API} 
        plantsList={plantsList} 
        setPlantsList={setPlantsList}
        search={search}
        setSearch={setSearch}
        plants={handleFilter()}
      />
    </div>
  );
}

export default App;
