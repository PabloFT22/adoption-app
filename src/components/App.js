import React, {useState, useEffect} from 'react';
import DogContainer from './DogContainer';
import DogForm from './DogForm';
import DogSearch from './DogSearch';
import About from './About';
import {Switch, Route} from 'react-router-dom'
import Nav from './Nav'

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
    eachDog.name.toLowerCase().includes(searchDogs.toLowerCase()) ||
    eachDog.breed.toLowerCase().includes(searchDogs.toLowerCase())
  )
})










  return (
    <>
      <div className="top-page">
        <h1 style= {{position:"absolute; top:30px"}}> Let's Be Friends Fur-Ever!</h1>
        <h3 className="subheader">Stop and Paw-nder The Meaning Of Life</h3>
        <Nav />
      </div>
      <Switch>
        
          <Route exact path='/'>
            <About/>
          </Route>
         
          <Route path='/lostdog'>
            
            <DogForm dogs={dogs} setDogs={setDogs}/>
          </Route>
          
          <Route path='/dogcontainer'>
            <DogSearch searchDogs={searchDogs} setSearchDogs={setSearchDogs}/>
            <br/>
            <DogContainer setDogs={setDogs}  dogs={filteredArray}/>
          </Route> 
          
          <Route path='*'>
            <h2>RickRolled</h2>
          </Route>
          
      </Switch>
    </>
  );
}

export default App;
