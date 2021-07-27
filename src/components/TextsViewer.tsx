import React, { Fragment } from 'react';

// Interfaces
import { SingleText } from "../interfaces/interfaces";

// React Components.
import SingleTextView from "./SingleTextView";

// Local interface for PROPS
interface ViewerProps {
    textsList: SingleText[]
}


const TextsViewer: React.FC<ViewerProps> = ({ textsList }) => {

    return (
        <Fragment>
            {textsList.map((textInfo: SingleText, index: number) => {
                return (
                    <SingleTextView textInfo={textInfo} key={index}/>
                )
            })}
        </Fragment>
    );

}

export default TextsViewer;