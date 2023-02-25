import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import axios from "axios";

function AllBeers({ beersArr, setBeers }) {
  const handleSearch = async (event) => {
    const searchKey = event.target.value.toLowerCase();
    const responseSearch = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/search?q=${searchKey}`
    );
    setBeers(responseSearch.data);
  };

  return (
    <>
      <NavBar />

      <label></label>
      <input
        placeholder="Search for Beers"
        onChange={(event) => handleSearch(event)}
      ></input>

      <>
        <div>
          {beersArr.map((beer) => {
            return (
              <div key={beer._id}>
                <ul style={{ listStyleType: "none", marginLeft: "60px" }}>
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      textAlign: "left",
                    }}
                  >
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
                      <p>
                        <b>created by:</b> {beer.contributed_by}
                      </p>
                      <Link
                        to={`/beers/${beer._id}`}
                        style={{ color: "black" }}
                      >
                        Details
                      </Link>
                    </div>
                  </li>
                  <hr></hr>
                </ul>
              </div>
            );
          })}
        </div>
      </>
    </>
  );
}

export default AllBeers;
