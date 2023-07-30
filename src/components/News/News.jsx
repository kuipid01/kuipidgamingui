/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./news.scss";

const News = () => {
  {
    return (
      <div className="news">
        <h1 className="over">Newsletter</h1>
        {/* <img src="" alt="" /> */}
        <div className="container">
          <div className="newsletter">
            <h1>Newsletter</h1>
            <small>Subscribe to not miss any of our content</small>
          </div>
          <div className="mail">
            <p>
              {" "}
              <span>Enter</span> your email address{" "}
            </p>
            <div className="browse2">
              <div className="fcenter">
                <AiOutlineMinus />
              </div>
              <span>Subscribe</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default News;
