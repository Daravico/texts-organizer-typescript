import React, { useState } from "react";


// Interfaces
import { SingleText } from "../interfaces/interfaces";

// React Components.
import SearchBar from "./SearchBar";
import SingleTitleView from "./SingleTitleView";
import SingleCardView from "./SingleCardView";

// Bootstrap imports.
import { Card, ListGroup } from 'react-bootstrap';



// Local interface for PROPS
interface ViewerProps {
    textsList: SingleText[];
}


const TextsViewer: React.FC<ViewerProps> = ({ textsList }) => {

    // TextViewVisible is active when a text is selected.
    // selectedText gathers the information on the selected text.
    // textsListFiltered is the actual displayed texts titles that ar already filtered by the Search Bar.
    const [textViewVisible, setTextViewVisible] = useState<boolean>(false);
    const [selectedText, setSelectedText] = useState<SingleText>(textsList[0])
    const [textsListFiltered, setTextsListFiltered] = useState<SingleText[]>(textsList);



    return (
        <div>
            
            <SearchBar textsList={textsList} setTextsListFiltered={setTextsListFiltered} />

            <ListGroup id="list-container">

                {textsListFiltered.map((textInfo: SingleText, index: number) => {
                    return (
                        <SingleTitleView
                            textInfo={textInfo}
                            key={index}
                            textViewVisible={textViewVisible}
                            setTextViewVisible={setTextViewVisible}
                            selectedText={selectedText}
                            setSelectedText={setSelectedText}
                        />
                    );
                })}


            </ListGroup>

            <Card className="single-text">

                {textViewVisible ? <SingleCardView
                    selectedText={selectedText}
                    textsListFiltered={textsListFiltered}
                    setTextsListFiltered={setTextsListFiltered} /> : null}
            </Card>

        </div>
    );
};

export default TextsViewer;
