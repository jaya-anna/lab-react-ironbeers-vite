import React from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function SingleBeer({ beersArr }) {
  const { beerId } = useParams();
  const [beer, setBeer] = useState({});

  const fetchSingle = async () => {
    const responseSingle = await beersArr.find((beer) => beer._id === beerId);
    setBeer(responseSingle);
  };

  useEffect(() => {
    fetchSingle();
  }, []);

  return (
    <>
      <NavBar />

      <div>
        <img
          style={{ width: "50px", marginRight: "60px" }}
          src={beer.image_url}
          alt={beer.name}
        ></img>
      </div>
      <div>
        <h2>{beer.name}</h2>
        <h3 style={{ color: "lightGray" }}>{beer.tagline}</h3>
        <p>{beer.first_brewed}</p>
        <p>{beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p>
          <b>created by:</b> {beer.contributed_by}
        </p>
      </div>
    </>
  );
}

export default SingleBeer;
