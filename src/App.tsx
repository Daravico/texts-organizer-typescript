import React, { Fragment } from 'react';

import './App.css';

// React Components 
import NewTextForm from './components/newTextForm';
import TextsViewer from './components/TextsViewer';

// Interfaces
import {SingleText} from './interfaces/interfaces';



const App = (): JSX.Element => {


  const funcionx = (num: number) => {
    console.log("hola");
    console.log(num)

  }



  return (
    <Fragment>
      <NewTextForm functionx={funcionx}/>
      <TextsViewer />
    </Fragment>
  );
}

export default App;
