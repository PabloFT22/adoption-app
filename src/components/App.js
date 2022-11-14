import React, {useState, useEffect} from 'react';
import DogContainer from './DogContainer';
import DogForm from './DogForm';
import DogSearch from './DogSearch';
import About from './About';

function App() {
  const [dogs, setDogs] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:8000/Dogs')
    .then((res) => (res.json()))
    .then(data => {
      setDogs(data);
    })
  },[]) 
  
  // console.log(dogs)

const [searchDogs, setSearchDogs] = useState('')
const filteredArray = dogs.filter((eachDog)=>{
  return(
    eachDog.name.toLowerCase().includes(searchDogs.toLowerCase())
  )
})




  return (
    <>
      <h1> hello!</h1>
      <DogForm dogs={dogs} setDogs={setDogs}/>
      <DogSearch searchDogs={searchDogs} setSearchDogs={setSearchDogs}/>
      <DogContainer dogs={filteredArray}/>
      
      <About/>
    </>
  );
}

export default App;
