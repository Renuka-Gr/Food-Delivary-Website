// const heading=React.createElement("h1",{class:"myclass"},["Hello world with react","It is second ele"]);
// const head2=ReactDOM.createRoot(document.getElementById("head2"))
// head2.render(heading)
import React from "react";  
import ReactDOM from "react-dom";

const heading=React.createElement
("div",{class:"myclass"},[React.createElement
    ("div",{},
        [React.createElement ("h1",{},[ " Sibling 1"]),
        React.createElement ("h1",{},[ " Sibling 2"])
    ])
    ]);
const head2=ReactDOM.createRoot(document.getElementById("head2"))
head2.render(heading)