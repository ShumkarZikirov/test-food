import './App.css';
import React, {useCallback, useEffect} from "react";
import Header from './components/header/header'
import Main from "./components/main/main";
import Country from "./components/country/country";
import Nav from "./components/nav";
import Footer from "./components/footer/footer";
function App() {
  return (
    <div className="App">
      <Header/>
        <Nav/>
        <Footer/>
    </div>
  );
}

export default App;
