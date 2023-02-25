import React from "react";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import axios from "axios";

function RandomBeer() {

    const [randomBeer, setRandomBeer] = useState({})
  
    const fetchRandom = async () => {
        const responseRandom = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        setRandomBeer(responseRandom.data)
      }
     
    useEffect(() => {
        fetchRandom()
      }, [])
    

  return (
    <>
      <NavBar />

      <div>
        <img
          style={{ width: "50px", marginRight: "60px" }}
          src={randomBeer.image_url}
          alt={randomBeer.name}
        ></img>
      </div>
      <div>
        <h2>{randomBeer.name}</h2>
        <h3 style={{ color: "lightGray" }}>{randomBeer.tagline}</h3>
        <p>{randomBeer.first_brewed}</p>
        <p>{randomBeer.attenuation_level}</p>
        <p>{randomBeer.description}</p>
        <p>
          <b>created by:</b> {randomBeer.contributed_by}
        </p>
      </div>
    </>
  );
}

export default RandomBeer;
