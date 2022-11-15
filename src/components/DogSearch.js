import React from 'react'

function DogSearch({searchDogs, setSearchDogs}) {
    return(
        <>
            <h3>Search for a pup</h3>
            <br/>
            <input
            type="text"
            value={searchDogs}
            onChange= {(e) => setSearchDogs(e.target.value)}/>
        </>
    )

}

export default DogSearch