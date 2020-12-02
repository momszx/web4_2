import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListElements from "./components/ListElements";
import {RefreshBtn} from "./components/RefreshBtn";
import {AddElement} from "./components/AddElement";

function App() {
  return (
    <div >
      <header>
      </header>
      <body>
        <div className={"container"}>
            <h1>Employee Lister In React</h1>
            <div className={"row"}>
                <div className={"col"}>
                    <RefreshBtn/>
                </div>
                <div className={"col"}>
                    <AddElement/>
                </div>
            </div>
            <div>
                <ListElements/>
            </div>
        </div>
      </body>
    </div>
  );
}

export default App;
