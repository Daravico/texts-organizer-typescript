import React from "react";


// Interfaces
import { SingleText } from "../interfaces/interfaces";

// Local interface for PROPS
interface SingleTextViewProps{
    textInfo: SingleText

}

const SingleTextView: React.FC<SingleTextViewProps> = ({textInfo}) => {

    return(<h1>{textInfo.title}</h1>);

} 

export default SingleTextView;