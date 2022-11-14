import React from 'react';
import DogContainer from './DogContainer';
import DogForm from './DogForm';
import DogSearch from './DogSearch';
import About from './About';

function App() {
  return (
    <>
      <h1> hello!</h1>
      <DogContainer/>
      <DogSearch />
      <DogForm/>
      <About/>
    </>
  );
}

export default App;
