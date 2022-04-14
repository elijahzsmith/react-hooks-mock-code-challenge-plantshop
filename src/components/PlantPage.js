import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ API, plantsList, setPlantsList, search, setSearch, plants, filteredList }) {

  return (
    <main>
      <NewPlantForm 
        API={API}
        plantsList={plantsList} 
        setPlantsList={setPlantsList}
      />
      <Search 
        setSearch={setSearch}
      />
      <PlantList 
       filteredList={filteredList}
       plantsList={plantsList}
        plants={plants}
        setPlantsList={setPlantsList}
        />
    </main>
  );
}

export default PlantPage;
