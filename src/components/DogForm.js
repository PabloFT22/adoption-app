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
        fetch('http://localhost:8001/Dogs',{
            method: 'POST',
            headers: {'content-type': 'application/json'}, 
            body:JSON.stringify(newDog)
        })
        .then (response => response.json())
        .then (data => setDogs([...dogs, data]))
        
        setNameInputValue('')
        setImageInputValue('')
        setBreedInputValue('')
        setSexInputValue('')
    }

    return (
        <div>
            <h3 className="formDirection"> Report A Lost Dog</h3>
            <form id="form" onSubmit={handleSubmit}>
                <input className="formTxtArea" onChange={e => {setNameInputValue(e.target.value)}} value={nameInputValue} placeholder="name" type="text"/>
                <br/>
                <input className="formTxtArea" onChange={e => {setImageInputValue(e.target.value)}} value={imageInputValue} placeholder="image" type="text"/>
                <br/>
                <input className="formTxtArea" onChange={e => {setBreedInputValue(e.target.value)}} value={breedInputValue} placeholder="breed" type="text"/>
                <br/>
                <input className="formTxtArea" onChange={e => {setSexInputValue(e.target.value)}} value={sexInputValue} placeholder="sex" type="text"/>
                <br/>
                <button id="formBtn" >Add Pup</button>
            </form>
        </div>
    )

}

export default DogForm