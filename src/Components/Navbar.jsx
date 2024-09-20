import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate()
    const [input, setinput] = useState([])
    const handelSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${input}`)

    }
   
    return (
        <>
            <div className="nav">
                <Link to={'/'} className='Link'>
                    <div className="left"> <h1>React-Recipe-App</h1></div>
                </Link>
                <div className="search">
                    <form onSubmit={handelSubmit}>
                        <input onChange={(e) => setinput(e.target.value)} type="text" />
                    </form>
                </div>

                <div className="right">
                    {/* <Link to={`/catagory/chines`} className='Link'><div>Chinese</div></Link> */}
                    <Link to={`/catagory/indian`} className='Link'><div>Indian</div></Link>
                    <Link to={`/catagory/american`} className='Link'><div>American</div></Link>
                    <Link to={`/catagory/british`} className='Link'><div>British</div></Link>
                    <Link to={`/catagory/thai`} className='Link'><div>Thai</div></Link>

                </div>
            </div>


        </>
    )
}

export default Navbar