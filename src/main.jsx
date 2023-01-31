import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.jsx';
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const rootElement = document.getElementById("root");
const root = createRoot(rootElement)
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
// const okUrl = 'http://localhost:3000/photos?_page=1&_limit=100';
// const notFoundErrorUrl = 'https://httpstat.us/404';
// const forbiddenErrorUrl = 'https://httpstat.us/403';
// const serverErrorUrl = 'https://httpstat.us/500';
// // const urls here

// axios
//   .get(okUrl)
//   .then((response) => response.data)
//   .then((data) => console.log(data));

// fetch(serverErrorUrl)
// .then(response => {
// console.log(response);
// return response;
// })
// .then(response => response.json())
// .then(data => console.log(data));
//  .catch(error => console.log(error));






