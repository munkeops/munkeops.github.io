import React from 'react';
import Navbar from '../components/navbar.js'
// import AboutPost from "../components/aboutPosts"
import './project.css'
// import { Link } from 'react-router-dom';
// import PostsForAbout from '../components/aboutPosts';
import background from "../images/white-Flow_main.png";
import background1 from "../images/contactbook-sqr.png";
import poke2img from "../images/poke2.jpg";



function Projects(){

    return(
        <div className="Project">
            <Navbar/>
            
                <div className="ProjectBody">
                {/* <div className='Current'>Current Projects</div> */}
                    {/* <div className="ProjectItem">
                        <div className="ProjectImage" style={{"background-image": "url('https://munkeops.github.io/Blogs/assets/images/contactbook.png')"}}></div>
                        <div className="ProjectData">
                            <br/>
                            <b>Queue Detection</b><br/>
                            <i>Project</i><br/> 
                            Personal<br/>
                            <br/>
                            <br/>
                            Queue waiting time detection.


                        </div>
                
                    </div> */}
                    {/* <div className='Current'>Past Projects</div> */}

                    <div className="ProjectItem">
                        <div className="ProjectImage" style={{"background-image": `url(${background})`}}></div>

                        <div className="ProjectData">
                            {/* <br/>
                            Hey, my name's Rohan Nedungadi<br/>
                            <br/> */}
                            {/* <br/> */}
                            <br/>
                            <b>AI/ML for Cart Conversion</b><br></br>
                            <i>Hackathon</i><br/> 
                            Winner - 2019<br/>
                            Dell EMC<br/>
                            {/* MEC batch of 2021<br/> */}
                            {/* <br/> */}
                            <br/>
                            <br/>
                            Re-vamped the Dell website with machine learning based recommender systems using the digital footprints on website.
                            Contributed by deveoping the backend and designing a digital footprint logging system for the ML model to ingest.
                            {/* <img src="https://img.icons8.com/cotton/64/000000/circled-chevron-down.png"/> */}


                        </div>

                    </div>
                    <div className="ProjectItem">
                        <div className="ProjectImage" style={{"background-image": `url(${background1})`}}></div>
                        <div className="ProjectData">
                            {/* <br/>
                            Hey, my name's Rohan Nedungadi<br/>
                            <br/> */}
                            {/* <br/> */}
                            <br/>
                            <b>ContactBook</b><br/>
                            <i>Project</i><br/> 
                            2020<br/>
                            Personal Project<br/>
                            {/* MEC batch of 2021<br/> */}
                            {/* <br/> */}
                            <br/>
                            <br/>
                            MERN stack project to maintain a cloud based contact book.
                            {/* <img src="https://img.icons8.com/cotton/64/000000/circled-chevron-down.png"/> */}


                        </div>

                    </div>
                    <div className="ProjectItem">
                        <div className="ProjectImage" style={{"background-image": "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.RbAsNTn5u4VuhBWbis6KJgHaEK%26pid%3DApi&f=1')"}}></div>
                        <div className="ProjectData">
                            {/* <br/>
                            Hey, my name's Rohan Nedungadi<br/>
                            <br/> */}
                            {/* <br/> */}
                            <br/>
                            <b>Image Search Engines</b><br/>
                            <i>Thesis/Study</i><br/> 
                            2020<br/>
                            Mahindra Ecole Centrale - Final Year Thesis<br/>
                            {/* MEC batch of 2021<br/> */}
                            {/* <br/> */}
                            <br/>
                            <br/>
                            MERN stack project to maintain a cloud based contact book.
                            {/* <img src="https://img.icons8.com/cotton/64/000000/circled-chevron-down.png"/> */}


                        </div>

                    </div>
                    <div className="ProjectItem">
                        <div className="ProjectImage" style={{"background-image": `url(${poke2img})`}}></div>
                        <div className="ProjectData">
                            {/* <br/>
                            Hey, my name's Rohan Nedungadi<br/>
                            <br/> */}
                            {/* <br/> */}
                            <br/>
                            <b>Poke2</b><br/>
                            <i>Project</i><br/> 
                            2020<br/>
                            Personal Project<br/>
                            {/* MEC batch of 2021<br/> */}
                            {/* <br/> */}
                            <br/>
                            <br/>
                            An online 1v1 pokemon duel game
                            {/* <img src="https://img.icons8.com/cotton/64/000000/circled-chevron-down.png"/> */}


                        </div>

                    </div>
                    {/* <div className="ProjectItem">
                        <div className="ProjectImage" style={{"background-image": `url(${background1})`}}></div>
                        <div className="ProjectData">
                          
                            <br/>
                            <b>EyeD</b><br/>
                            <i>Project</i><br/> 
                            2021<br/>
                            Personal Project<br/>
                            <br/>
                            <br/>
                            A computer vision based automated attendance logging system. Used face recognition and OCR to match ID card photo with person and log attendance with the ID number mentioned on the card.


                        </div>

                    </div> */}
                <div>
                </div>
                {/* <PostsForAbout/> */}
                

            

            </div>
        </div>
    )
}

export default Projects