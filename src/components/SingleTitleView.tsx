import React from "react";

// Interfaces
import { SingleText } from "../interfaces/interfaces";

// Local interface for PROPS
interface SingleTitleViewProps {
    textInfo: SingleText;
    textViewVisible: boolean;
    setTextViewVisible: (state: boolean) => void;
    selectedText: SingleText;
    setSelectedText: (text: SingleText) => void;
}

const SingleTitleView: React.FC<SingleTitleViewProps> = ({
    textInfo,
    textViewVisible,
    setTextViewVisible,
    selectedText,
    setSelectedText,
}) => {

    const selectedTextView = () => {

        // Only if the selected Text if different than the first one (Only when initialized)
        // Or when the selected Text is the same that is being displayed.
        if (selectedText.id === textInfo.id || !textViewVisible) {
            setTextViewVisible(!textViewVisible);
        }
        setSelectedText(textInfo);
    };

    return (
        <div onClick={selectedTextView}>
            
            {selectedText.id === textInfo.id && textViewVisible ? <h3>{textInfo.title}</h3> : <h4>{textInfo.title}</h4>}
            
        </div>
    );
};

export default SingleTitleView;


// <h4>{textInfo.title}</h4>
// {selectedText.id === textInfo.id && textViewVisible ? <button onClick={selectedTextView}>Close</button> : <button onClick={selectedTextView}>Open</button>}