/* eslint-disable react/prop-types */

import { AiOutlineLeft, AiOutlineMinus, AiOutlineRight } from 'react-icons/ai';
import { featuredproducts } from '../../constant'
import Card from '../Card/Card'
import './featured.scss'
const Featured = ({type}) => {
  return (
    <div className="wrapper">
  <h1 className='hidden'>{type} Gears</h1>
    
    <div className="featured">
        <h1 className="over">
        {type}
        </h1>
        <h1>{type} Gears</h1>
        <div className="browse2">
          <div className="fcenter">
            <AiOutlineMinus />
          </div>
          <span>Browse</span>
        </div>
        
            <div className="arrws">
              <AiOutlineRight />
              <AiOutlineLeft className="active" />
            </div>
            
            <div className="qty fcenter">
              <span className="active">1</span>
              <hr />
              <span>4</span>
            </div>
      
    {featuredproducts.map((featuredProduct) => (
 <Card type="featuredProduct" featuredProduct={featuredProduct} key={featuredProduct.id}  />
    ))}

  </div>
  </div>
  );
}

export default Featured