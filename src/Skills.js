import React, { Component } from 'react';
import {FaGithub} from "react-icons/fa";
import {BsLinkedin, BsYoutube,BsInstagram,BsFacebook, BsTwitter} from "react-icons/bs";
import "./App.css";


class Skills extends Component {
    constructor(){
        super()
        
        
    }
    render() {
        return (
            <body>
            <div class="jumbotron text-center" id="heading">
            <h1 class="myname">WEB DEVELOP<span class="text-primary">ER</span></h1>
            <h3 class="myoccupation font-weight-bolder">Hari haran.A</h3>
            <ul class="nav nav-pills nav-justified"  id="navigation">
              <li class="nav-item" >
                <a class="nav-link active font-weight-bolder"  href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active font-weight-bolder"  href="/skills">
                  Skills
                </a>
                </li>
              <li class="nav-item">
                <a class="nav-link active font-weight-bolder"  href="/project">
                  Project
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active font-weight-bolder"  href="/youtube">
                  youtube
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active font-weight-bolder"  href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/*skillContainer*/}
          <div class="container">
              <div class="row" >
              <div class="col-sm-6 ">
                  <img src="https://www.hackerearth.com/blog/wp-content/uploads/2015/11/blog_dev-01-1.jpg" class="rounded img-thumbnail" alt="" />
                  <div class="text-light">
                  har
                  </div>
              </div>
              <div class="col-sm-6">
                  <h2>Front End Languages</h2>
              
                  <div class="progress ">
                      
                      <div class="progress-bar" role="progressbar" style={{ width:500}} >
                      <h4>ReactJS 90%</h4>
                      </div>
                  </div>
                  <div class="progress">
                      
                      <div class="progress-bar bg-success" role="progressbar" style={{ width:550}} >
                      <h4>Html 99%</h4>
                      </div>
                  </div>
                  <div class="progress">
                      
                      <div class="progress-bar bg-warning" role="progressbar" style={{ width:500}} >
                      <h4>CSS 90%</h4>
                      </div>
                  </div>
                  <div class="progress">
                      
                      <div class="progress-bar bg-danger" role="progressbar" style={{ width:500}} >
                      <h4>Java Script 90%</h4>
                      </div>
                  </div>
                  <div class="progress">
                      
                      <div class="progress-bar bg-secoundary" role="progressbar" style={{ width:500}} >
                      <h4>Bootstraps 99%</h4>
                      </div>
                  </div>
                  <div class="progress">
                      
                      <div class="progress-bar bg-dark" role="progressbar" style={{ width:400}} >
                      <h4>SCSS 75%</h4>
                      </div>
                  </div>
                  <h3>Git Hub</h3>
                  <div class="progress">
                      
                      <div class="progress-bar progress-bar-striped progress-bar-animated " role="progressbar" style={{ width:550}} >
                      <h4>Project Submission & upload code in Git</h4>
                      </div>
                  </div>
              </div>
              </div>
             
          </div>
            {/*footer*/}
            <div class="jumbotron text-center" id="footer">
              <ul class="nav justify-content-center">
                <li class="nav-item ">
                  <a href ="https://www.youtube.com/channel/UC73D49G7mkeUEi48neBeTSQ"  style={{color:"blue"}}>
                  <BsYoutube size="3em"/>
                  </a>
  
                </li>
                
                <li class="nav-item">
                  <a href ="http://www.github.com/Haaaarriharan" style={{color:"blue"}}>
                  <FaGithub size="3em"/>
                  </a>
                 
  
                </li>
                <li class="nav-item">
                  <a href ="http://www.linkedin.com/in/hari-haran-892441226"  style={{color:"blue"}}>
                  <BsLinkedin size="3em"/>
                  </a>
  
                </li>
                <li class="nav-item">
                  <a href ="http://www.instagram.com/melodyharihari"  style={{color:"blue"}}>
                    <BsInstagram size="3em"/>
                  </a>
  
                </li>
                <li class="nav-item">
                  <a href ="http://www.facebook.com/spatanzzhari.hari"   style={{color:"blue"}}>
                  <BsFacebook size="3em"/>
                    </a>
  
                </li>
                <li class="nav-item">
                  <a href ="http://www.twitter.com/hari074980"  style={{color:"blue"}}>
                    <BsTwitter size="3em"/>
                  </a>  
  
                </li>
              </ul>
                
              </div>
  
  
          </body>
        )
    }
}

export default Skills;