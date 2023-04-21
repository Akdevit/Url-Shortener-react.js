import React, { useState } from "react";
import Nav from "./component/Nav";
import Main from "./component/main";
import Result from "./component/Result";
import Feature from "./component/Feature";
import Footer from "./component/Footer";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [apidata, setApidata] = useState([]);
  const [lodding ,setlodding] = useState(false)

  const ShortApi = () => {
    setlodding(true)
    fetch(`https://api.shrtco.de/v2/shorten?url=${search}`)
      .then((res) => res.json())
      .then((deta) => {
        setApidata(deta);
        setlodding(false)
      });
  };
  const changeSearch = (value) => {
    setSearch(value);
  };

  return (
    <>
      <Nav />
      <Main
        eventHandler={changeSearch}
        searchUrlData={ShortApi}
        searchData={search}
        ErrorHandling={apidata}
      />
      <Result ShortLinkData={apidata} loddingdata={lodding}/>
      <Feature />
      <Footer />
    </>
  );
}

export default App;
