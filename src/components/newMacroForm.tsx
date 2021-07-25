import React, { Fragment, useState } from 'react';

type FormElement = React.FormEvent<HTMLFormElement>;


const NewMacroForm = (): JSX.Element => {

  const [title, setTitle] = useState <string> ('');
  const [macro, setMacro] = useState <string> ('');
  const [category, setCategory] = useState <string> ('');
  const [tags, setTags] = useState <string> ('');
  


  // Submit event
  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    console.log("---------------");
    console.log(title);
    console.log(macro);
    console.log(category);
    console.log(tags);
  }




  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Titulo" onChange={e => {setTitle(e.target.value)}}/>
        <br/>
        <textarea placeholder="Contenido" onChange={e => {setMacro(e.target.value)}}/>
        <br/>
        <input type="text" placeholder="Categoria" onChange={e => {setCategory(e.target.value)}}/>
        <br/>
        <input type="text" placeholder="Tags" onChange={e => {setTags(e.target.value)}}/>
        <br/>
        <button type="submit">Holis</button>
      </form>

    </Fragment>
  );
}

export default NewMacroForm;
