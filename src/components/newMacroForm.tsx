import React, { Fragment, useState } from 'react';


type FormElement = React.FormEvent<HTMLFormElement>;

 
interface FormProps{
    functionx:(num: number) => void;
  }

interface SingleMacro {
    title: string,
    macro: string,
    category: string,
    tags: string[]
}


const NewMacroForm: React.FC<FormProps> = ({functionx}) => {

    // State Hooks for each of the inputs that we have.
    const [title, setTitle] = useState<string>('');
    const [macro, setMacro] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [tagsLine, setTagsLine] = useState<string>('');

    
    const [macrosList, setMacrosList] = useState<SingleMacro[]>([]);



    // Saving the information of the macro.
    const handleSubmit = (e: FormElement) => {
        e.preventDefault();

        //tagsLine needs to be converted here to an array.
        const tags: string[] = [tagsLine];

        addMacro(e, tags);
    }



    // Adds the macro to the full list of macros.
    const addMacro = (e: FormElement, tags: string[]) => {

        // Saving the details of this macro on a const with the interface.
        const addedMacro: SingleMacro = {
            title: title,
            macro: macro,
            category: category,
            tags: tags
        }

        // Saving on the list.
        const newMacroList: SingleMacro[] = [...macrosList, addedMacro];
        setMacrosList(newMacroList);

        console.log(macrosList);

    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Titulo" value={title} onChange={e => { setTitle(e.target.value) }} />
                <br />
                <textarea placeholder="Contenido" value={macro} onChange={e => { setMacro(e.target.value) }} />
                <br />
                <input type="text" placeholder="Categoria" value={category} onChange={e => { setCategory(e.target.value) }} />
                <br />
                <input type="text" placeholder="Tags" value={tagsLine} onChange={e => { setTagsLine(e.target.value) }} />
                <br />
                <button type="submit">Holis</button>
            </form>

        </Fragment>
    );
}

export default NewMacroForm;
