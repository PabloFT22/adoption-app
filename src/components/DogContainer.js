import React from 'react'
import DogCard from './DogCard'

function DogContainer({dogs}) {


    const dogList = dogs.map((dogObj) =>{
        return(
            <DogCard key={dogObj.id} item={dogObj}/>
        )
    })


    return (
    <>
        {dogList}
    </>
    )

}

export default DogContainer