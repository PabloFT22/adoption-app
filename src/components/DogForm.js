import React, {useState} from 'react'

function DogForm({dogs, setDogs}) {
    const [nameInputValue, setNameInputValue] = useState('')
    const [imageInputValue, setImageInputValue] = useState('')
    const [breedInputValue, setBreedInputValue] = useState('')
    const [sexInputValue, setSexInputValue] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()

        let newDog ={
            name: nameInputValue,
            image: imageInputValue,
            breed: breedInputValue,
            sex: sexInputValue
        }
        fetch('http://localhost:8000/Dogs',{
            method: 'POST',
            headers: {'content-type': 'application/json'}, 
            body:JSON.stringify(newDog)//where pablo and I left off(:
        })
        .then (response => response.json())
        .then (data => setDogs([...dogs, data]))
    }


    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={e => {setNameInputValue(e.target.value)}} value={nameInputValue} placeholder="name" type="text"/>
                <input onChange={e => {setImageInputValue(e.target.value)}} value={imageInputValue} placeholder="image" type="text"/>
                <input onChange={e => {setBreedInputValue(e.target.value)}} value={breedInputValue} placeholder="breed" type="text"/>
                <input onChange={e => {setSexInputValue(e.target.value)}} value={sexInputValue} placeholder="sex" type="text"/>
                <button>Add Pup</button>
            </form>
        </div>
    )

}

export default DogForm