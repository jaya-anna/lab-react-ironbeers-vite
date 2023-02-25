import React from "react";
import { Link } from "react-router-dom";
import ImageHome1 from "../assets/beers.png";
import ImageHome2 from "../assets/random-beer.png";
import ImageHome3 from "../assets/new-beer.png";

function HomePage() {
  return (
    <>
      <h1> IronBeers </h1>

      <div>
        <ul style={{ listStyleType: "none", textAlign: "left" }}>
          <div>
            <img src={ImageHome1} alt="all beer"></img>

            <li>
              <h2>
                <Link to={`/beers`} style={{ color: "black" }}>
                  All Beers
                </Link>
              </h2>
            </li>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              condimentum nibh ac placerat tincidunt. Aenean sit amet dolor
              iaculis, interdum magna nec, eleifend lectus. In imperdiet
              porttitor odio, ac luctus nibh ultricies vel. Aenean sodales augue
              ut enim tincidunt congue. Nunc purus odio, sollicitudin quis
              bibendum sit amet, vulputate non velit. Cras congue faucibus
              luctus. Duis pellentesque tincidunt volutpat. Duis nec velit non
              est volutpat malesuada. In tristique orci at fermentum sodales.
            </p>
          </div>
          <div>
            <img src={ImageHome2} alt="random beer"></img>

            <li>
              <h2>
                <Link to={`/random-beer`} style={{ color: "black" }}>
                  Random Beer
                </Link>
              </h2>
            </li>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              condimentum nibh ac placerat tincidunt. Aenean sit amet dolor
              iaculis, interdum magna nec, eleifend lectus. In imperdiet
              porttitor odio, ac luctus nibh ultricies vel. Aenean sodales augue
              ut enim tincidunt congue. Nunc purus odio, sollicitudin quis
              bibendum sit amet, vulputate non velit. Cras congue faucibus
              luctus. Duis pellentesque tincidunt volutpat. Duis nec velit non
              est volutpat malesuada. In tristique orci at fermentum sodales.
            </p>
          </div>
          <div>
            <img src={ImageHome3} alt="new beer"></img>

            <li>
              <h2>
                <Link to={`/new-beer`} style={{ color: "black" }}>
                  New Beer
                </Link>
              </h2>
            </li>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              condimentum nibh ac placerat tincidunt. Aenean sit amet dolor
              iaculis, interdum magna nec, eleifend lectus. In imperdiet
              porttitor odio, ac luctus nibh ultricies vel. Aenean sodales augue
              ut enim tincidunt congue. Nunc purus odio, sollicitudin quis
              bibendum sit amet, vulputate non velit. Cras congue faucibus
              luctus. Duis pellentesque tincidunt volutpat. Duis nec velit non
              est volutpat malesuada. In tristique orci at fermentum sodales.
            </p>
          </div>
        </ul>
      </div>
    </>
  );
}

export default HomePage;
