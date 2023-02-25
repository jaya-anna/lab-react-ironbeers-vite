import { useState } from "react";
import axios from 'axios'
import { useEffect } from 'react'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AllBeers from "./components/AllBeers";
import NewBeer from "./components/NewBeer";
import RandomBeer from "./components/RandomBeer";
import SingleBeer from "./components/SingleBeer";

function App() {

  const [beers, setBeers] = useState([])

  const fetchData = async () => {
    const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
    setBeers(response.data)
  }
 
  useEffect(() => {
    fetchData()
  }, [])



  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeers beersArr={beers} setBeers={setBeers}/>} />
        <Route path="/random-beer" element={<RandomBeer beers={beers}/>} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/beers/:beerId" element={<SingleBeer beersArr={beers} />} />
      </Routes>
    </div>
  );
}

export default App;
