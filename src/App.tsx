import React, { Fragment, useState } from "react";

// React Components
import NewTextForm from "./components/newTextForm";
import TextsViewer from "./components/TextsViewer";

// Interfaces
import { SingleText } from "./interfaces/interfaces";

// Sample
import texts from "./samples/texts";

const App = (): JSX.Element => {

  const [textsList, setTextList] = useState<SingleText[]>(texts);

  // NewTextForm Functions.
  // -----------------------------------------------

  const addingText = (addedText: SingleText) => {

    const newTextList: SingleText[] = [...textsList, addedText];
    setTextList(newTextList);
  };

  
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
