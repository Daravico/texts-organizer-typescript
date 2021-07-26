import React, { Fragment } from 'react';

import './App.css';

import NewMacroForm from './components/newMacroForm';
import MacrosViewer from './components/macrosViewer';





const App = (): JSX.Element => {


  const funcionx = (num: number) => {
    console.log("hola");
    console.log(num)

  }



  return (
    <Fragment>
      <NewMacroForm functionx={funcionx}/>
      <MacrosViewer />
    </Fragment>
  );
}

export default App;
