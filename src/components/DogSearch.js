import React from 'react'

function DogSearch({searchDogs, setSearchDogs}) {
    return(
        <div>
            <h3>Search for a pup</h3>
            <br/>
            <input
            id="searchBar"
            type="text"
            value={searchDogs}
            onChange= {(e) => setSearchDogs(e.target.value)}/>
        </div>
    )

}

export default DogSearch