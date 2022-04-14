import React, { useState } from "react";

function PlantCard({ plant, plantsList, setPlantsList }) {
  const [inStock, setInStock] = useState(true)
  const [editPrice, setEditPrice] = useState('')

  const { id, name, image, price } = plant

  const handleToggle = () => {
    setInStock(inStock => !inStock)
  }

  const handleDelete = () => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(() => { 
      const afterDelete = plantsList.filter(plant => plant.id !== id)
      setPlantsList(afterDelete)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:6001/plants/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ price: editPrice })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const updatedPlants = plantsList.map(plant => plant.id === id ? data : plant)
      setPlantsList(updatedPlants)
    })
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      {inStock ? (
        <button className="primary" onClick={handleToggle}>In Stock</button>
      ) : (
        <button onClick={handleToggle}>Out of Stock</button>
      )}
      <button onClick={handleDelete}>Delete</button>
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          placeholder={`Edit Price: $${price}`} 
          onChange={(e) => setEditPrice(parseFloat(e.target.value))}>
        </input>
        <button onClick={handleSubmit} >Submit</button>
      </form>
    </li>
  );
}

export default PlantCard;
