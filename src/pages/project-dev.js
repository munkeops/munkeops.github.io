import React from 'react';
import Navbar from '../components/navbar.js'
import Footer from '../components/footer.js'

import CustomTab from '../components/customtab.js'
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "bootstrap/dist/css/bootstrap.min.css";

// import AboutPost from "../components/aboutPosts"
import './project.css'
import './slideshow.css'

// import React from "react";
import Button from "@material-tailwind/react/Button";



// import { Link } from 'react-router-dom';
// import PostsForAbout from '../components/aboutPosts';
import hack1 from "../images/white-Flow_main.png";
import hack2 from "../images/ml2.jpg";
import hack3 from "../images/ml3.jpg";

import hci1 from "../images/hci1.png";
import hci2 from "../images/hci2.png";
import hci3 from "../images/hci3.png";
import hci4 from "../images/hci4.jpg";


import ise1 from "../images/ise1.jpg";
import ise2 from "../images/ise2.jpg";
import ise3 from "../images/ise3.jpg";


import wsn1 from "../images/wsn1.jpg";
import wsn2 from "../images/wsn2.jpg";
import wsn3 from "../images/wsn3.jpg";


import dcf1 from "../images/dcf1.jpg";
import dcf2 from "../images/dcf2.jpg";
import dcf3 from "../images/dcf3.jpg";


import cb1 from "../images/contactbook-sqr.png";
import poke2img from "../images/poke2.jpg";
import pk3 from "../images/pk3.jpg";
import pk2 from "../images/pk2.jpg";


import cb2 from "../images/cb2.jpg";
import cb3 from "../images/cb3.jpg";

import navisense from "../images/navisense.jpg"
import gw from "../images/guiseaiweb.jpg"

import guise from "../images/guise.png"

import yf from "../images/yummy_future.png"
import yfw from "../images/yummyweb.jpg"
import y2 from "../images/yummy2.jpg"

import bp1 from "../images/biped1.jpg"
import bp2 from "../images/biped2.jpg"
import bp3 from "../images/biped3.jpg"






import Slideshow from "../components/slider"

import { useState,useEffect} from "react";


// const colors = ["#0088FE", "#00C49F", "#FFBB28"];

// const delay = 2500;



const allinfo2=[
    
    {
                
        title: "Image Search Engine (Classical Image Processing and DL Techniques in image tagging and retrieval) ",
        type: "Thesis/Study",
        year: "2020",
        loc: "Mahindra Ecole Centrale - Final Year Thesis",
        detail: "Thesis report and project on using image detection and recognition for an Image Search Engine",
        maintain_status: "Unofficial Copy",
        git: false,
        web: false,
        doc: true,
        doclink: "https://github.com/munkeops/Image-Search-Engine/blob/master/ProjectReport.pdf",
        images: {
            colors :[ise1, ise2],
            delay : 3100,
        },

    },
    {
        title: "Poke2",
        type: "Project",
        year: "2020",
        loc: "Personal Project",
        detail: "An online 1v1 pokemon duel game",
        maintain_status: "Currently not maintained",
        git: true,
        web: true,
        doc: false,
        weblink: "https://poke2se.herokuapp.com",
        gitlink: "https://github.com/munkeops/Poke2",
        images: {
            colors: [poke2img],
            delay : 2900
        },

    },
    {
        title: "ContactBook",
        type: "Project",
        year: "2020",
        loc: "Personal Project",
        detail: "MERN stack project to maintain a cloud based contact book.",
        maintain_status: "Currently not maintained",
        git: true,
        web: true,
        doc: false,
        weblink: "https://contact-book-rn.herokuapp.com/",
        gitlink: "https://github.com/munkeops/ContactBook",
        images: {
            colors: [cb1,cb2],
            delay : 2900
        },

    },
    {
        title: "Distributed Compute Fabric",
        type: "Hackathon",
        year: "2020",
        loc: "E-Summit Startup Hackathon, Entrepreneurship Cell of Mahindra Ecole Centrale",
        detail: "Distributed compute services on mobile phones with RESTful APIs.",
        maintain_status: "Currently not maintained",
        git: false,
        web: false,
        doc: false,
        images: {
            colors: [dcf1,dcf2],
            delay : 3100
        },

    },
    {
        title: "AI Enabled Cart Conversion",
        type: "Hackathon",
        year: "Winner - 2019",
        loc: "Dell EMC",
        detail: "Re-vamped the Dell website with machine learning based recommender systems using the digital footprints on website.",
        maintain_status: "Currently not maintained",
        git: true,
        web: false,
        doc: false,
        gitlink: "https://github.com/munkeops/Dell-Hack2Hire-Ai-ML-cart-conversion-",
        images: {
            colors :[hack3, hack1, hack2],
            delay : 3000,
        },

    },
    {
        title: "An Analysis of Power Dissipation of Compression Techniques per Unit Computation and Unit Transmission in Cluster Heads of Wireless Sensor Networks",
        type: "Thesis/Study",
        year: "2020",
        loc: "Mahindra Ecole Centrale - Third Year Thesis",
        detail: "Thesis report and project on analysing the use of compression techniques to reduce power utilization in resource contrainst wsns.",
        maintain_status: "",
        git: false,
        web: false,
        doc: true,
        doclink: "https://github.com/munkeops/Third-Year-Thesis/blob/main/An%20Analysis%20of%20Power%20Dissipation%20of%20Compression%20Techniques%20per%20Unit%20Computation%20and%20Unit%20Transmission%20in%20Cluster%20Heads%20of%20Wireless%20Sensor%20Networks.pdf",
        images: {
            colors: [wsn1,wsn2],
            delay : 3000
        }
    },]

const projectsinfo=[
    {
        title: "Autonomous and Remote control Biped",
        type: "Project",
        year: "2023",
        loc: "Embedded Systems, UIUC",
        detail: "Self balancing Two wheel robot (Biped) with computer vision and remote control capabalities",
        maintain_status: "Currently not maintained",
        git: false,
        web: false,
        doc: true,
        // weblink: "https://poke2se.herokuapp.com",
        // gitlink: "https://github.com/munkeops/Poke2",
        doclink: "https://github.com/munkeops/Autonomous-and-Remote-Control-Biped/blob/main/AutonomousRCBiped.pdf",
        images: {
            colors: [bp1, bp2, bp3],
            delay : 2900
        },
    
    },
    {
        title: "Poke2",
        type: "Project",
        year: "2020",
        loc: "Personal Project",
        detail: "An online 1v1 pokemon duel game",
        maintain_status: "Currently not maintained",
        git: true,
        web: true,
        doc: false,
        weblink: "https://poke2se.herokuapp.com",
        gitlink: "https://github.com/munkeops/Poke2",
        images: {
            colors: [poke2img,pk2,pk3],
            delay : 3000
        },
    },
    {
        title: "ContactBook",
        type: "Project",
        year: "2020",
        loc: "Personal Project",
        detail: "MERN stack project to maintain a cloud based contact book.",
        maintain_status: "Currently not maintained",
        git: true,
        web: true,
        doc: false,
        weblink: "https://poke2se.herokuapp.com",
        gitlink: "https://github.com/munkeops/Poke2",
        images: {
            colors: [cb1,cb2,cb3],
            delay : 3100
        },
    
    },
    ]

const thesisinfo=[
        {
                    
            title: "Intuitive Interaction Methods for Smart Glasses: An Eye tracking Based Solution",
            type: "Thesis",
            year: "2022",
            loc: "University of Illinois Urbana Champaign",
            detail: "Research-Paper on the usage of eye tracking for HCI in the XR space",
            maintain_status: "Unofficial Copy",
            git: false,
            web: true,
            doc: true,
            doclink: "https://github.com/munkeops/Intuitive-Interaction-Methods-for-Smart-Glasses-An-Eye-tracking-Based-Solution/blob/main/Intuitive%20Interaction%20Methods%20for%20Smart%20Glasses-An%20Eye-tracking%20Based%20Solution.pdf",
            weblink: "https://cs.illinois.edu/news/features/soltanaghais-course-smart-cities-homes-and-beyond-leads-to-a-smart-classroom",
            images: {
                colors :[hci4, hci1, hci2],
                delay : 2900,
            },

        },
        {
                    
            title: "Image Search Engine (Classical Image Processing and DL Techniques in image tagging and retrieval) ",
            type: "Thesis/Study",
            year: "2020",
            loc: "Mahindra Ecole Centrale - Final Year Thesis",
            detail: "Thesis report and project on using image detection and recognition for an Image Search Engine",
            maintain_status: "Unofficial Copy",
            git: false,
            web: false,
            doc: true,
            doclink: "https://github.com/munkeops/Image-Search-Engine/blob/master/ProjectReport.pdf",
            images: {
                colors :[ise1, ise2, ise3],
                delay : 3100,
            },
    
        },
        {
            title: "An Analysis of Power Dissipation of Compression Techniques per Unit Computation and Unit Transmission in Cluster Heads of Wireless Sensor Networks",
            type: "Thesis/Study",
            year: "2020",
            loc: "Mahindra Ecole Centrale - Third Year Thesis",
            detail: "Thesis report and project on analysing the use of compression techniques to reduce power utilization in resource contrainst wsns.",
            maintain_status: "Unoffcial Copy",
            git: false,
            web: false,
            doc: true,
            doclink: "https://github.com/munkeops/Third-Year-Thesis/blob/main/An%20Analysis%20of%20Power%20Dissipation%20of%20Compression%20Techniques%20per%20Unit%20Computation%20and%20Unit%20Transmission%20in%20Cluster%20Heads%20of%20Wireless%20Sensor%20Networks.pdf",
            images: {
                colors: [wsn1,wsn2,wsn3],
                delay : 3000
            }
        },
    
]

const hackathoninfo=[
    {
        title: "Distributed Compute Fabric",
        type: "Hackathon",
        year: "3rd Place - 2020",
        loc: "E-Summit Startup Hackathon, Entrepreneurship Cell of Mahindra Ecole Centrale",
        detail: "Distributed compute services on mobile phones with RESTful APIs.",
        maintain_status: "Currently not maintained",
        git: false,
        web: false,
        doc: false,
        images: {
            colors: [dcf3,dcf1,dcf2],
            delay : 3100
        },

    },
    {
        title: "AI Enabled Cart Conversion",
        type: "Hackathon",
        year: "Winner - 2019",
        loc: "Dell EMC",
        detail: "Re-vamped the Dell website with machine learning based recommender systems using the digital footprints on website.",
        maintain_status: "Currently not maintained",
        git: true,
        web: false,
        doc: false,
        gitlink: "https://github.com/munkeops/Dell-Hack2Hire-Ai-ML-cart-conversion-",
        images: {
            colors :[hack3, hack1, hack2],
            delay : 3000,
        },

    },
   ]

const expinfo=[
    {
        title: "Yummy Future Inc.",
        type: "Software Engineer",
        year: "Sept 2022 - present",
        loc: "Champaign Illinois, USA",
        detail: "Designing the central command center to interact and communicate with each smart station",
        maintain_status: "Robotics, Software",
        git: false,
        web: true,
        weblink: "https://www.yummy-future.com/",
        doc: false,
        images: {
            colors: [yf,y2,yfw],
            delay : 3100
        },

    },
    {
        title: "Guise AI",
        type: "Machine Learning Engineer/ Jr. Machine Learning Engineer / Intern",
        year: "Feb 2021 - June 2022",
        loc: "Rolla Missouri, USA",
        detail: "Release Manager for the NaviSense Project",
        maintain_status: "Computer Vision, MLOPs",
        git: false,
        web: true,
        doc: false,
        weblink: "https://www.guise.ai/",
        images: {
            colors :[guise, navisense, gw],
            delay : 3000,
        },

    },
   ]

let allinfo = [].concat(thesisinfo,projectsinfo,hackathoninfo);




function IndividProject({data}){

    // const [value, setValue] = useState("");
    // const displayproject= allinfo

    // if(data.value==="All"){
    // if(true){

    //     const displayproject=allinfo
    // }

    return (
        <div>
         
            {data.map(projecttab=>
           
            <div className="ProjectItem">
            
            <Slideshow data={projecttab.images}/>
            <div className="ProjectData">
                {/* <br/> */}
                <h5><b>{projecttab.title}</b></h5>
                
                <i>{projecttab.type}</i><br/> 
                {projecttab.year}<br/>
                {projecttab.loc}<br/>
                <br/>
                {/* <br/> */}
                {projecttab.detail}
                <br/><br/>
                {(()=>{
                        if(projecttab.maintain_status!=="") {
                            return (<i>{projecttab.maintain_status}<br></br><br></br></i>);
                        }
                })()}
                
                <div className='Links'>
                    {(()=>{
                        if(projecttab.git) {
                            return (<a target='_blank' href={projecttab.gitlink}>
                            {/* <img src="https://img.icons8.com/stickers/500/000000/github.png"/> */}
                            <img src="https://img.icons8.com/bubbles/100/000000/github.png"/>
                        </a>);
                        }
                    })()}
                    {(()=>{
                        if(projecttab.web) {
                            return (<a target='_blank' href={projecttab.weblink}>
                            <img src="https://img.icons8.com/bubbles/100/000000/domain.png"/>
                        </a>);
                        }
                    })()}
                    {(()=>{
                        if(projecttab.doc) {
                            return (<a target='_blank' href={projecttab.doclink}>
                            <img src="https://img.icons8.com/bubbles/100/000000/document.png"/>
                        </a>);
                        }
                    })()}
           
                </div>


            </div>
            <br/>


        </div>
            )}
        </div>
        
    )

}


function RadioToggleButton({flags,setflag}){

    let btn_class_exp = flags.exp?"ToggleButtonsClicked":"ToggleButtons"
    let btn_class_hack = flags.hack?"ToggleButtonsClicked":"ToggleButtons"
    let btn_class_projects = flags.projects?"ToggleButtonsClicked":"ToggleButtons"
    let btn_class_thesis = flags.thesis?"ToggleButtonsClicked":"ToggleButtons"


    return (
        <div className='ButtonHandler'>
              
                <Button className = {btn_class_thesis} 
                 onClick={()=>setflag({
                    "exp":false,
                    "hack":false,
                    "thesis":true,
                    "projects":false
                })}
                >Research</Button>
                <Button className = {btn_class_exp} 
                onClick={()=>setflag({
                    "exp":true,
                    "hack":false,
                    "thesis":false,
                    "projects":false
                })} >
                Experience
                </Button>
                <Button className = {btn_class_projects} 
                onClick={()=>setflag({
                    "exp":false,
                    "hack":false,
                    "thesis":false,
                    "projects":true
                })} >
                    Projects</Button>

                
                <Button className ={btn_class_hack} 
                 onClick={()=>setflag({
                    "exp":false,
                    "hack":true,
                    "thesis":false,
                    "projects":false
                })} >
                    Hackathons</Button>
            </div>
    )

}



function Projects(){

    const flagsdefault={
        "exp":false,
        "hack":false,
        "thesis":true,
        "projects":false
    }
    const [flags, setflag] = useState(flagsdefault);
   

    return(
        <div className="Project">
            <Navbar/>
            {/* <CustomTab/> */}
            <RadioToggleButton flags={flags} setflag={setflag}/>

                <div className="ProjectBody">
                {/* <RadioButton/> */}
                {/* <ToggleButtonExample/> */}

                    {/* <CustomTab/> */}
                {(()=>{
                if(flags.exp) {
                    return ( <IndividProject data={expinfo}/>);
                        }
                else if(flags.hack) {
                    return ( <IndividProject data={hackathoninfo}/>);
                        }
                else if(flags.projects) {
                    return ( <IndividProject data={projectsinfo}/>);
                        }
                else if(flags.thesis) {
                    return ( <IndividProject data={thesisinfo}/>);
                        }
                    })()}
                {/* <IndividProject data={allinfo}/> */}

            </div>
            <Footer/>
        </div>
    )
}

export default Projects
