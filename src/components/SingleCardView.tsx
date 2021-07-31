import React from "react"

import { SingleText } from "../interfaces/interfaces"

import { Card, Button } from 'react-bootstrap/'



interface cardViewProps {
    selectedText: SingleText
}

const SingleCardView: React.FC<cardViewProps> = ({selectedText}) => {

    return(
        <Card className="card-view" >
            <Card.Title className="selected-title">{selectedText.title}</Card.Title>
            <Card.Subtitle className="selected-category">{selectedText.category}</Card.Subtitle>
            <Card.Body className="selected-text">{selectedText.text}</Card.Body>

        <Button> Edit </Button>
        <Button> Delete </Button>
        <Button> Clipboard </Button>

        </Card>
    )
}

export default SingleCardView;