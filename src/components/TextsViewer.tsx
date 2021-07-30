import React, { Fragment, useState } from "react";

// Interfaces
import { SingleText } from "../interfaces/interfaces";

// React Components.
import SingleTitleView from "./SingleTitleView";
import SingleCardView from "./SingleCardView";

// Local interface for PROPS
interface ViewerProps {
    textsList: SingleText[];
}

//Sample
const sample: SingleText = {
    title: "ACH Missing",
    text: "Sorry to hear",
    category: "ACH",
    tags: ["ACH,deposit,withdrawal"],
};

const TextsViewer: React.FC<ViewerProps> = ({ textsList }) => {
    //
    const [textViewVisible, setTextViewVisible] = useState<boolean>(false);
    const [selectedText, setSelectedText] = useState<SingleText>(sample);
    const [indexOnView, setIndexOnView] = useState<number>(0);

    // Need state for when the specific title is clicked

    return (
        <Fragment>
            {textsList.map((textInfo: SingleText, index: number) => {
                return (
                    <SingleTitleView
                        textInfo={textInfo}
                        key={index}
                        indexTitle={index}
                        textViewVisible={textViewVisible}
                        setTextViewVisible={setTextViewVisible}
                        setSelectedText={setSelectedText}
                        indexOnView={indexOnView}
                        setIndexOnView={setIndexOnView}
                    />
                );
            })}

            {textViewVisible ? <SingleCardView selectedText={selectedText} /> : <h1>:)</h1>}
        </Fragment>
    );
};

export default TextsViewer;
