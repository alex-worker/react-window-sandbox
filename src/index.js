import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import "./styles.css";
import List from "./List.js";

var list = [];

function fillList() {
  for (let index = 0; index < 100; index++) {
    const fakeData = {
      name: faker.name.findName(),
      description: index + ') ' + faker.lorem.paragraph()
    };
    list.push(fakeData);
  }
}

function App() {
  fillList();
  return (
    <div className="App">
      <List list={list} />
    </div>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
