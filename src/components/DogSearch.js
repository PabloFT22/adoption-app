import React from 'react'

function DogSearch({searchDogs, setSearchDogs}) {
    return(
        <div>
            <h3 className="searchBar">Search for a pup</h3>
            <input
            className="searchBar"
            type="text"
            value={searchDogs}
            onChange= {(e) => setSearchDogs(e.target.value)}/>
        </div>
    )

}

export default DogSearch