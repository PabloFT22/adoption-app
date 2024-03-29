import React from 'react'

function DogCard({item,dogs,setDogs}) {
    
    const handleClick =() => {

fetch(`http://localhost:8001/Dogs/${item.id}`, {
  method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        ...item,
        adopted: !item.adopted
    }),
  })

       let updatedDogArray = dogs.map(dog=>{

        if(item.id === dog.id){
            dog.adopted = !item.adopted
        }
        return dog
       })

       setDogs(updatedDogArray)
    }

    return(
    <div className="dogCards">
        <h3>{item.name}</h3>
        <img className="images" src={item.image} alt={item.name}/>
        <p>Breed: {item.breed}</p>
        <p>Sex: {item.sex}</p>
        <button className="dogCardButton" onClick={handleClick}>{item.adopted ? "Already Adopted" : "Adopt"}</button>
    </div>
    )
}

export default DogCard