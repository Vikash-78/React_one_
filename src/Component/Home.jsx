import React from 'react'
import vg from '../Assets/2.webp'
import {AiFillGoogleCircle,
        AiFillAmazonCircle,
        AiFillYoutube,
        AiFillInstagram} from 'react-icons/ai'
const Home = () => {
  return (
    <>
    <div className='home' id='home'>
    <main>
      <h1>Techystar</h1>
      <p>welcome to all your problem</p>
    </main>
    </div>

    <div className='home2'>
    <img src={vg} alt ="Graphics"></img>
    <div>
      <p>
          we are your one and only solution to the tech problems you face every day. we are leading tech company whose aim is to 
          increase the problem solving ability in children
      </p>
    </div>

    </div>

    <div className='home3' id='about'>
      <div>
        <h1>Who we are?</h1>
        <p>Tata Consultancy Services is an IT services, consulting and business solutions organization that has been partnering with many of the world’s largest businesses for the past 50 years. We believe innovation and collective knowledge can transform all our futures with greater purpose.</p>
      </div>
    </div>

     <div className='home4' id='brands'>
      <div>
        <h1>Brands</h1>
        <article>
          <div 
          style={{
            animationDelay: "0.3s",
            }}
            >
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>

          <div 
          style={{
            animationDelay: "0.5s",
            }}
            >
            <AiFillAmazonCircle/>
            <p>Amazon</p>
          </div>

          <div 
          style={{
            animationDelay: "0.7s",
            }}
            >
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>

          <div 
          style={{
            animationDelay: "1s",
            }}
            >
            <AiFillYoutube/>
            <p>Youtube</p>
          </div>

        </article>
      </div>
     </div>
    </>
    
  )
}

export default Home