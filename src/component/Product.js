import axios from 'axios';
import { useEffect, useState } from 'react';
import photo_2 from '../assets/photo_2.jpg';
import photo_3 from '../assets/photo_3.jpg';
import snowflake_pic from '../assets/snowflake.svg';
import sunglasses_pic from '../assets/sunglasses.svg';
import umbrella_pic from '../assets/umbrella.svg';

const Product = () => {
  const [conditionCode, setConditionCode] = useState([]);
  const [picture, setPicture] = useState([]);
  const glasses = ['CLEAR', 'ISOLATED-CLOUDS', 'SCATTERED-CLOUDS', 'NA'];
  const umbrella = [
    'OVERCAST',
    'LIGHT-RAIN',
    'MODERATE-RAIN',
    'HEAVY-RAIN',
    'FOG',
  ];

  useEffect(() => {
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/http://api.meteo.lt/v1/places/kaunas/forecasts/long-term'
      )
      .then((response) => {
        setConditionCode(
          response.data.forecastTimestamps.map((i) => i.conditionCode)
        );
      })
      .catch((err) => {
        console.log(err);
      });

    if (glasses.includes(conditionCode[0])) {
      setPicture(sunglasses_pic);
    } else if (umbrella.includes(conditionCode[0])) {
      setPicture(umbrella_pic);
    } else {
      setPicture(snowflake_pic);
    }
  }, []);
  const Code = 'MODERATE-RAIN';
  return (
    <div className="product">
      <div className="container">
        <div className="header">
          <h1>PRODUCTS</h1>
          <h5>OFFERS TODAY</h5>
        </div>

        <div className="main-content">
          <img src={picture} alt="" />
          <div className="pictures">
            <div
              className="coffee"
              style={{ backgroundImage: `url(${photo_3})` }}
            >
              <h3>THE BEST COFFEE</h3>
            </div>
            <div
              className="books"
              style={{ backgroundImage: `url(${photo_2})` }}
            >
              <h3>TOP 100 BOOKS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
