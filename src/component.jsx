import React, { useEffect } from 'react'
import img1 from '../public/img1.jpg'
import './component.css'

function Component(props) {
    
  return (
    <>
    <div className='img_cont'>  
        <div className='image'>
            <img src={props.image} alt="img1" />
        </div>
        <div className='ptxt'>
            <div className='wraps'>
                <p>Product_item</p>
                {/* <br></br> */}
                <p>${props.amt}.00</p>
            </div>
            <div className='right' style={{display:'flex',flexDirection:'column',height:'90px',justifyContent:'space-evenly'}}>
              <p>Lorem ipsum dolor</p>
              <button className='but'>Add</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Component
