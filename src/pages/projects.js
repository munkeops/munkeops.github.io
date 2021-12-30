import React from 'react';
import Navbar from '../components/navbar.js'
// import AboutPost from "../components/aboutPosts"
import './project.css'
import './slideshow.css'

// import { Link } from 'react-router-dom';
// import PostsForAbout from '../components/aboutPosts';
import hack1 from "../images/white-Flow_main.png";
import hack2 from "../images/ml2.jpg";
import hack3 from "../images/ml3.jpg";

import ise1 from "../images/ise1.jpg";
import ise2 from "../images/ise2.jpg";

import wsn1 from "../images/wsn1.jpg";
import wsn2 from "../images/wsn2.jpg";

import dcf1 from "../images/dcf1.jpg";
import dcf2 from "../images/dcf2.jpg";







import cb1 from "../images/contactbook-sqr.png";
import poke2img from "../images/poke2.jpg";
import cb2 from "../images/cb2.jpg";

import Slideshow from "../components/slider"

// const colors = ["#0088FE", "#00C49F", "#FFBB28"];
// const colors = [background, background1, poke2img];

// const delay = 2500;

const DELLAIML={
    colors :[hack3, hack1, hack2],
    delay : 3000,
}

const ISE={
    colors :[ise1, ise2],
    delay : 3100,
}

const CB={
    colors: [cb1,cb2],
    delay : 2900
}

const P2={
    colors: [poke2img],
    delay : 2900

}

const WSN={
    colors: [wsn1,wsn2],
    delay : 3000

}

const DCF={
    colors: [dcf1,dcf2],
    delay : 3100

}


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
                        {/* <div className="ProjectImage" style={{"background-image": "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.RbAsNTn5u4VuhBWbis6KJgHaEK%26pid%3DApi&f=1')"}}></div> */}
                        <Slideshow data={ISE}/>
                        <div className="ProjectData">
                            {/* <br/>
                            Hey, my name's Rohan Nedungadi<br/>
                            <br/> */}
                            {/* <br/> */}
                            <br/>
                            <b>Image Search Engines</b><br/>
                            (Classical Image Processing and DL Techniques in image tagging and retrieval)
                            <br/>
                            <i>Thesis/Study</i><br/> 
                            2020<br/>
                            Mahindra Ecole Centrale - Final Year Thesis<br/>
                            {/* MEC batch of 2021<br/> */}
                            {/* <br/> */}
                            <br/>
                            <br/>
                            Thesis report and project on using image detection and recognition for an Image Search Engine
                            <br/><br/><br/>
                            <div className='Links'>
                            {/* <a target='_blank' href='https://github.com/munkeops'>
                                <img src="https://img.icons8.com/stickers/500/000000/github.png"/>
                            </a> */}
                            {/* <a target='_blank' href='https://github.com/munkeops'>
                                <img src="https://img.icons8.com/bubbles/100/000000/domain.png"/>
                            </a> */}
                            <a target='_blank' href='https://github.com/munkeops/Image-Search-Engine/blob/master/ProjectReport.pdf'>
                            <img src="https://img.icons8.com/bubbles/500/000000/document.png"/>
                            </a>
                            </div>


                        </div>
                        <br/>


                    </div>
                    <div className="ProjectItem">
                        {/* <div className="ProjectImage" style={{"background-image": `url(${poke2img})`}}></div> */}
                        <Slideshow data={P2}/>
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
                            <br/><br/>
                            <i>Currently Not Maintained</i>
                            <br/><br/>
                            <div className='Links'>
                            <a target='_blank' href='https://github.com/munkeops/Poke2'>
                                <img src="https://img.icons8.com/stickers/500/000000/github.png"/>
                            </a>
                            <a target='_blank' href='https://poke2se.herokuapp.com'>
                                <img src="https://img.icons8.com/bubbles/100/000000/domain.png"/>
                            </a>
                            {/* <a target='_blank' href='https://github.com/munkeops'>
                            <img src="https://img.icons8.com/bubbles/500/000000/document.png"/>
                            </a> */}
                            </div>


                        </div>

                    </div>
                    <div className="ProjectItem">
                        {/* <div className="ProjectImage" style={{"background-image": `url(${cb1})`}}></div> */}
                        <Slideshow data={CB}/>
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
                            {/* <br/> */}
                            MERN stack project to maintain a cloud based contact book.
                            <br/><br/>
                            <i>Currently Not Maintained</i>
                            <br/><br/>

                            <div className='Links'>
                            <a target='_blank' href='https://github.com/munkeops/ContactBook'>
                                {/* <img src="https://img.icons8.com/material-rounded/384/000000/github.png"/> */}
                                {/* <img src="https://img.icons8.com/wired/64/000000/github.png"/> */}
                                {/* <img src="https://img.icons8.com/cute-clipart/64/000000/github.png"/> */}
                                <img src="https://img.icons8.com/stickers/500/000000/github.png"/>
                                {/* <img src="https://img.icons8.com/plasticine/400/000000/github.png"/> */}
                            </a>
                            <a target='_blank' href='https://contact-book-rn.herokuapp.com/'>
                                {/* <img classname="LinksImgs" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/000000/external-maximizing-pop-up-window-box-under-web-page-builder-landing-shadow-tal-revivo.png"/> */}
                                {/* <img src="https://img.icons8.com/material-outlined/96/000000/domain.png"/> */}
                                {/* <img src="https://img.icons8.com/ios-filled/100/000000/domain.png"/> */}
                                {/* <img src="https://img.icons8.com/fluency/96/000000/domain.png"/> */}
                                <img src="https://img.icons8.com/bubbles/100/000000/domain.png"/>
                            </a>

                            </div>

                            {/* <img src="https://img.icons8.com/cotton/64/000000/circled-chevron-down.png"/> */}


                        </div>

                    </div>
                    <div className="ProjectItem">
                        {/* <div className="ProjectImage" style={{"background-image": `url(${cb1})`}}></div> */}
                        <Slideshow data={DCF}/>
                        <div className="ProjectData">
                            {/* <br/>
                            Hey, my name's Rohan Nedungadi<br/>
                            <br/> */}
                            {/* <br/> */}
                            <br/>
                            <b>Distributed Compute Fabric</b><br/>
                            <i>Hackathon</i><br/> 
                            2020<br/>
                            E-Summit Startup Hackathon, Entrepreneurship Cell of Mahindra Ecole Centrale<br/>
                            {/* MEC batch of 2021<br/> */}
                            {/* <br/> */}
                            <br/>
                            {/* <br/> */}
                            Distributed compute services on mobile phones with RESTful APIs.
                            <br/><br/>
                            <i>Currently Not Maintained</i>
                            <br/><br/>

                            <div className='Links'>
                            <a target='_blank' href='https://github.com/munkeops/ContactBook'>
                                {/* <img src="https://img.icons8.com/material-rounded/384/000000/github.png"/> */}
                                {/* <img src="https://img.icons8.com/wired/64/000000/github.png"/> */}
                                {/* <img src="https://img.icons8.com/cute-clipart/64/000000/github.png"/> */}
                                <img src="https://img.icons8.com/stickers/500/000000/github.png"/>
                                {/* <img src="https://img.icons8.com/plasticine/400/000000/github.png"/> */}
                            </a>
                            <a target='_blank' href='https://contact-book-rn.herokuapp.com/'>
                                {/* <img classname="LinksImgs" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/000000/external-maximizing-pop-up-window-box-under-web-page-builder-landing-shadow-tal-revivo.png"/> */}
                                {/* <img src="https://img.icons8.com/material-outlined/96/000000/domain.png"/> */}
                                {/* <img src="https://img.icons8.com/ios-filled/100/000000/domain.png"/> */}
                                {/* <img src="https://img.icons8.com/fluency/96/000000/domain.png"/> */}
                                <img src="https://img.icons8.com/bubbles/100/000000/domain.png"/>
                            </a>

                            </div>

                            {/* <img src="https://img.icons8.com/cotton/64/000000/circled-chevron-down.png"/> */}


                        </div>

                    </div>
                    <div className="ProjectItem">
                        {/* <div className="ProjectImage" style={{"background-image": `url(${background})`}}></div> */}
                        
                        <Slideshow data={DELLAIML}/>
                        <div className="ProjectData">
                            {/* <br/>
                            Hey, my name's Rohan Nedungadi<br/>
                            <br/> */}
                            {/* <br/> */}
                            <br/>
                            <b>AI Enabled Cart Conversion</b><br></br>
                            <i>Hackathon</i><br/> 
                            Winner - 2019<br/>
                            Dell EMC<br/>
                            {/* MEC batch of 2021<br/> */}
                            {/* <br/> */}
                            <br/>
                            <br/>

                            {/* <br/> */}
                            Re-vamped the Dell website with machine learning based recommender systems using the digital footprints on website.
                            {/* Contributed by deveoping the backend and designing a digital footprint logging system for the ML model to ingest. */}
                            {/* <img src="https://img.icons8.com/cotton/64/000000/circled-chevron-down.png"/> */}

                            <br/><br/>
                            <i>Currently Not Maintained</i>
                            <br/><br/>
                            <div className='Links'>
                            <a target='_blank' href='https://github.com/munkeops/Dell-Hack2Hire-Ai-ML-cart-conversion-'>
                                <img src="https://img.icons8.com/stickers/500/000000/github.png"/>
                            </a>
                            {/* <a target='_blank' href='https://github.com/munkeops'>
                                <img src="https://img.icons8.com/bubbles/100/000000/domain.png"/>
                            </a> */}
                            {/*</div><img src="https://img.icons8.com/bubbles/500/000000/document.png"/>                
                            </a> */}

                            </div>
                            


                        </div>

                    </div>
                    <div className="ProjectItem">
                        {/* <div className="ProjectImage" style={{"background-image": "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.RbAsNTn5u4VuhBWbis6KJgHaEK%26pid%3DApi&f=1')"}}></div> */}
                        <Slideshow data={WSN}/>
                        <div className="ProjectData">
                            {/* <br/>
                            Hey, my name's Rohan Nedungadi<br/>
                            <br/> */}
                            {/* <br/> */}
                            <br/>
                            <b>An Analysis of Power Dissipation of Compression Techniques per Unit Computation and Unit Transmission in Cluster Heads of Wireless Sensor Networks</b><br/>
                            {/* (Classical Image Processing and DL Techniques in image tagging and retrieval) */}
                            <br/>
                            <i>Thesis/Study</i><br/> 
                            2020<br/>
                            Mahindra Ecole Centrale - Third Year Thesis<br/>
                            {/* MEC batch of 2021<br/> */}
                            {/* <br/> */}
                            <br/>
                            <br/>
                            Thesis report and project on analysing the use of compression techniques to reduce power utilization in resource contrainst wsns.
                            <br/><br/><br/>
                            <div className='Links'>
                            {/* <a target='_blank' href='https://github.com/munkeops'>
                                <img src="https://img.icons8.com/stickers/500/000000/github.png"/>
                            </a> */}
                            {/* <a target='_blank' href='https://github.com/munkeops'>
                                <img src="https://img.icons8.com/bubbles/100/000000/domain.png"/>
                            </a> */}
                            <a target='_blank' href='https://github.com/munkeops/Third-Year-Thesis/blob/main/An%20Analysis%20of%20Power%20Dissipation%20of%20Compression%20Techniques%20per%20Unit%20Computation%20and%20Unit%20Transmission%20in%20Cluster%20Heads%20of%20Wireless%20Sensor%20Networks.pdf'>
                            <img src="https://img.icons8.com/bubbles/500/000000/document.png"/>
                            </a>
                            </div>


                        </div>
                        <br/>


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