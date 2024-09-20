import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const PopularSlider = () => {

  const [data, setdata] = useState([])
  useEffect(() => {

    const fatchData = async () => {
      const api = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s");
      const data = await api.json()
      // console.log(data.meals);
      setdata(data.meals)
    }
    fatchData()
  }, [])
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  return (
    <>
      
      <div className="slider-container" style={{height:"50vh",width:'90%',margin:'auto'}}>
      <Slider {...settings} style={{margin:'1rem'}}>
        
       
    
      {
      data.map((d) => {
          return (
            <Link to={`/${d.idMeal}`} key={d.idMeal}>
            <div className='slider'>
            <img src={d.strMealThumb} alt="" style={{width:"350px",height:'250px'}}/>
          </div>
          </Link>
        )
      })
      
    }
    </Slider>
  </div>
    </>
  )
}

export default PopularSlider