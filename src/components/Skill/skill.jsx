import React from 'react';
import './skill.css';


const skill = () => {
  return (
       
    <section id="skill">
       
      <span className="skillTitle">What I DO</span> 
      <span className="skillDesc">
      I've been immersing myself in the MERN stack and PHP with MySQL.
        My skill set includes JavaScript, React.js, Node.js, and MySQL, and I'm dedicated to advancing my abilities in building web applications, developing RESTful APIs, and optimizing database performance. During this early phase of my career,
        I've contributed to projects like a basic e-commerce website, representing my ongoing learning journey. To gain insights into my progress and contributions, you can explore my code on GitHub. I'm enthusiastic about taking on fresh challenges,
        so please feel free to connect with me via mintesnotfk@gmail.com.
      </span>

      <div className="skillBars" >
      <span className="skillTitle">Skill</span> 
        <div className="skillBarText">

          <h6>UI/UX</h6>
                                                        
          <div class="progress">
             
           <div class="progress-bar bg-warning w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Figma</div>
  
      </div>
        </div>
       
     
         <br />
      
        <div className="skillBarText">
          <h6>Front End Development</h6>
          
          <div class="progress">
          
                   <div class="progress-bar  bg-success w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"> HTML5</div>
  
          </div> <br />
          <div class="progress">
          
                   <div class="progress-bar  bg-success w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"> CSS</div>
  
          </div> <br />
          <div class="progress">
          
                   <div class="progress-bar  bg-success w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"> JavaScript</div>
  
          </div> <br />
          <div class="progress">
          
                   <div class="progress-bar bg-warning w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"> React</div>
  
          </div>
        </div>
        
      
         <br />
    
     
        <div className="skillBarText">
          <h6>Database Management</h6>
          <p></p>
        </div>
        <div class="progress">
          
          <div class="progress-bar bg-success w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">MySQL</div>

 </div> <br />
        <div class="progress">
          
          <div class="progress-bar bg-warning w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">MongoDB</div>

        </div>
   
           <br />
      
        <div className="skillBarText">
          <h6>Back End Development</h6>
           
        </div>
        <div class="progress">
          
          <div class="progress-bar bg-success w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Node.js</div>
           
         </div>
         <br />
         <div class="progress">
          
          <div class="progress-bar bg-success w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">PHP</div>
           
         </div>
         <br />
         <div class="progress">
          
          <div class="progress-bar bg-warning w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"> Django</div>
           
         </div>
     
   
  </div>
</section>
  );
};

export default skill;

