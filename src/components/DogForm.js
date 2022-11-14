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
    }


    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onCchange={e => {setNameInputValue(e.target.value)}} value={nameInputValue} placeHolder="name" type="text"/>
                <input onCchange={e => {setImageInputValue(e.target.value)}} value={imageInputValue} placeHolder="image" type="text"/>
                <input onCchange={e => {setBreedInputValue(e.target.value)}} value={breedInputValue} placeHolder="breed" type="text"/>
                <input onCchange={e => {setSexInputValue(e.target.value)}} value={sexInputValue} placeHolder="sex" type="text"/>
                <button>Add Pup</button>
            </form>
        </div>
    )

}

export default DogForm