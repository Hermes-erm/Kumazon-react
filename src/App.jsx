import { useEffect, useState } from 'react'
import Component from './component'
import {Routes, Route, Link} from 'react-router-dom'

function App() {
  let arr = []

  const [st, setSt] = useState(1);
  const [init, setInit] = useState(9);
  const [count, setCount] = useState([]);
  const[tags,setTags] = useState([]);
  
  // useEffect(()=>{
  //   for(let i = 1;i <= 9;i++){
  //     // arr.push(Math.floor(Math.random()*100000));
  //     arr.push(i);
  //   }
  //   setCount(arr);
  //   setTags(count.map((ele)=> (`https://source.unsplash.com/random/320x240?random=${ele}`) ));
  //   console.log(tags);
  // },[init])

  for(let i = st;i<= init;i++){ // replace 9 as init by your conv
    tags.push(`https://source.unsplash.com/random/320x240?random=${Math.floor(Math.random()*100000)}`)
  }

  return (
    <>
      <div className='Frame1'>
        <h1 style={{fontFamily:'cursive',color:'white'}}>Kumazon</h1>
        <p>Enjoy shopping</p>
        <input type="text" placeholder='keep shopping...' onKeyDown={(e)=>{
          if(e.key === "Enter"){
            setTags(tags.map(()=>(`https://source.unsplash.com/random/320x240?random=${Math.floor(Math.random()*100000)}`)))
          }
        }}/>
        <Link to = "/login" className='login' style={{color:'white',textDecoration:'none'}}>Login</Link>
        <Link to = "/cart" className='cart' style={{color:'white',textDecoration:'none'}}>Cart</Link>
      </div>
      <div className='Frame2'>
        
        <div className='groceries'>
          <p>Groceries</p>
          <ul className='items'>
            <li>Bread & Bakery</li>
            <li>Meat & seafood</li>
            <li>Pasta</li>
            <li>rice</li>
          </ul>
        </div>

        <div className='elecrtronics'>
        <p>Electronics</p>
          <ul className='items'>
            <li>TV</li>
            <li>Fidge</li>
            <li>Blender</li>
            <li>stablizer</li>
          </ul>
        </div>

        <div className='mobiles'>
          <p>Mobiles</p>
          <ul className='items'>  
            <li>Samsung</li>
            <li>Apple</li>
            <li>Nokia</li>
            <li>Redmi</li>
            <li>Infinix</li>
          </ul>
        </div>
        
        <div className='foods'>
          <p>Foods</p>
          <ul className='items'>
            <li>Chappati</li>
            <li>Dhosa</li>
            <li>Briyani</li>
            <li>Veg</li>
          </ul>
        </div>

        <div className='computer'>
          <p>Computer</p>
          <ul className='items'>
            <li>Lenova</li>
            <li>Dell</li>
            <li>Asus</li>
            <li>Hp</li>
            <li>Mac_book</li>
          </ul>
        </div>

        <div className='fashion'>
          <p>Fashion</p>
          <ul className='items'>
            <li>Clothes and shirts</li>
            <li>Phants</li>
            <li>outfits</li>
          </ul>
        </div>

      </div>
      <div className="container">
        {tags.map( (ele,ind,arr) => <Component key = {ind} image={ele} amt = {Math.floor(Math.random()*500)}/> )}
      </div>
      <div className='footer'><button onClick={()=>{
        setSt(prev=> prev+9)
        setInit(prev=> prev+9)
      }}>Add More</button></div>
    </>
  )
}
export default App
