import React from "react";
import {FaGithub} from "react-icons/fa";
import {BsLinkedin, BsYoutube,BsInstagram,BsFacebook, BsTwitter} from "react-icons/bs";
import "./App.css";

class Home extends React.Component {
  constructer(props) {
    


  }
  render() {
    return (
      <body>
        <div class="heading">

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
          <div class="container">
            <div class="row">
              <div class="col-sm-4">
                <div class="rounded-circle">
                  <img
                    src="https://scontent.fmaa12-1.fna.fbcdn.net/v/t1.6435-9/c0.106.960.960a/s526x395/71844447_957658011257059_1255380066871803904_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=j1BHMg1A24QAX8hKzcy&_nc_oc=AQlQP3PtQpBc033yM8XLqx7KwTmMfl45H-4bTv_rMkXbj5O7zrOTgnYplw7n_bhlbDpoAi5Wr-EjQi3Q2RcUTWHK&_nc_ht=scontent.fmaa12-1.fna&oh=adec9b1084070cf3eca6730d10a00c8f&oe=61AE3249"
                    class="rounded-circle mx-auto d-block"
                    alt="photo"
                    width="130px"
                    height="150px"
                  />
                </div>
                <br />
              </div>

              <div class="col-sm-8">
                <h2 class="myskills"><span class="spinner-grow text-primary"></span>Career Objective<span class="spinner-grow text-primary"></span></h2>
                <br />
                <p class="skills font-weight-bolder">
                  To work in a professional environment where i can find myself
                  in decisive oppertunities for creating value added career for
                  myself extend quality service to my organization
                </p>
              </div>
            </div>
          </div>
          <br />
          <div class="container">
            <div class="row">
              <div class="col-sm-6">
                <h2 class="myskills"><span class="spinner-grow text-primary"></span>Technical Skills<span class="spinner-grow text-primary"></span></h2>
                <br/>
                <ul class="skills font-weight-bolder" >
                  <li>
                    Front End Languages -HTML,CSS,REACT JS,JAVA SCRIPT,Bootstrapes,SCSS
                  </li>
                </ul>
              </div>
                <div class ="col-sm-6">
                  <h2 class = "myskills"><span class="spinner-grow text-primary"></span>Intenship And Certification<span class="spinner-grow text-primary"></span></h2>
                  <br/>
                  <ul class="skills font-weight-bolder">
                    <li>
                      I have done my Web Development course in the Eduraka internship program
                    </li>
                    <li>
                      I have done my React projects in the Projects in the learnmall online program
                    </li>
                  </ul>
                </div>
                <br/>
                <div class="col-sm-12">
                  <h2 class="myskills"> My Project</h2>
                  <table class="table  bg-dark table-hover text-primary table-borderless">
                    <thead>
                      <tr>
                        <th><h4>Project Domain</h4></th>
                        <th><h4>Programming Languages</h4></th>
                        <th><h4>Project Link</h4></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Front End Development</td>
                        <td>HTML,CSS,JAVASCRIPT,BOOTSTRAPS,SCSS,React js</td>
                        <td><a href={"https://github.com/Haaaarriharan/project2-Tourist"}>Web application for the tourist</a></td>

                      </tr>
                      <tr>
                        <td> web Application</td>
                        <td>HTML,CSS,JAVASCRIPT,React JS,BOOTSTRAPS</td>
                        <td><a href={"https://github.com/Haaaarriharan/project-5---grocery-bud-list"}>Application which is used for remainding and maintaining the grocery list </a></td>

                      </tr>
                      <tr>
                        <td>Front End Development</td>
                        <td>HTML,CSS,JAVASCRIPT,BOOTSTRAPS</td>
                        <td><a href={"https://github.com/Haaaarriharan/project-10---movies-bookings"}>Application for download the movie </a></td>


                      </tr>

                    </tbody>
                    
                  </table>

                <br />
                </div>
                <div class="col-sm-12">
                  <h2 class="myskills">Education Qualification</h2>
                  <table class="table  bg-dark table-hover text-primary table-borderless">
                    <thead>
                      <tr>
                        <th><h4>Degree</h4></th>
                        <th><h4>School/Collage</h4></th>
                        <th><h4>Year of Passing</h4></th>
                        <th><h4>Percentage</h4></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>BE-CIVIL</td>
                        <td><span class="font-weight-bolder text-danger">[Collage]</span>-United Institute of Technology</td>
                        <td>2021</td>
                        <td>71%</td>

                      </tr>
                      <tr>
                        <td><span class="font-weight-bolder text-danger">[-]</span></td>
                        <td><span class="font-weight-bolder text-danger">[School]</span>-Pioneer Mills Higher sec.school</td>
                        <td><span class="font-weight-bolder text-danger">[10th]</span>- in 2015</td>
                        <td><span class="font-weight-bolder text-danger">[10th]</span>- 89%</td>

                        
                      </tr>
                      <tr>
                        <td><span class="font-weight-bolder text-danger">[Group]</span>ComputerScience</td>
                        <td><span class="font-weight-bolder text-danger">[School]</span>-Pioneer Mills Higher sec.school</td>
                        <td><span class="font-weight-bolder text-danger">[12th]</span>-in 2017</td>
                        <td><span class="font-weight-bolder text-danger">[12th]</span>- 75%</td>

                        
                      </tr>
                     
                    </tbody>
                    
                  </table>

                <br />
                </div>
              
            </div>
            
          </div>
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
                <a href ="http://www.facebook.com/spatanzzhari.hari"  style={{color:"blue"}}>
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
        </div>
      </body>


    );
  }
}

export default Home;
