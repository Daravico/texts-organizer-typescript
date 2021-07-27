import React, { Fragment, useState } from "react";

import "./App.css";

// React Components
import NewTextForm from "./components/newTextForm";
import TextsViewer from "./components/TextsViewer";

// Interfaces
import { SingleText } from "./interfaces/interfaces";

const App = (): JSX.Element => {

  const [textList, setTextList] = useState<SingleText[]>([]);

  // NewTextForm Functions.
  // -----------------------------------------------

  const addingText = (addedText: SingleText) => {
    console.log(addedText);
    console.log("Sip")
  };

  const funcionx = (num: number) => {
    console.log("hola");
    console.log(num);
  };
  // -----------------------------------------------

  // TextsViewer Functions.
  // -----------------------------------------------

  // -----------------------------------------------

  return (
    <Fragment>
      <NewTextForm addingText={addingText} functionx={funcionx} />
      <TextsViewer />
    </Fragment>
  );
};

export default App;
