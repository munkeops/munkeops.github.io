
import React from 'react';
import Navbar from '../components/navbar.js'
import './home.css'
// import { Link } from 'react-router-dom';

function Home(){

    return(
        <div className="Home">
            <Navbar/>
            <div className="CentralBox">
                <div className="Image"/>
                <div className="Name"><h3>Machine Learning Engineer | Computer Vision | MLOPs</h3></div>
                <div className="Navigation">
                    {/* <div><Link to="/travel">Travel Diary</Link></div>
                    <div><Link to="/movies">Movie Discussions</Link></div>
                    <div><Link to="/thoughts">Random Thoughts</Link></div>
                    <div><Link to="/projects">Projects</Link></div> */}
                    {/* <div><Link to="/blogs">Blogs</Link></div> */}
                    <div><a href="https://github.com/munkeops" target="_blank">GitHub</a></div>
                    <div><a href="https://www.linkedin.com/in/rohan-russel-nedungadi-76b249165/" target="_blank">LinkedIn</a></div>
                    {/* <div><Link to="/About">About</Link></div> */}
                    

                    <div><a href="https://github.com/munkeops/Resume/blob/main/Resume.pdf" target="_blank">Resume</a></div>


                </div>

            </div>
            

        </div>
    )
}

export default Home