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


// -------------------------------------------------------------------------------------------------------------------------------------------------
    // QUERY FILTERING DEPENDING ON THE SEARCH BAR.
    // The Method to filter depending on the query should be here to re-render on different situations:
    // On changes made on the Search Bar, edditing of the selected text or deletion of this.
/*
     // Query that filters the texts list depending on the value on the search bar changes.
     const queryFilter = (selectBoxRef: React.MutableRefObject<HTMLSelectElement | null>, searchBarRef: React.MutableRefObject<HTMLInputElement>) => {

        // When the search bar is empty.
        if (searchBarRef.current?.value === '') {
            setTextsListFiltered(textsList);
        }

        // Search bar with a character. Right now it works only with title <<TO ADD: SELECTION BETWEEN TITLE, CATEGORY, TAGS* AND MIXED>>
        else {
            const filterAplied: SingleText[] = textsList.filter((text) => {

                // To lower cases to simplify the search.
                const queryLower: string = searchBarRef.current.value.toLowerCase();

                const titleLower: string = text.title.toLowerCase();
                const categoryLower: string = text.category.toLowerCase();
                const textLower: string = text.text.toLowerCase();

                if (selectBoxRef.current?.value === 'Title')
                    return titleLower.includes(queryLower);
                if (selectBoxRef.current?.value === 'Category')
                    return categoryLower.includes(queryLower);
                if (selectBoxRef.current?.value === 'Text')
                    return textLower.includes(queryLower);

                else 
                    return titleLower.includes(queryLower) || categoryLower.includes(queryLower) || textLower.includes(queryLower);
            });

            // Setting the state with the applied filter.
            setTextsListFiltered(filterAplied);
        }
    }
    */
// -------------------------------------------------------------------------------------------------------------------------------------------------


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
