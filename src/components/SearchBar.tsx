import React, { useRef } from "react";

// Interfaces
import { SingleText } from "../interfaces/interfaces";


interface SearchBarProps {
    textsList: SingleText[],
    setTextsListFiltered: (texts: SingleText[]) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ textsList, setTextsListFiltered }) => {

    /* 
        Remineder Note: 
        Reference explicitly declared that this goes to an input HTML Element
        to prevent type of <string | undefined>. Alternative to this is
        geting the element by the ID on the method "queryFilter".
    */

    const selectBoxRef = useRef<HTMLSelectElement | null>(null);
    const searchBarRef = useRef(document.createElement("input"));


    // Query that filters the texts list depending on the value on the search bar changes.
    const queryFilter = () => {

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
                const textLower: string = text.text.toLowerCase();

                if (selectBoxRef.current?.value === 'Title')
                    return titleLower.includes(queryLower);

                if (selectBoxRef.current?.value === 'Text')
                    return textLower.includes(queryLower);

                else 
                    return titleLower.includes(queryLower) || textLower.includes(queryLower);
            });

            // Setting the state with the applied filter.
            setTextsListFiltered(filterAplied);
        }

    }


    return (
        <div>
            <select name="searchTypeSelect" id="searchTypeSelect" ref={selectBoxRef as React.RefObject<HTMLSelectElement>} onChange={queryFilter}>
                <option>Title</option>
                <option>Text</option>

            </select>

            <input placeholder="Search" id="search-bar-text" ref={searchBarRef as React.RefObject<HTMLInputElement>} onChange={queryFilter} />
        </div>
    )

}

export default SearchBar;