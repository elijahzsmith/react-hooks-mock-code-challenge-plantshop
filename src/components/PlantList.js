import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, setPlantsList, plantsList }) {

  const displayPlants = plants.map(plant => {
    return (
      <PlantCard key={plant.id} plant={plant} setPlantsList={setPlantsList} plantsList={plantsList} />
    )
  })

  return (
    <ul className="cards">
      {displayPlants}
    </ul>
  );
}

export default PlantList;
