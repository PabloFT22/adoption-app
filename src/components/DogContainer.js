import React from 'react'
import DogCard from './DogCard'

function DogContainer({dogs}) {


    const dogList = dogs.map((dogObj,i) =>(
            <DogCard key={i} item={dogObj}/>
    ))


    return (
    <div className='DogContainer'>
        {dogList}
    </div>
    )

}

export default DogContainer