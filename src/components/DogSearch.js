import React from 'react'

function DogSearch({searchDogs, setSearchDogs}) {
    return(
        <>
            <lable>Search for a pup</lable>
            <br/>
            <input
            type="text"
            value={searchDogs}
            onChange= {(e) => setSearchDogs(e.target.value)}/>
        </>
    )

}

export default DogSearch