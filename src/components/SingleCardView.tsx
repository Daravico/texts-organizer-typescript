import React, { useState, useEffect } from "react";

import { SingleText } from "../interfaces/interfaces";

import { Button } from "react-bootstrap/";

interface cardViewProps {
    selectedText: SingleText;
    setSelectedText: (text: SingleText) => void
    textsListFiltered: SingleText[];
    setTextsListFiltered: (texts: SingleText[]) => void
}

// ####################################################
// Tengo que traer la lista filtrada y la variable para set it
// ####################################################

const SingleCardView: React.FC<cardViewProps> = ({ selectedText, setSelectedText, textsListFiltered, setTextsListFiltered }) => {
    const [editState, setEditState] = useState<boolean>(false);
    const [preDelete, setPreDelete] = useState<boolean>(false);

    const [localText, setLocalText] = useState<string>(selectedText.text);


    const [titleOnEdition, setTitleOnEdition] = useState<string>(selectedText.title);
    const [categoryOnEdition, setCategoryOnEdition] = useState<string>(selectedText.category);
    const [textOnEdition, setTextOnEdition] = useState<string>(selectedText.text);


    function mountText() {
        var textFunct = localText.replace('_username_', 'Car');

        setLocalText(textFunct)

        return textFunct
    }
    // const [mounted, setMounted] = useState<boolean>(false);
    /*
    useEffect(() => {
        if (!mounted){
            // Local variable to make changes on the given _username_ and _agentname_
            const selectedTextChanges: string = selectedText.text.replace('_username_', 'Emily');
            selectedTextChanges.replace('_agentname_', 'David');

            // Local variable to update the previous changes on the names. 
            const selectedTextRepresentation: SingleText = {
                title: selectedText.title,
                category: selectedText.category,
                id: selectedText.id,
                text: selectedTextChanges
                }

            // Saving the changes to the actual Selected Text.
            setSelectedText(selectedTextRepresentation);
            setMounted(true);
        }
        
    })
    */


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
                    <h3 className="selected-text">{selectedText.text}</h3>
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
