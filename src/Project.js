import React, { Component } from 'react';
import {FaGithub} from "react-icons/fa";
import {BsLinkedin, BsYoutube,BsInstagram,BsFacebook, BsTwitter} from "react-icons/bs";
import "./App.css";


class Project extends Component {
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
          {/*11 projects */}
          <div class="container">
            <div class="row" >
              <div class="col-sm-12">
                <h2 class="myskills" style={{textAlign: "justify"}}>
                  Web application for remainder 
                </h2>
                <div class="embed-responsive embed-responsive-16by9" >
                <iframe width="560" height="315" src="https://www.youtube.com/embed/JiFYxfuqrLY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <p class="skills" style={{textAlign: "justify"}}>
                  This application is used for remainders such as Birthday,Events and etc
                </p>
                <h2 class="myskills">
                  Project Domain and tools
                </h2>
                <p class="skills" >
                  This application developed by using the following programming languages and tools 

                </p>
                <ul>
                  <li>Frontend - Html , Css , JS ,React js,Bootstrapes</li>
                </ul>
                <div>
                  <ul class="nav nav-pills justify-content-center">
                    <li class="nav-item">
                      <a class="nav-link active"
                      href={
                        "https://github.com/Haaaarriharan/project1"
                      }>
                        Github Link For Project Source code
                      </a> 
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          <div class="container">
            <div class="row" >
              <div class="col-sm-12">
                <h2 class="myskills" style={{textAlign: "justify"}}>
                  Web application for tourism .The person who is searching for tourist place all over the world
                </h2>
                <div class="embed-responsive embed-responsive-16by9" >
                <iframe width="560" height="315" src="https://www.youtube.com/embed/fR1x3hm6TTI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <p class="skills" style={{textAlign: "justify"}}>
                  This application is used for explore the tourist place
                </p>
                <h2 class="myskills">
                  Project Domain and tools
                </h2>
                <p class="skills" >
                  This application developed by using the following programming languages and tools 

                </p>
                <ul>
                  <li>Frontend - Html , Css ,React js,Bootstrapes</li>
                </ul>
                <div>
                  <ul class="nav nav-pills justify-content-center">
                    <li class="nav-item">
                      <a class="nav-link active"
                      href={
                        "https://github.com/Haaaarriharan/project2-Tourist"
                      }>
                        Github Link For Project Source code
                      </a> 
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          <div class="container">
            <div class="row" >
              <div class="col-sm-12">
                <h2 class="myskills" style={{textAlign: "justify"}}>
                  Web application for the Accordian
                  
                </h2>
                <div class="embed-responsive embed-responsive-16by9" >
                <iframe width="560" height="315" src="https://www.youtube.com/embed/LtR7b1rAt_8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <p class="skills" style={{textAlign: "justify"}}>
                  This application is used for enquiring about the login
                </p>
                <h2 class="myskills">
                  Project Domain and tools
                </h2>
                <p class="skills" >
                  This application developed by using the following programming languages and tools 

                </p>
                <ul>
                  <li>Frontend - Html , Css ,React js,Bootstrapes</li>
                </ul>
                <div>
                  <ul class="nav nav-pills justify-content-center">
                    <li class="nav-item">
                      <a class="nav-link active"
                      href={
                        "https://github.com/Haaaarriharan/project3---Accordion"
                      }>
                        Github Link For Project Source code
                      </a> 
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          <div class="container">
            <div class="row" >
              <div class="col-sm-12">
                <h2 class="myskills" style={{textAlign: "justify"}}>
                  Web application for able to see the resturant foods ,offers through the online
                </h2>
                <div class="embed-responsive embed-responsive-16by9" >
                <iframe width="560" height="315" src="https://www.youtube.com/embed/EY9HqAyShJg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <p class="skills" style={{textAlign: "justify"}}>
                  This application is used for buy the foods through the online
                </p>
                <h2 class="myskills">
                  Project Domain and tools
                </h2>
                <p class="skills" >
                  This application developed by using the following programming languages and tools 

                </p>
                <ul>
                  <li>Frontend - Html , Css ,React js,Bootstrapes</li>
                </ul>
                <div>
                  <ul class="nav nav-pills justify-content-center">
                    <li class="nav-item">
                      <a class="nav-link active"
                      href={
                        "https://github.com/Haaaarriharan/project-4---our-menu-foods"
                      }>
                        Github Link For Project Source code
                      </a> 
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          <div class="container">
            <div class="row" >
              <div class="col-sm-12">
                <h2 class="myskills" style={{textAlign: "justify"}}>
                  Web application for remembering the grocery list 
                </h2>
                <div class="embed-responsive embed-responsive-16by9" >
                <iframe width="560" height="315" src="https://www.youtube.com/embed/zZcDJ7xUvas" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <p class="skills" style={{textAlign: "justify"}}>
                  This application is used for remembering and maintaining the grocery list 
                </p>
                <h2 class="myskills">
                  Project Domain and tools
                </h2>
                <p class="skills" >
                  This application developed by using the following programming languages and tools 

                </p>
                <ul>
                  <li>Frontend - Html , Css ,React js,Bootstrapes</li>
                </ul>
                <div>
                  <ul class="nav nav-pills justify-content-center">
                    <li class="nav-item">
                      <a class="nav-link active"
                      href={
                        "https://github.com/Haaaarriharan/project-5---grocery-bud-list"
                      }>
                        Github Link For Project Source code
                      </a> 
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          <div class="container">
            <div class="row" >
              <div class="col-sm-12">
                <h2 class="myskills" style={{textAlign: "justify"}}>
                  Web application for the payments through the internet
                </h2>
                <div class="embed-responsive embed-responsive-16by9" >
                <iframe width="560" height="315" src="https://www.youtube.com/embed/zr6TuOjFXWs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <p class="skills" style={{textAlign: "justify"}}>
                  This application is used for the payments through the internet
                </p>
                <h2 class="myskills">
                  Project Domain and tools
                </h2>
                <p class="skills" >
                  This application developed by using the following programming languages and tools 

                </p>
                <ul>
                  <li>Frontend - Html , Css ,React js,Bootstrapes</li>
                </ul>
                <div>
                  <ul class="nav nav-pills justify-content-center">
                    <li class="nav-item">
                      <a class="nav-link active"
                      href={
                        "https://github.com/Haaaarriharan/project-6--internet-payment"
                      }>
                        Github Link For Project Source code
                      </a> 
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          <div class="container">
            <div class="row" >
              <div class="col-sm-12">
                <h2 class="myskills" style={{textAlign: "justify"}}>
                  Web application for selling the products through the internet
                </h2>
                <div class="embed-responsive embed-responsive-16by9" >
                <iframe width="560" height="315" src="https://www.youtube.com/embed/93EPe9Cme-8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <p class="skills" style={{textAlign: "justify"}}>
                  This application is used for selling the products like phones ,tablets ,laptop ,etc
                </p>
                <h2 class="myskills">
                  Project Domain and tools
                </h2>
                <p class="skills" >
                  This application developed by using the following programming languages and tools 

                </p>
                <ul>
                  <li>Frontend - Html , Css ,React js,Bootstrapes</li>
                </ul>
                <div>
                  <ul class="nav nav-pills justify-content-center">
                    <li class="nav-item">
                      <a class="nav-link active"
                      href={
                        "https://github.com/Haaaarriharan/project-7---mobile-cart"
                      }>
                        Github Link For Project Source code
                      </a> 
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          <div class="container">
            <div class="row" >
              <div class="col-sm-12">
                <h2 class="myskills" style={{textAlign: "justify"}}>
                  Web application for price range of the cocktails in the 5 star hotels
                </h2>
                <div class="embed-responsive embed-responsive-16by9" >
                <iframe width="560" height="315" src="https://www.youtube.com/embed/3JxLZxZzSaY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <p class="skills" style={{textAlign: "justify"}}>
                  This application is used for pricerange and buying cocktails through the online
                </p>
                <h2 class="myskills">
                  Project Domain and tools
                </h2>
                <p class="skills" >
                  This application developed by using the following programming languages and tools 

                </p>
                <ul>
                  <li>Frontend - Html , Css ,React js,Bootstrapes</li>
                </ul>
                <div>
                  <ul class="nav nav-pills justify-content-center">
                    <li class="nav-item">
                      <a class="nav-link active"
                      href={
                        "https://github.com/Haaaarriharan/project-8---cocktails-"
                      }>
                        Github Link For Project Source code
                      </a> 
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          <div class="container">
            <div class="row" >
              <div class="col-sm-12">
                <h2 class="myskills" style={{textAlign: "justify"}}>
                  Web application to see the profiles in github
                </h2>
                <div class="embed-responsive embed-responsive-16by9" >
                <iframe width="560" height="315" src="https://www.youtube.com/embed/1HNzr268yrw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <p class="skills" style={{textAlign: "justify"}}>
                  This application is used to see profiles in the github
                </p>
                <h2 class="myskills">
                  Project Domain and tools
                </h2>
                <p class="skills" >
                  This application developed by using the following programming languages and tools 

                </p>
                <ul>
                  <li>Frontend - Html , Css ,React js,Bootstrapes</li>
                </ul>
                <div>
                  <ul class="nav nav-pills justify-content-center">
                    <li class="nav-item">
                      <a class="nav-link active"
                      href={
                        "https://github.com/Haaaarriharan/project-9---github-profiles-"
                      }>
                        Github Link For Project Source code
                      </a> 
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          <div class="container">
            <div class="row" >
              <div class="col-sm-12">
                <h2 class="myskills" style={{textAlign: "justify"}}>
                  Web application for download the movies
                </h2>
                <div class="embed-responsive embed-responsive-16by9" >
                <iframe width="560" height="315" src="https://www.youtube.com/embed/eDnRdYmGWiI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <p class="skills" style={{textAlign: "justify"}}>
                  This application is used for movies and booking through the online
                </p>
                <h2 class="myskills">
                  Project Domain and tools
                </h2>
                <p class="skills" >
                  This application developed by using the following programming languages and tools 

                </p>
                <ul>
                  <li>Frontend - Html , Css ,React js,Bootstrapes</li>
                </ul>
                <div>
                  <ul class="nav nav-pills justify-content-center">
                    <li class="nav-item">
                      <a class="nav-link active"
                      href={
                        "https://github.com/Haaaarriharan/project-10---movies-bookings"
                      }>
                        Github Link For Project Source code
                      </a> 
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>



          <div class="container">
            <div class="row" >
              <div class="col-sm-12">
                <h2 class="myskills" style={{textAlign: "justify"}}>
                  Web application for conducting a Quiz competition through online
                </h2>
                <div class="embed-responsive embed-responsive-16by9" >
                <iframe width="560" height="315" src="https://www.youtube.com/embed/N5KMQ7hrW1k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <p class="skills" style={{textAlign: "justify"}}>
                  This application is used for a quiz competition through the online
                </p>
                <h2 class="myskills">
                  Project Domain and tools
                </h2>
                <p class="skills" >
                  This application developed by using the following programming languages and tools 

                </p>
                <ul>
                  <li>Frontend - Html , Css ,React js,Bootstrapes</li>
                </ul>
                <div>
                  <ul class="nav nav-pills justify-content-center">
                    <li class="nav-item">
                      <a class="nav-link active"
                      href={
                        "https://github.com/Haaaarriharan/project-11---Quiz-competitions"
                      }>
                        Github Link For Project Source code
                      </a> 
                    </li>
                  </ul>
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

export default Project;
