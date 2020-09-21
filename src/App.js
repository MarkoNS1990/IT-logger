import React, { useEffect, Fragment } from "react";
import SearchBar from "./components/layout/SearchBar";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/layout/AddLogModal";
import EditLogModal from "./components/layout/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";

function App() {
  useEffect(() => {
    //initializes materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <Logs />
      </div>
    </Fragment>
  );
}

export default App;
