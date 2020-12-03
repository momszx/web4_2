import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ListElements from "./components/ListElements";
import RefreshBtn from "./components/RefreshBtn";
import {AddElement} from "./components/AddElement";

function App() {
  return (
    <div >
      <body>
      <nav className="navbar navbar-light bg-light justify-content-between ">
          <a className="navbar-brand">Employee Lister In React</a>
          <div className="form-inline">
              <RefreshBtn/>
          </div>
      </nav>
      <div className={"pb-5"}></div>
        <div className={"container"}>
            <div className={"col pb-5"}>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Add New Employee</h4>
                        <AddElement/>
                    </div>
                </div>
            </div>
            <div className={"col pb-5"}>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">List Of Employees</h4>
                        <ListElements/>
                    </div>
                </div>
            </div>
        </div>
      </body>
    </div>
  );
}

export default App;
