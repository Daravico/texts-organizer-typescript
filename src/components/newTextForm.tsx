import React, { Fragment, useState } from "react";

import { SingleText, FormElement } from "../interfaces/interfaces";

interface NewTextFormProps {
    addingText: (addedText: SingleText) => void;
    functionx: (num: number) => void;
}

const NewTextForm: React.FC<NewTextFormProps> = ({ addingText, functionx }) => {

    // State Hooks for each of the inputs that we have.
    const [title, setTitle] = useState<string>("");
    const [text, setText] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [tagsLine, setTagsLine] = useState<string>("");

    // Saving the information of the text.
    const handleSubmit = (e: FormElement) => {
        e.preventDefault();

        //tagsLine needs to be converted here to an array.
        const tags: string[] = [tagsLine];

        // Saving the information on the form to a new variable (:SingleText).
        const newText: SingleText = {
            title: title,
            text: text,
            category: category,
            tags: tags,
        };

        addingText(newText);
    };

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Titulo"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />

                <br />

                <textarea
                    placeholder="Texto"
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                />

                <br />

                <input
                    type="text"
                    placeholder="Categoria"
                    value={category}
                    onChange={(e) => {
                        setCategory(e.target.value);
                    }}
                />

                <br />

                <input
                    type="text"
                    placeholder="Tags"
                    value={tagsLine}
                    onChange={(e) => {
                        setTagsLine(e.target.value);
                    }}
                />

                <br />

                <button type="submit">Holis</button>
            </form>
        </Fragment>
    );
};

export default NewTextForm;
