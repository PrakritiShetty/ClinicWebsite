import React, {Component}   from 'react';
import Carousel from 'react-bootstrap/Carousel'  
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
        
        <nav className="navbar-brand" style={{fontFamily:"Times New Roman"}}>
        <ul className="navbar-nav">
        <li className="navbar-item" >
        <p className="navbar-item" style={{fontFamily:"Lucida Handwriting"}}>Dr Shetty's</p>
        <p className="nav-brand" style={{textAlign:"center", fontFamily:"Lucida Handwriting"}}><span class="mb-0 h1">TOTAL DENTAL CARE</span></p>
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
        {/* <iframe width="100%" height="315"
        src="https://youtube.com/embed/36MEJbSidMg?controls=0&autoplay=true&muted=1">
        </iframe> */}

        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./images/cat2.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./images/cat3.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./images/cat1.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

              
        </div>
    );
    }
    
}

