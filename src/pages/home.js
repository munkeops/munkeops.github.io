
import React from 'react';
import Navbar from '../components/navbar.js'
import Footer from '../components/footer'

import './home.css'
// import { Link } from 'react-router-dom';

function Home(){

    return(
        <div className="Home">
            <Navbar/>
            <div className="CentralBox">
                <div className="Image"/>
                {/* <div className="Name"><h3>Machine Learning | Web-Dev | DevOps </h3></div> */}
                <div className="Name"><h3>CS Grad @ UIUC  </h3></div>

                <div className="Navigation">
                    {/* <div><Link to="/travel">Travel Diary</Link></div>
                    <div><Link to="/movies">Movie Discussions</Link></div>
                    <div><Link to="/thoughts">Random Thoughts</Link></div>
                    <div><Link to="/projects">Projects</Link></div> */}
                    {/* <div><Link to="/blogs">Blogs</Link></div> */}
                    {/* <div><a href="https://github.com/munkeops" target="_blank"  className='link'>GitHub</a></div> */}
                    {/* <div><a href="https://github.com/munkeops" target="_blank"  className='link'><img src="https://img.icons8.com/ios-glyphs/30/000000/github.png"/></a></div> */}
                    {/* <div><a href="https://github.com/munkeops" target="_blank"  className='link'><img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-github-community-for-software-building-and-testing-online-logo-color-tal-revivo.png"/></a></div> */}
                    <div><a href="https://github.com/munkeops" target="_blank"  className='link'><img src="https://img.icons8.com/bubbles/50/000000/github.png"/></a></div>


                    {/* <div><a href="https://www.linkedin.com/in/rohan-russel-nedungadi-76b249165/" target="_blank"  className='link'>LinkedIn</a></div> */}
                    {/* <div><a href="https://www.linkedin.com/in/rohan-russel-nedungadi-76b249165/" target="_blank"  className='link'><img src="https://img.icons8.com/fluency/48/000000/linkedin.png"/></a></div> */}
                    <div><a href="https://www.linkedin.com/in/rohan-russel-nedungadi-76b249165/" target="_blank"  className='link'><img src="https://img.icons8.com/bubbles/50/000000/linkedin.png"/></a></div>

                    {/* <div><Link to="/About">About</Link></div> */}
                    
                    <div><a href="https://github.com/munkeops/Resume/blob/main/Resume_dec23.pdf" target="_blank"  className='link'><img src="https://img.icons8.com/bubbles/50/000000/resume.png"/></a></div>

                    {/* <div><a href="https://github.com/munkeops/Resume/blob/main/Resume.pdf" target="_blank"  className='link'>Resume</a></div> */}


                </div>

            <Footer/>


            </div>
            
        </div>
    )
}

export default Home