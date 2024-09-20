import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const TrandingSlider = () => {

  const [data, setdata] = useState([])
  useEffect(() => {

    const fatchData = async () => {
      const api = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian");
      const data = await api.json()
      // console.log(data.meals);
      setdata(data.meals)
    }
    fatchData()
  }, [])
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <>
      
      <div className="slider-container" style={{height:"15vh",width:'98%',margin:'auto'}}>
      <Slider {...settings} style={{margin:'1rem'}}>
        
       
    
      {
      data.map((d ) => {
          return (

            <Link to={`/${d.idMeal}`} key={d.idMeal}>
            <div className='slider2'>
            <img src={d.strMealThumb} alt="" style={{width:"150px",height:'100px'}}/>
          </div></Link>
        )
      })
      
    }
    </Slider>
  </div>
    </>
  )
}

export default TrandingSlider