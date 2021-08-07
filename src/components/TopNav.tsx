import React from "react";
import { Link } from "react-router-dom";



const TopNav = () =>{

    return(
        <nav className="nav-bar">
            <h1>Navegations</h1>
            <br/>
            <Link to='new'>New</Link>
            <br/>
            <Link to='List'>List</Link>
            <br/>
            <Link to='new-work'>New View</Link>
        </nav>
    )

}

export default TopNav;