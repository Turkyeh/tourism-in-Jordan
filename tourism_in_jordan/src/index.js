//  import React from "react";
import ReactDOM from "react-dom/client";
import App from "./ِApp";

// الطريقة 1
// ReactDOM.render("hello all",document.getElementById('root'));

// الطريقة 2
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<h1>hello word2"</h1>);

// انا هون حطيت ال h1 دو الdiv ضمنتو الو 
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<h1>hello word2"</h1>);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
