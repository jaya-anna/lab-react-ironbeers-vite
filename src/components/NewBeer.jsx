import React from "react";
import NavBar from "./NavBar";
import { useState } from "react";
import axios from "axios";

const NewBeer = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirstBrewed] = useState("");
  const [brewers_tips, setBrewersTips] = useState("");
  const [attenuation_level, setAttenuation] = useState(0);
  const [contributed_by, setContributed] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newBeer = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    };

    const fetchNew = async () => {
      const responseNew = await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        newBeer
      );
      console.log(responseNew);
    };

    fetchNew();

    setName("");
    setTagline("");
    setDescription("");
    setFirstBrewed("");
    setBrewersTips("");
    setAttenuation(0);
    setContributed("");
  };

  return (
    <>
      <NavBar />

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label>
          <b>Name</b>{" "}
        </label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label>
          {" "}
          <b>Tagline</b>
        </label>
        <input
          type="text"
          value={tagline}
          onChange={(event) => setTagline(event.target.value)}
        />
        <label>
          {" "}
          <b>Description</b>
        </label>
        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <label>
          {" "}
          <b>First Brewed</b>
        </label>
        <input
          type="text"
          value={first_brewed}
          onChange={(event) => setFirstBrewed(event.target.value)}
        />
        <label>
          <b>Brewers Tips</b>{" "}
        </label>
        <input
          type="text"
          value={brewers_tips}
          onChange={(event) => setBrewersTips(event.target.value)}
        />
        <label>
          {" "}
          <b>Attenuation Level </b>
        </label>
        <input
          type="number"
          value={attenuation_level}
          onChange={(event) => setAttenuation(event.target.value)}
        />
        <label>
          <b> Contributed by</b>{" "}
        </label>
        <input
          type="text"
          value={contributed_by}
          onChange={(event) => setContributed(event.target.value)}
        />
        <button> ADD NEW</button>
      </form>
    </>
  );
};

export default NewBeer;
