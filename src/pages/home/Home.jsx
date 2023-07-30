/* eslint-disable no-unused-vars */
import React from "react";
import "./home.scss";
import {
  AiOutlineArrowDown,
  AiOutlineArrowRight,
  AiOutlineDown,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLeft,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlinePlusCircle,
  AiOutlineRight,
  AiOutlineTwitter,
  AiOutlineUser,
} from "react-icons/ai";
import { products, team } from "../../constant";
import Cardbig from "../../components/CardBig/Cardbig";
import Featured from "../../components/Featured/Featured";
import News from "../../components/News/News";
const Home = () => {
  return (
    <div className="homecontainer">
      <div className="headercontainer ">
        <h1 className="overflow">MOUSE</h1>
        <div className="left">
          <div className="log">KGG</div>
          <p>Welcome to kuipid gaming gears</p>
          <div className="logoContainer">
            <AiOutlineFacebook />
            <AiOutlineTwitter />
            <AiOutlineInstagram />
          </div>
        </div>
        <div className="center">
          <div className="img">
            <img src="assets/muse.png " alt="" />
          </div>

          <ul>
            <li>Mouse</li>
            <li>Keyboards</li>
            <li>Headsets</li>
            <li> Mousepads</li>
          </ul>
          <div className="text-ontainer">
            <h1>
              Mouse- <br />
              Steelseries <br />
              Sensei 310
            </h1>
            <div className="price">
              <span>#10099</span>
              <span>#8000</span>
            </div>
          </div>

          <div className="toCart ">
            <div className="fcenter one">
              <div className="oneinner">
                <span className="plus fcenter">
                  <AiOutlinePlus />
                </span>

                <span>ADD TO CART</span>
              </div>

              <AiOutlineDown className="two" />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="rightcontainer">
            <div className="userIcon">
              <div className="inner ">
                <span>
                  <AiOutlineUser />
                </span>

                <span>Kuipid Adegoke</span>
              </div>

              <hr />
              <span className="item fcenter">1</span>
            </div>
            <p>$200</p>
          </div>
          <div className="btmArrows">
            <div className="arrws">
              <AiOutlineRight />
              <AiOutlineLeft className="active" />
            </div>
            <div className="qty">
              <span className="active">1</span>
              <hr />
              <span>4</span>
            </div>
          </div>
        </div>
      </div>
      {/* <img src="assets/muse.png " alt="" /> */}
      <div className="items">
        {products.map((product) => (
          <Cardbig type="card" product={product} key={product.id} />
        ))}
      </div>
      <Featured type="featured" />
      <Featured type="new" />
      {/* team section start */}
      <div className="items">
        {team.map((team) => (
          <Cardbig type="team" team={team} key={team.id} />
        ))}
      </div>
      <News />

      <div className="footeer">
        <div className="copy">
          <small>
            Copyright <a href="https://devkuipid.vercel.com">Kuipid</a>
          </small>{" "}
          <small>Design by Behance</small>
        </div>
        <div className="logcontainer">
        <div className="log fcenter">KGG</div>
        <span>Kuipid Gaming Gear</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
