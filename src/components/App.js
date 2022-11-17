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

const [searchDogs, setSearchDogs] = useState('')
const filteredArray = dogs.filter((eachDog)=>{
  return(
    eachDog.name.toLowerCase().includes(searchDogs.toLowerCase()) ||
    eachDog.breed.toLowerCase().includes(searchDogs.toLowerCase())
  )
})

  return (
    <>
      <Switch>
          
          <Route exact path='/'>
            <div className="top-page">
                <h1 style= {{position:"absolute; top:30px"}}> Let's Be Friends Fur-Ever!</h1>
                <h3 className="subheader">Stop and Paw-nder The Meaning Of Life</h3>
            </div><br/>
            <Nav />
                <About/>
          </Route>
          
          <Route path='/lostdog'>
              <div className="top-page">
                <h1 style= {{position:"absolute; top:30px"}}> Let's Be Friends Fur-Ever!</h1>
                <h3 className="subheader">Stop and Paw-nder The Meaning Of Life</h3>
              </div><br/>
                <Nav />
                <DogForm dogs={dogs} setDogs={setDogs}/>
          </Route>
          
          <Route path='/dogcontainer'>
            <div className="top-page">
              <h1 style= {{position:"absolute; top:30px"}}> Let's Be Friends Fur-Ever!</h1>
              <h3 className="subheader">Stop and Paw-nder The Meaning Of Life</h3>
            </div><br/>
              <Nav />
            <DogSearch searchDogs={searchDogs} setSearchDogs={setSearchDogs}/>
            <br/>
            <DogContainer setDogs={setDogs}  dogs={filteredArray}/>
          </Route> 
          
          <Route path='*'>
            <iframe
            className="rickRolled"
            width="919"
            height="525"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
            frameBorder="0"
            allowFullScreen
            title="Get Rick-Rolled"
            />
          </Route>   
      
      </Switch>
    </>
  );
}

export default App;
