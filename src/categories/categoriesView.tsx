import React from "react";

import { SingleText } from "../interfaces/interfaces";

// Local interface for PROPS
interface CategoriesProps {
    textsList: SingleText[];
}

const CategoriesView: React.FC<CategoriesProps> = ({textsList}) => {

    return(
        <div>
            Hola
        </div>
    )

}


export default CategoriesView;