import React from 'react'
import DogCard from './DogCard'

function DogContainer({dogs,setDogs}) {
    const dogList = dogs.map((dogObj,i) =>(
            <DogCard setDogs={setDogs} dogs={dogs} key={i} item={dogObj}/>
    ))
    return (
    <div className='DogContainer'>
        {dogList}
    </div>
    )
}

export default DogContainer