import React, {useState} from 'react'

function DogCard({item}) {
    
    const [adopted, setAdopted] = useState(true)

    const handleClick =() => {
        setAdopted(!adopted)
    }

    return(
    <div className="dogCards">
        <h3>{item.name}</h3>
        <img className="images" src={item.image} alt={item.name}/>
        <p>Breed: {item.breed}</p>
        <p>Sex: {item.sex}</p>
        <button onClick={handleClick}>{adopted ? "Adopt" : "Already Adopted"}</button>
        {/* need to link to search somehow */}
    </div>
    )

}

export default DogCard