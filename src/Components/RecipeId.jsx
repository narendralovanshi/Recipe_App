import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import TrandingSlider from './TrandingSlider'
import { useParams } from 'react-router-dom'


const RecipeId = () => {
    const { idMeal } = useParams([])
    const [data, setdata] = useState([])
   const [active, setactive] = useState('Ingrediant')
    useEffect(() => {

        const fatchData = async () => {
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
            const data = await api.json()
            //   console.log(data.meals);
            setdata(data.meals[0])

            console.log(data);

        }
        fatchData()
    }, [idMeal])


    return (
        <>
            <Navbar />
            <div style={{ width: '90%', margin: 'auto', textAlign: 'center' }}>
                <h1>{data.strMeal}</h1>
                <div style={{ display: 'flex' }}>

                    <div className="image" style={{ width: '30%' }} >
                        <img src={data.strMealThumb} alt="" style={{ width: '200px' }} />
                    </div>
                    <div className="content" style={{ width: '80%' }}>
                        <button className='btn' onClick={()=>setactive('Ingrediant')}>Ingrediant</button>
                        <button className='btn'  onClick={()=>setactive('Insrution')}>Insrution</button>

{
    active === 'Ingrediant' ?  (<div>
    <h4>{data.strIngredient1} - {data.strMeasure1}</h4>
    <h4>{data.strIngredient2} - {data.strMeasure2}</h4>
    <h4>{data.strIngredient3} - {data.strMeasure3}</h4>
    <h4>{data.strIngredient4} - {data.strMeasure4}</h4>
    <h4>{data.strIngredient5} - {data.strMeasure5}</h4>
    <h4>{data.strIngredient6} - {data.strMeasure6}</h4>
</div>):
( <div><p>{data.strInstructions}</p></div>)
}
                       
                       
                    </div>
                </div>
            </div>
            <TrandingSlider />
        </>
    )
}

export default RecipeId