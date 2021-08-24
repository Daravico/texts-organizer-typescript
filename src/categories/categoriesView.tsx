import React from "react";

import CreatableSelect from 'react-select/creatable';

import { SingleText } from "../interfaces/interfaces";



// Local interface for PROPS
interface CategoriesProps {
    textsList: SingleText[];
}

const CategoriesView: React.FC<CategoriesProps> = ({textsList}) => {

    return(
        <div>
            <CreatableSelect isClearable></CreatableSelect>
        </div>
    )

}


export default CategoriesView;