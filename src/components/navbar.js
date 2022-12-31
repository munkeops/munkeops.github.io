import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div className="Navbar">
            <div className="Heading"><h3><b><Link to = "/"  className='link'>Rohan Nedungadi</Link></b></h3></div>
            <div className="HeadingSmall"><h3><b><Link to = "/"  className='link'>RN</Link></b></h3></div>

            {/* <div className="Heading"><h2><Link to = "/admin">Rohan R Nedungadi</Link></h2></div> */}
            <div className="NavButtons">
                <div><Link to="/" className='link'>Home</Link></div>
                {/* <div><Link to="/travel">Travel Diaries</Link></div> */}
                {/* <div><Link to="/movies">Movies</Link></div> */}
                {/* <div><Link to="/projects">Projects</Link></div> */}
                {/* <div><Link to="/blogs">Blogs</Link></div> */}
                <div><a href="https://munkeops.github.io/Blogs/" target="_blank" className='link'>Blogs</a></div>
                <div><Link to="/projects" className='link'>Profile</Link></div>
                {/* <div><Link to="/about">About</Link></div> */}


            </div>
        </div>
    )
}

export default Navbar