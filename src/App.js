import './App.scss';
import Search from "./components/Search/Search";
import { Router } from "@reach/router";
import SingleView from "./components/SingleView/SingleView";
import { useState } from "react";
import dataContext from "./Context";

function App() {

  var dataArray = useState([]);



  Notification.requestPermission(function(status) {
    console.log("Notification permission status:", status);
  })

  function displayNotification() {
    if (Notification.permission === "granted") {
      navigator.serviceWorker.getRegistration()
        .then(function(reg) {
          reg.showNotification("Hello world");
        });
    }
  }


  return (
    <div className="App">
      <dataContext.Provider value={dataArray}>
        <Router>
          <Search path="/" />
          <SingleView path="/single-view/:id" />
        </Router>
        <button onClick={() => displayNotification()}>Click me</button>
      </dataContext.Provider>
    </div>
  );
}

export default App;
