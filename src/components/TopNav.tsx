import React from "react";
import { Link } from "react-router-dom";

const TopNav = () =>{

    return(
        <nav>
            Navegations
            <br/>
            <Link to='new'>New</Link>
            <br/>
            <Link to='List'>List</Link>
        </nav>
    )

}

export default TopNav;