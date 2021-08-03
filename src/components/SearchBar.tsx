import React from "react";

// Interfaces
import { SingleText } from "../interfaces/interfaces";


interface SearchBarProps{
    textsList: SingleText[],
    textsListFiltered: SingleText[],
    setTextsListFiltered: (texts:SingleText[]) => void
}

const SearchBar: React.FC<SearchBarProps> = ({textsList,textsListFiltered, setTextsListFiltered}) => {

    const queryFilter = (queryProviden: string) => {
        if (queryProviden === ''){
            setTextsListFiltered(textsList);
            console.log("nice")
        }
        else {
            const filterAplied: SingleText[] = textsList.filter((text) => {
                const queryLower: string = queryProviden.toLowerCase();
                const titleLower: string = text.title.toLowerCase();

                return titleLower.includes(queryLower);
            });

            console.log(filterAplied);

            setTextsListFiltered(filterAplied);
        }

    }


    return (
        <div>
            <select name="cars" id="cars">
                <option>Title</option>
                <option>Text</option>
                <option>Category</option>
                <option>All</option>
            </select>

            <input placeholder="Search" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                queryFilter(e.target.value)
            }} />
        </div>
    )

}

export default SearchBar;