import React, { useState } from "react";

// Interfaces
import { SingleText } from "../interfaces/interfaces";

// React Components.
import SearchBar from "./SearchBar";
import SingleTitleView from "./SingleTitleView";
import SingleCardView from "./SingleCardView";

// Bootstrap imports.
import { Card, ListGroup } from 'react-bootstrap';



// Local interface for PROPS
interface textsViewerProps {
    textsList: SingleText[];
}


const ListContainer: React.FC<textsViewerProps> = ({ textsList }) => {

    // TextViewVisible is active when a text is selected.
    // selectedText gathers the information on the selected text.
    // textsListFiltered is the actual displayed texts titles that ar already filtered by the Search Bar.
    const [textViewVisible, setTextViewVisible] = useState<boolean>(false);
    const [selectedText, setSelectedText] = useState<SingleText>(textsList[0]);
    const [textsListFiltered, setTextsListFiltered] = useState<SingleText[]>(textsList);
    
    const [editableText, setEditableText] = useState<string>('');
    const [userName, setUserName] = useState<string>('');

    
    
    const [editState, setEditState] = useState<boolean>(false);
    const [preDelete, setPreDelete] = useState<boolean>(false);


    return (
        <div id="wrapper_texts">
            
            <SearchBar textsList={textsList} setTextsListFiltered={setTextsListFiltered} />

            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setUserName(e.target.value);
                if(e.target.value !== ''){
                    setEditableText(selectedText.text.replace('_username_', e.target.value));
                }
                else{
                    setEditableText(selectedText.text);
                }                
            }} />

            <ListGroup id="list-container">

                {textsListFiltered.map((textInfo: SingleText, index: number) => {
                    return (
                        <SingleTitleView
                            textInfo={textInfo}
                            key={index}
                            textViewVisible={textViewVisible}
                            setTextViewVisible={setTextViewVisible}
                            selectedText={selectedText}
                            setSelectedText={setSelectedText}
                            setEditableText={setEditableText}
                            userName={userName}
                        />
                    );
                })}

            </ListGroup>

            <Card id="single-text">

                {textViewVisible ? <SingleCardView
                    selectedText={selectedText}
                    setSelectedText={setSelectedText}
                    textsListFiltered={textsListFiltered}
                    setTextsListFiltered={setTextsListFiltered}
                    editableText={editableText}
                    setEditableText={setEditableText}
                    editState={editState}
                    setEditState={setEditState}
                    preDelete={preDelete} 
                    setPreDelete={setPreDelete}
                /> : null}
            </Card>

        </div>
    );
};

export default ListContainer;
