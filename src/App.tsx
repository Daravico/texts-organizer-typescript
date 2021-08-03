import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//CSS.
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


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
import texts from "./samples/textsJson.json";


const App = (): JSX.Element => {

  const [textsList, setTextList] = useLocalStorage<SingleText[]>("textsList", []);

  //const [listPrueba, setListPrueba] = useLocalStorage("prueba", []);


  // NewTextForm Functions.
  // -----------------------------------------------

  const addingText = (addedText: SingleText) => {

    const newTextList: SingleText[] = [...textsList, addedText];
    setTextList(newTextList);
  }


  // Clear the information. Needs to refresh the site.
  const clearValues = () => {
    window.localStorage.clear()
  }

  const setValues = () => {
    window.localStorage.setItem("textsList", JSON.stringify(texts))
  }

  /*
  const include = () => {
    texts.filter((post) => {
      const postName = post.title.toLocaleLowerCase()
      console.log(postName)
      console.log(postName.includes("a"));
    });

     <button onClick={include}> LOL ? </button>
  }*/


  return (
    <Router>

      <button onClick={clearValues}>CLEAR</button>
      <button onClick={setValues}>SET</button>
     

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
