import React, { Fragment } from 'react';

import './App.css';

import NewMacroForm from './components/newMacroForm';
import MacrosViewer from './components/macrosViewer';



const App = (): JSX.Element => {






  return (
    <Fragment>
      <NewMacroForm />
      <MacrosViewer />
    </Fragment>
  );
}

export default App;
