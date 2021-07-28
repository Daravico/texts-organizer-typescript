import React from "react";


// Interfaces
import { SingleText } from "../interfaces/interfaces";

// Local interface for PROPS
interface SingleTextViewProps {
    textInfo: SingleText,
    idx: number

}

const SingleTextView: React.FC<SingleTextViewProps> = ({ textInfo, idx }) => {


    const toggle = () => {
        
        console.log(idx);
    }


    return (
        <div>
            <h1>{textInfo.title}</h1>
            <button onClick={toggle}>Click</button>
        </div>);

}

export default SingleTextView;