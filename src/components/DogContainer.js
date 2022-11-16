import React from 'react'
import DogCard from './DogCard'

function DogContainer({dogs,setDogs, setAdopted, adopted}) {

    // const handleClick =() => {
    // setAdopted(!adopted)
    // }

    const dogList = dogs.map((dogObj,i) =>(
            <DogCard setDogs={setDogs} dogs={dogs}  setAdopted={setAdopted} adopted={adopted} key={i} item={dogObj}/>
    ))


    return (
    <div className='DogContainer'>
        {dogList}
    </div>
    )

}

export default DogContainer