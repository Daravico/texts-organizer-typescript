import React, { Fragment, useState } from "react";

import { SingleText, FormElement } from "../interfaces/interfaces";

import { Form, Button, Row, Col } from "react-bootstrap";

import { v4 as uuidv4 } from 'uuid';


interface NewTextFormProps {
    addingText: (addedText: SingleText) => void;
}

const NewTextForm: React.FC<NewTextFormProps> = ({ addingText }) => {
    
    // State Hooks for each of the inputs that we have.
    const [title, setTitle] = useState<string>("");
    const [text, setText] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [tagsLine, setTagsLine] = useState<string>("");


    // Saving the information of the text.
    const handleSubmit = (e: FormElement) => {
        e.preventDefault();

        // < CODE NOT IMPLEMENTED >
        //tagsLine needs to be converted here to an array.
        const tags: string[] = [tagsLine];
        // < CODE NOT IMPLEMENTED >

        if (title !== "" && text !== "" && category !== "") {

            // ID for unique identifier.
            const newID: string = uuidv4();

            // Saving the information on the form to a new variable (:SingleText).
            const newText: SingleText = {
                title: title,
                text: text,
                category: category,
                tags: tags,
                id: newID
            };

            // Clearing the Form.
            setTitle("");
            setText("");
            setCategory("");


            

            // Prop function to add the text to the list.
            addingText(newText);
        } else {
            console.log("Something's empty");
        }
    };

    return (
        <Fragment>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Form.Label column lg={2}>
                        Title
                    </Form.Label>
                    <Col lg={3}>
                        <Form.Control
                            value={title}
                            placeholder="Title"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setTitle(e.target.value);
                            }}
                        />
                    </Col>
                </Row>

                <Row>
                    <Form.Label column lg={2}>
                        Category
                    </Form.Label>
                    <Col lg={3}>
                        <Form.Control
                            value={category}
                            placeholder="Category"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setCategory(e.target.value);
                            }}
                        />
                    </Col>
                </Row>

                <Row>
                    <Form.Label column lg={2}>
                        Text
                    </Form.Label>
                    <Col lg={3}>
                        <Form.Control
                            as="textarea"
                            value={text}
                            placeholder="Text"
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                                setText(e.target.value);
                            }}
                        />
                    </Col>
                </Row>

                <Row>
                    <Form.Label column lg={2}>
                        Tags
                    </Form.Label>
                    <Col lg={3}>
                        <Form.Control
                            value={tagsLine}
                            placeholder="Tags (Not valid)"
                            disabled
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setTagsLine(e.target.value);
                            }}
                        />
                    </Col>
                </Row>

                <Col>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Col>
            </Form>
        </Fragment>
    );
};

export default NewTextForm;
