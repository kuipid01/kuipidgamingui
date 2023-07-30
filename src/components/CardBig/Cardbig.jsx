/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { AiOutlineMinus } from 'react-icons/ai'
import './cardbiig.scss' 




const Cardbig = ({product,type,team}) => {
    if (type==='card') {
        return (
            <div className="product" key={product.id}>
            <img src={product.img} alt="" />
        <h1>{product.name}</h1>
            <div className="itemcontainer">
              <div className="priceCont">
                <p>Starting from</p>
                <p>#{product.price}</p>
              </div>
              <div className="nameContainer">
                <p className="name">{product.name}</p>
                <div className="browse">
                  <div>
                    <AiOutlineMinus/>
                   
                  </div>
                  <span>Browse</span>
                </div>
              </div>
            </div>
          </div>
          )
    }
    if (type==='team') {
        return (
            <div className="product team" key={team.id}>
            <img src={team.img} className='lay' alt="" />
            <div className="overlay">
                
            </div>
            <img src={team.userImg} alt="" className="user" />
        <h1>{team.name.slice(0,5)}</h1>
            <div className="itemcontainer">
              <div className="priceCont">
             
                <p>{team.desc}</p>
               <p></p>
              </div>
              <div className="nameContainer">
                <p className="name">{team.name}</p>
                <div className="browse">
                  <div>
                    <AiOutlineMinus/>
                   
                  </div>
                  <span>watch videos</span>
                </div>
              </div>
            </div>
          </div>
          )
    }
}

export default Cardbig