import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Index extends Component
{
    render()
    {
        return(

        <div style={{margin:10, fontFamily:"Georgia"}}>
        <header>
        <nav className="navbar  bg-secondary navbar-expand-sm container-fluid">      
        <ul className="navbar-nav ms-auto" >          
            <li className="navbar-item px-1"><img src="./images/facebookLogo.png" height="25" width="25" ></img></li>
            <li className="navbar-item "><img src="./images/instagramLogopng.png" height="25" width="25" ></img></li>
            <li className="navbar-item px-1"><img src="./images/linkedinLogopng.png" height="25" width="25" ></img></li>
            <li className="navbar-item "><p style={{fontSize:10, margin:10, color:"white"}}>Copyright@2022</p></li>  
        </ul>        
        </nav>
        
        <nav className="navbar-brand" style={{fontFamily:"Georgia"}}>
        <ul className="navbar-nav">
        <li className="navbar-item" >
        <p className="nav-brand"><span class="mb-0 h1">Dr Shettys' Total Dental Care</span></p>
        </li>
        <li className="navbar-item ms-auto" >
        <p class="form-check form-switch ms-auto">
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label class="form-check-label" for="flexSwitchCheckDefault" style={{fontSize: '10px'}}>Theme</label>
        </p>
          </li>         
        </ul>
       
        </nav>

        </header>
        <nav className="navbar navbar-dark bg-light navbar-expand-lg">
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="navbar-item" >
          <p className="nav-link" style={{color:"grey"}}>About</p>
          </li>
          <li className="navbar-item" >
          <p className="nav-link" style={{color:"grey"}}>Services</p>
          </li>         
        </ul>
        <button type="button" class="btn btn-dark" style={{margin:5}}>
            Book an Appointment
        </button>
        </div>
        </nav>

        {/* <video width="100%"  autoplay>
            <source src="https://youtu.be/36MEJbSidMg" type="video"></source>
            Your browser does not support the video tag.
        </video> */}
        <iframe width="100%" height="315"
        src="https://youtube.com/embed/36MEJbSidMg?controls=0&autoplay=true&muted=1">
        </iframe>




        </div>


           
        

        );
    }
    
}

