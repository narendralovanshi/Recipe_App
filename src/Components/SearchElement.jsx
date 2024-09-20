import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import TrandingSlider from './TrandingSlider'
import { Link, useParams } from 'react-router-dom'


const SearchElement = () => {
    // console.log(useParams());
    const {searchTerm} = useParams() ;
    const [data, setdata] = useState([])

    useEffect(() => {

        const fatchData = async () => {
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
            const data = await api.json()
              // console.log(data.meals);
            setdata(data.meals)

            console.log(data);

        }
        fatchData()
    }, [searchTerm])
   
  return (
    <>
     <Navbar/>
      <div style={{ width: '90%', margin: 'auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(15rem,  1fr))', gap: '5rem',  marginTop:'1rem' }}>
        {
          data.map((d) => {
            return (
              <Link to={`/${d.idMeal}`} className='Link'>
              <div style={{ textAlign: 'center' }}>
                <p>
                  {d.strMeal}
                </p>
                <div className='image'>
                  <img src={d.strMealThumb} alt="" style={{ width: '15rem' }} />
                </div>
              </div>
            </Link>
            )
          })
        }
      </div>
<TrandingSlider/>
    </>
  )
}

export default SearchElement