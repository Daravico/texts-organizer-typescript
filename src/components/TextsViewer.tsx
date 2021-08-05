import React, { useState } from "react";

// Interfaces
import { SingleText } from "../interfaces/interfaces";

// React Components.
import SearchBar from "./SearchBar";
import SingleTitleView from "./SingleTitleView";
import SingleCardView from "./SingleCardView";


import { Card, CardGroup } from 'react-bootstrap';



// Local interface for PROPS
interface ViewerProps {
    textsList: SingleText[];
}


const TextsViewer: React.FC<ViewerProps> = ({ textsList }) => {

    const [textViewVisible, setTextViewVisible] = useState<boolean>(false);
    const [selectedText, setSelectedText] = useState<SingleText>(textsList[0])
    const [textsListFiltered, setTextsListFiltered] = useState<SingleText[]>(textsList);



    return (
        <CardGroup>

            <Card className="list-container">
                
                
                <SearchBar textsList={textsList} setTextsListFiltered={setTextsListFiltered} />


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
            </Card>

            <Card className="single-text">

                {textViewVisible ? <SingleCardView selectedText={selectedText} /> : null}
            </Card>

        </CardGroup>
    );
};

export default TextsViewer;
