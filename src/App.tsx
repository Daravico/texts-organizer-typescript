import React, { Fragment } from "react";

// React Components
import NewTextForm from "./components/newTextForm";
import TextsViewer from "./components/TextsViewer";

// Custom Hooks.
import { useLocalStorage } from "./custom/useLocalStorage";

// Interfaces
import { SingleText } from "./interfaces/interfaces";

// Samples for testings
//import texts from "./samples/texts";

//import textsJson from "./samples/textsJson.json"
//const pruebita: SingleText = textsJson
//console.log(pruebita)


const App = (): JSX.Element => {

  const [textsList, setTextList] = useLocalStorage<SingleText[]> ("textsList", []);

  //const [listPrueba, setListPrueba] = useLocalStorage("prueba", []);


  // NewTextForm Functions.
  // -----------------------------------------------

  const addingText = (addedText: SingleText) => {

    const newTextList: SingleText[] = [...textsList, addedText];
    setTextList(newTextList);

    //const prueba:string[] = [...listPrueba, addedText.title];
    //setListPrueba(prueba);

  };




  /*
  const button = () =>{
    console.log(listPrueba)
  }

  Add this to the return function:
      <button onClick={button}>click</button>
  */

  
  // -----------------------------------------------

  // TextsViewer Functions.
  // -----------------------------------------------

  // -----------------------------------------------

  return (
    <Fragment>
      <NewTextForm addingText={addingText} />
      <TextsViewer textsList={textsList}/>
    </Fragment>
  );
};

export default App;
