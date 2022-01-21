import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//CSS.
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


// React Components
import HomeView from "./components/HomeView";
import NewTextForm from "./components/newTextForm";
import ListContainer from "./components/ListContainer";
import TopNav from "./components/TopNav";

// New Components.
import CategoriesView from "./categories/categoriesView";

// Custom Hooks.
import { useLocalStorage } from "./custom/useLocalStorage";

// Interfaces
import { SingleText } from "./interfaces/interfaces";

// Samples for testings
import texts from "./samples/textsJson.json";


const App = (): JSX.Element => {

  const [textsList, setTextList] = useLocalStorage<SingleText[]>("textsList", []);


  // NewTextForm Functions.
  // -----------------------------------------------

  const addingText = (addedText: SingleText) => {

    const newTextList: SingleText[] = [...textsList, addedText];
    setTextList(newTextList);
  }


  // Clear the information. Needs to refresh the site.
  const clearValues = () => {
    window.localStorage.clear()
    window.location.reload()
  }

  const setValues = () => {
    window.localStorage.setItem("textsList", JSON.stringify(texts))
    window.location.reload()
  }



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
              <ListContainer textsList={textsList} />
            </Fragment>
          )}
        />


        <Route
          path="/new-work"
          render={() => (
          <Fragment>
            <CategoriesView textsList={textsList} />
          </Fragment>
          )}
        
        
        />

      </Switch>
    </Router>
  );
};

export default App;
