import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import logo from "../images/image.jpeg";

const Offer = () => {
  const [announce, setAnnounce] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [postAmounts, setPostAmounts] = useState(0);
  const [user, setUser] = useState(null);

  const { id } = useParams();

  const getData = async () => {
    const offer = await axios.get(
      "http://localhost:3000/findByTitle?_id=" + id
    );

    setAnnounce(offer.data);

    const getUserPostAmounts = await axios.get(
      "http://localhost:3000/findPostAmounts?poster_id=" + offer.data.poster
    );

    setPostAmounts(getUserPostAmounts.data.length);
    setUser(getUserPostAmounts.data[0].poster.account.username);
    //console.log(getUserPostAmounts.data[0].poster.account.username);
    setIsLoading(true);
  };

  useEffect(() => {
    getData();
  }, []);

  {
    isLoading == true && console.log(postAmounts);
  }
  return (
    <div>
      <div className="container">
        <h2 class="text-align-center"> Le Bon Coin</h2>

        <div class="flex-announce-box">
          <div class="announce-box-center">
            <div class="img-cont">
              <img src={logo} />
            </div>
            <div class="bg-white">
              <div class="flex-column-items">
                <div class="flex-items-start">
                  <div class="font-bold">{announce.title}</div>
                  <div> {announce.price}</div>
                </div>
                <div class="flex-items-end">
                  {announce.create ? (
                    <div> {announce.create} </div>
                  ) : (
                    <div> date indisponible </div>
                  )}
                </div>
              </div>
            </div>
            <div class="description-field">
              <p>{announce.description}</p>
            </div>
          </div>
          <div class="poster-info">
            <p> Posted by {user}</p>
            <p> Total Posts By This User {postAmounts}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
