import React from "react"

import { SingleText } from "../interfaces/interfaces"

import Card from 'react-bootstrap/Card'



interface cardViewProps {
    selectedText: SingleText
}

const SingleCardView: React.FC<cardViewProps> = ({selectedText}) => {

    return(
        <Card className="card-view" style={{ width: '18rem' }}>
            <Card.Title>{selectedText.title}</Card.Title>
            <Card.Subtitle>{selectedText.category}</Card.Subtitle>
            <Card.Body>{selectedText.text}</Card.Body>
            
            
        </Card>
    )
}

export default SingleCardView;