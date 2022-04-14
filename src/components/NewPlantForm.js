import React, { useState } from "react";

function NewPlantForm({ API, plantsList, setPlantsList }) {
  const [nameInput, setNameInput] = useState('')
  const [imageInput, setImageInput] = useState('')
  const [priceInput, setPriceInput] = useState('')

  const handleSubmit = (e) => {

    const newPlant = {
      name: nameInput, 
      image: imageInput, 
      price: priceInput
    }

    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newPlant)
    }

    fetch(API, configObj)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      console.log(e)
      setPlantsList(data)
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input type="text" name="name" placeholder="Plant name" onChange={(e) => setNameInput(e.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" onChange={(e) => setImageInput(e.target.value)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={(e) => setPriceInput(e.target.value)}/>
        <button type="submit" onClick={(e) => handleSubmit(e)}>Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
