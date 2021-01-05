import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let posts = [
  { id: 1, message: "hello!", likesCount: 10 },
  { id: 2, message: "It's my first post!", likesCount: 15 },
];

let dialogs = [
  { id: 1, name: "Dimas" },
  { id: 2, name: "Dryus" },
  { id: 3, name: "Zaxar" },
  { id: 4, name: "Pus" },
];

let messages = [
  { id: 1, message: "hello" },
  { id: 2, message: "How are you" },
  { id: 3, message: "Yo!" },
];

let data = {
  posts: posts,
  dialogs: dialogs,
  messages: messages,
};

ReactDOM.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
