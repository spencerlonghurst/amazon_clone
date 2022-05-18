import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
        <img 
          className='home_image'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
          alt='cover advertisement'
        />
        <div className='home_row'>
          <Product
          id='0001'
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          price={29.99}
          image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._ACSY400_.jpg'
          rating={5}
          />
          <Product
            id='0002'
            title='Kenwood kMix Stand Mixer for baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
            price={239.00}
            rating={5}
            image='https://m.media-amazon.com/images/I/71EKanXVpDL._AC_UY436_FMwebp_QL65_.jpg'
          />
        </div> 
        <div className='home_row'>
        <Product
            id='0003'
            title='SAMSUNG 49" Odyssey Neo G9 G95NA Gaming Monitor, 4K UHD Mini LED Display, Curved Screen, 240Hz,'
            price={1850.99}
            rating={4}
            image='https://m.media-amazon.com/images/I/81gf+wgrcfS._AC_UY436_FMwebp_QL65_.jpg'
          />
          <Product
            id='0004'
            title='Echo Dot (4th Gen) | Smart speaker with Alexa | Glacier White'
            price={49.99}
            rating={5}
            image='https://m.media-amazon.com/images/I/51F+N9Z3h0L._AC_UY436_FMwebp_QL65_.jpg'
          />
          <Product
            id='0005'
            title='2022 Apple iPad Air (10.9-inch, Wi-Fi, 256GB) - Purple (5th Generation)'
            price={749.00}
            rating={5}
            image='https://m.media-amazon.com/images/I/61k05QwLuML._AC_UY436_FMwebp_QL65_.jpg'
          />
        </div>
        <div className='home_row'>
        <Product
            id='0006'
            title='Wostar Nitrile Disposable Gloves Powder Latex Free 3mil 100 Pcs Exam Disposable Gloves'
            price={14.99}
            rating={4}
            image='https://m.media-amazon.com/images/I/61Ib2vX0IXL._AC_UY436_FMwebp_QL65_.jpg'
          />
        </div>
      </div>
    </div>
  )
}

export default Home