import React from 'react'
import './project.css';


const project = () => {
  return (
    <section id="project">
        <span className="projectTitle">Demonstrated Project</span> <br />
         <span className="projectDesc"> I have worked on some projects individually and as a Team.  </span>
                                       
    <div className="projectBars">
        <div  className='projectBar'>

        <div className="projectBar_1">
           
            <div className="projectBarText">
            <h1 className="projectBarText_H1">Project 1</h1> 
                <h2 className="projectBarText_H2">Help_Desk</h2>
                <p>Organization  ICT PARK </p> <br />
                <p>Using Figma MERN Stack </p>
                
            </div>
            </div>
       
            <div className="projectBar_2">
           
            <div className="projectBarText">
                <h1 className="projectBarText_H1">Project 2</h1> 
                <h2 className="projectBarText_H2" > Managment System </h2>
                <p>Organization CBE, Hawassa District </p>
                <p>Using Figma,PHP and Mysql</p>

            </div>
            </div>
            
            <div className="projectBar_3">
           
            <div className="projectBarText">
            <h1 className="projectBarText_H1">Project 3 </h1> 
                <h2 className="projectBarText_H2"> Managment System  </h2>
                <p>Organization Sino Africa PLC </p>
               
                <p>Using Figma ,PHP and Mysql</p>
                 
            </div>
            </div>
            
        </div>

        
        
        
    </div>
    </section>
    
  )
}


export default project