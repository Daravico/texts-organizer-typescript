import React from "react";

// Interfaces
import { SingleText } from "../interfaces/interfaces";

// Local interface for PROPS
interface SingleTitleViewProps {
    textInfo: SingleText;
    indexTitle: number;
    textViewVisible: boolean;
    setTextViewVisible: (state: boolean) => void;
    setSelectedText: (text: SingleText) => void;
    indexOnView: number;
    setIndexOnView: (index: number) => void;
}

const SingleTitleView: React.FC<SingleTitleViewProps> = ({
    textInfo,
    indexTitle,
    textViewVisible,
    setTextViewVisible,
    setSelectedText,
    indexOnView,
    setIndexOnView,
}) => {

    const selectedTextView = () => {

        if (indexOnView === indexTitle || !textViewVisible) {
            setTextViewVisible(!textViewVisible);
        }
        setIndexOnView(indexTitle);
        setSelectedText(textInfo);
    };

    return (
        <div>
            <h1>{textInfo.title}</h1>
            {indexOnView === indexTitle && textViewVisible ? <button onClick={selectedTextView}>Close</button> :  <button onClick={selectedTextView}>Open</button> }
        </div>
    );
};

export default SingleTitleView;
