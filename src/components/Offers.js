import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../images/image.jpeg";
import "./components.css";

const Offers = props => {
  const [announces, setAnnounces] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const getData = async () => {
    let response = await axios.get("http://localhost:3000/findAll");
    setAnnounces(response.data);
    setisLoading(true);
  };
  useEffect(() => {
    getData();
  }, []);

  {
    isLoading == true && console.log(announces);
  }

  return (
    <>
      <div className="container">
        {announces.map(function(element, index) {
          if (element.poster) {
            return (
              <div class="announce-box">
                <div class="flex-items">
                  <div class="img-cont">
                    <img class="img" src={logo} />
                  </div>

                  <div class="info">
                    <div class="flex-column-items">
                      <Link class="link" to={"/Offer/" + element._id}>
                        <h4 className="align-self-start">{element.title}</h4>{" "}
                      </Link>
                      <div className="align-self-start"> {element.price}</div>
                      {element.create ? (
                        <div className="align-self-end">{element.create}</div>
                      ) : (
                        <div className="align-self-end">
                          date de creation indisponible
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default Offers;
