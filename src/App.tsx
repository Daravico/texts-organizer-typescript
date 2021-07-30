import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// React Components
import HomeView from "./components/HomeView";
import NewTextForm from "./components/newTextForm";
import TextsViewer from "./components/TextsViewer";
import TopNav from "./components/TopNav";

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

  const [textsList, setTextList] = useLocalStorage<SingleText[]>("textsList", []);

  //const [listPrueba, setListPrueba] = useLocalStorage("prueba", []);


  // NewTextForm Functions.
  // -----------------------------------------------

  const addingText = (addedText: SingleText) => {

    const newTextList: SingleText[] = [...textsList, addedText];
    setTextList(newTextList);

    //const prueba:string[] = [...listPrueba, addedText.title];
    //setListPrueba(prueba);

  };




  // Clear the information. Needs to refresh the site.
  const button = () =>{
    //console.log(listPrueba)
    window.localStorage.clear()
  }


  return (
    <Router>

      <button onClick={button}>CLEAR</button>

      <TopNav/>

      <Switch>

      <Route
          path="/"
          exact
          render={() => (
            <Fragment>
              <HomeView />
            </Fragment>
          )}
        />

        <Route
          path="/new"
          render={() => (
            <Fragment>
              <NewTextForm addingText={addingText} />
            </Fragment>
          )}
        />

        <Route
          path="/list"
          render={() => (
            <Fragment>
              <TextsViewer textsList={textsList} />
            </Fragment>
          )}
        />

      </Switch>
    </Router>
  );
};

export default App;
