import React from "react";

// Interfaces
import { SingleText } from "../interfaces/interfaces";


interface SearchBarProps {
    textsList: SingleText[],
    setTextsListFiltered: (texts: SingleText[]) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ textsList, setTextsListFiltered }) => {


    // Query that filters the texts list depending on the value on the search bar changes.
    const queryFilter = () => {
        
        /*
            Note: not using states since the delay is not helping on the update being made on time.
            CONSIDERING THE USAGE OF UseRef, looking at doc
        */

        // Getting by ID the value of the Select Box.
        const querySelectBox: string = (document.getElementById("searchTypeSelect") as HTMLSelectElement).value;

        // Query provided in the Search Bar.
        const queryProvided: string = (document.getElementById("search-bar-text") as HTMLInputElement).value;
        
        


        // When the search bar is empty.
        if (queryProvided === '') {
            setTextsListFiltered(textsList);
        }

        // Search bar with a character. Right now it works only with title <<TO ADD: SELECTION BETWEEN TITLE, CATEGORY, TAGS* AND MIXED>>
        else {
            const filterAplied: SingleText[] = textsList.filter((text) => {

                // To lower cases to simplify the search.
                const queryLower: string = queryProvided.toLowerCase();


                const titleLower: string = text.title.toLowerCase();
                const categoryLower: string = text.category.toLowerCase();
                const textLower: string = text.text.toLowerCase();

                if (querySelectBox === 'Title')
                    return titleLower.includes(queryLower);
                if (querySelectBox === 'Category')
                    return categoryLower.includes(queryLower);
                if (querySelectBox === 'Text')
                    return textLower.includes(queryLower);

                else 
                    return titleLower.includes(queryLower) || categoryLower.includes(queryLower) || textLower.includes(queryLower);
            });

            // Setting the state with the applied filter.
            setTextsListFiltered(filterAplied);
        }

    }


    return (
        <div>
            <select name="searchTypeSelect" id="searchTypeSelect" onChange={queryFilter}>
                <option>All</option>
                <option>Title</option>
                <option>Text</option>
                <option>Category</option>

            </select>

            <input placeholder="Search" id="search-bar-text" onChange={queryFilter} />
        </div>
    )

}

export default SearchBar;