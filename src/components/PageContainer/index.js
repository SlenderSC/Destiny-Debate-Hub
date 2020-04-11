import React from "react";
import Nav from "../Nav/index";
import "./style.css";

function pageContainer({ children }) {
    return (
        <div className="pageContainer">
            <Nav />
            <div className="columns">
                <div className="column" />
                <div className="column is-6 innerColumn">{children}</div>
                <div className="column" />
            </div>
        </div>
    );
}

export default pageContainer;
