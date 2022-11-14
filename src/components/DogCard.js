import React from 'react'

function DogCard({item}) {
    

    return(
    <div>
        <h3>{item.name}</h3>
        <img className="images" src={item.image} alt={item.name}/>
        <p>Breed: {item.breed}</p>
        <p>Sex: {item.sex}</p>
    </div>
    )

}

export default DogCard