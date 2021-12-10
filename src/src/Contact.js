import React, { Component } from 'react';
import ReactDom from "react-dom";
import {FaGithub} from "react-icons/fa";
import {BsLinkedin, BsYoutube,BsInstagram,BsFacebook, BsTwitter} from "react-icons/bs";
import "./App.css";


class Contact extends Component {
    constructor(){
        super();
        this.state ={
          subject:"",body:""
        };
      
    }
    validateForm =event =>{
      var subject =document.getElementById("subject").value;
      var body =document.getElementById("body").value;
      window.location.href ="mailto:yourmailid?subject="+subject +"&body=" +body;
      event.preventDefault();
      return false;
    };

        
    
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
            {/*Email verification*/}
            
            <div class="container" id="mailme">
              <div class="row">
                <div class="col-sm-8">
                  <form class="form-horizontal"
                   onSubmit={this.validateForm}
                    target="_blank"
                     mathod="GET"
                     >
                    <div class="form-group form-group-lg">
                      <label class="skills font-weight-bolder" for="subject" >
                        Name
                      </label>
                      <input 
                      type="text"
                      id="subject"
                      class="form-control"
                      />
                    </div>
                    <div class="form-group form-group-lg">
                      <label class="skills font-weight-bolder" for="Body">
                        your Message
                      </label>
                      <textarea id="body" class="form-control" rows="5" required />
                    </div>
                    <input 
                    type="submit"
                    value="send"
                    id="navigation"
                    class="btn btn-primary"
                    />

                  </form>
                </div>
              </div>
            </div>
            <div class="container">
              <h1><span class="font-weight-bolder">Mail id : </span><u>hari074980@gmail.com</u></h1>
              <h1><span class="font-weight-bolder">Contact number :</span><u>9629945032</u> </h1>
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
  
  
          </body>
        )
    }
}

export default Contact;


