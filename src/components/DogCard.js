import React from 'react'

function DogCard({item,dogs,setDogs}) {
    
    const handleClick =() => {
// UPDATE REQUEST

fetch(`http://localhost:8000/Dogs/${item.id}`, {
  method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        ...item,
        adopted: !item.adopted
    }),
  })
    // .then(res => res.json())
    // .then(data => console.log(data));

// UPDATE THE DOG ARRAY WITH THE NEW UPDATED DOG
       let updatedDogArray = dogs.map(dog=>{

        if(item.id === dog.id){
            dog.adopted = !item.adopted
        }
        return dog
       })

       setDogs(updatedDogArray)
    }
    // 


    return(
    <div className="dogCards">
        <h3>{item.name}</h3>
        <img className="images" src={item.image} alt={item.name}/>
        <p>Breed: {item.breed}</p>
        <p>Sex: {item.sex}</p>
        <button className="dogCardButton" onClick={handleClick}>{item.adopted ? "Already Adopted" : "Adopt"}</button>
        {/* need to link to search somehow pablo is the goat(;*/}
    </div>
    )

}

export default DogCard