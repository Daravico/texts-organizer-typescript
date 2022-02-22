import React, { useState } from "react";

import { SingleText } from "../interfaces/interfaces";

import { Button } from "react-bootstrap/";

interface cardViewProps {
    selectedText: SingleText;
    setSelectedText: (text: SingleText) => void

    textsListFiltered: SingleText[];
    setTextsListFiltered: (texts: SingleText[]) => void

    editableText: string;
    setEditableText: (editText: string) => void

    editState: boolean;
    setEditState: (edit: boolean) => void

    preDelete: boolean;
    setPreDelete: (deleteState: boolean) => void
}

// ####################################################
// Tengo que traer la lista filtrada y la variable para set it
// ####################################################

const SingleCardView: React.FC<cardViewProps> = (
    { selectedText, setSelectedText, textsListFiltered, setTextsListFiltered, editableText, setEditableText, editState, setEditState, preDelete, setPreDelete }) => {

    // STATES THAT NEED TO BE PLACED ON A HIGER LEVEL
    // °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
    //const [editState, setEditState] = useState<boolean>(false);
    //const [preDelete, setPreDelete] = useState<boolean>(false);
    // °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°

    const [titleOnEdition, setTitleOnEdition] = useState<string>(selectedText.title);
    const [categoryOnEdition, setCategoryOnEdition] = useState<string>(selectedText.category);
    const [textOnEdition, setTextOnEdition] = useState<string>(selectedText.text);


    // Functions after confirming the edition of the selected Text.
    const editionConfirmation = () => {
        setEditState(false);

        const postEditedList: SingleText[] = textsListFiltered.filter((text) => {

            if (text.id === selectedText.id) {
                text.title = titleOnEdition;
                text.category = categoryOnEdition;
                text.text = textOnEdition;
            }

            return text;
        });

        setTextsListFiltered(postEditedList);

    };

    const deletionProcess = () => {
        setPreDelete(false);
        setEditState(false);
    };

    return (
        <div className="card-view">

            {!editState ? (
                <div>
                    <h1 className="selected-title">{selectedText.title}</h1>
                    <h2 className="selected-category">{selectedText.category}</h2>
                    <h3 className="selected-text">{editableText}</h3>
                </div>

            ) : (

                <div>
                    <input defaultValue={titleOnEdition} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setTitleOnEdition(e.target.value);
                    }} />
                    <input defaultValue={categoryOnEdition} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setCategoryOnEdition(e.target.value);
                    }} />
                    <br />
                    <textarea defaultValue={textOnEdition} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                        setTextOnEdition(e.target.value);
                    }} />
                    <br />
                    <Button variant="success" onClick={editionConfirmation}> CONFIRM EDITION </Button>
                </div>
            )}


            {editState ? (
                <Button variant="secondary"
                    onClick={() => {
                        setEditState(false);
                        setPreDelete(false);
                        setTitleOnEdition(selectedText.title);
                        setCategoryOnEdition(selectedText.category);
                        setTextOnEdition(selectedText.text);
                    }}
                >
                    {" "}
                    Cancel edition{" "}
                </Button>
            ) : (
                <Button
                    onClick={() => {
                        setEditState(true);
                        setPreDelete(false);
                    }}
                >
                    {" "}
                    NOT EDITING{" "}
                </Button>
            )}



            {preDelete ? (
                <Button variant="danger" onClick={deletionProcess}> Sure? </Button>
            ) : (
                <Button variant="warning"
                    onClick={() => {
                        setPreDelete(true);
                        setEditState(false);
                    }}
                >
                    Delete
                </Button>
            )}

            {!editState && !preDelete ? <Button variant="info"> Clipboard </Button> : null}
        </div>
    );
};

export default SingleCardView;
