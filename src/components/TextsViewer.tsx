import React, { Fragment } from 'react';

import { SingleText } from "../interfaces/interfaces";


interface ViewerProps {
    textsList: SingleText[]
}


const TextsViewer: React.FC<ViewerProps> = ({ textsList }): JSX.Element => {

    return (
        <Fragment>
            {textsList.map((text: SingleText, index: number) => {
                return (
                    <h1 key={index}>{text.title}</h1>
                )
            })}
        </Fragment>
    );

}

export default TextsViewer;