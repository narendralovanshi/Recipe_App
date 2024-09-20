import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import TrandingSlider from './TrandingSlider'
import { Link } from 'react-router-dom'

const Catagory = () => {
  const { name } = useParams()
  const { idMeal } = useParams([])
  const [data, setdata] = useState([])
  useEffect(() => {

    const fatchData = async () => {
      const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`);
      const data = await api.json()
      console.log(data.meals);
      setdata(data.meals)

      console.log(data);

    }
    fatchData()
  }, [name])

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

export default Catagory