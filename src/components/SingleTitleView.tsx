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
        <div>
            <h1>{textInfo.title}</h1>
            {selectedText.id === textInfo.id && textViewVisible ? <button onClick={selectedTextView}>Close</button> : <button onClick={selectedTextView}>Open</button>}
        </div>
    );
};

export default SingleTitleView;
