import React from 'react';
import Form from './components/organisms/Form/Form';
import Card from './components/molecules/Card/Card';
import Rating from './components/atoms/Rating/Rating';
import Favorites from './components/atoms/Favorites/Favorites';

function App() {
  return (
    <>
      <Form />
      <Card />
      <Rating percentage={50}/>
      <Favorites/>
    </>
  );
}

export default App;
