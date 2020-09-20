//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDom from "react-dom";

ReactDom.render(
    <div>
        <h1>My Favorite Foods</h1>
        <ul>
            <li>Bacon</li>
            <li>Jamon</li>
            <li>Noodles</li>
        </ul>
    </div>,
    document.querySelector("#root")
);
