import React from "react"

import { SingleText } from "../interfaces/interfaces"



interface cardViewProps {
    selectedText: SingleText
}

const SingleCardView: React.FC<cardViewProps> = ({selectedText}) => {

    return(
        <div className="card-view">
            <h1>{selectedText.title}</h1>
            <h2>{selectedText.text}</h2>
            <h2>{selectedText.category}</h2>
            
        </div>
    )
}

export default SingleCardView;