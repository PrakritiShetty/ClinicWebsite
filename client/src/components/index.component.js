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
        
        <nav className="navbar-brand" style={{fontFamily:"Times New Roman", width:'100%'}}>
        <ul className="navbar-nav" style={{backgroundImage: 
        "url('./images/background1.webp')",
        width:'100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'space'}}>
        <li className="navbar-item" >
        
        <p className="navbar-item" style={{fontFamily:"Lucida Handwriting"}}
        >Dr Shetty's</p>
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
        <ul className="navbar-nav me-auto">
          <li style={{fontFamily:"Lucida Handwriting"}}><em><b>Dr Sandhya Shankar Shetty</b></em> & <em><b>Dr Pratiksha Shankar Shetty</b></em></li>
        </ul>
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
            className="d-block w-100 h-50"
            src="./images/graygeneral.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 style={{color:"black"}}><b>GENERAL</b></h1>
            <p style={{color:"black",fontFamily:"Lucida Handwriting"}}>Simple procedures for everyday problems</p>
            <button type="button" class="btn btn-outline-info me-1" >Fillings</button>
            <button type="button" class="btn btn-outline-info me-1" >Scaling</button>
            <button type="button" class="btn btn-outline-info me-1" >Crowns</button>
            <button type="button" class="btn btn-outline-info me-1" >Emergency</button>
            
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="d-block w-100 h-50"
            src="./images/graycosmetic.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1 style={{color:"black"}}><b>COSMETIC</b></h1>
            <p style={{color:"black", fontFamily:"Lucida Handwriting"}}>Enhancing the outward appearance of your teeth</p>
            <button type="button" class="btn btn-outline-info me-1 mb-1" >Whitening</button>
            <button type="button" class="btn btn-outline-info me-1 mb-1" >Aligners/Braces</button>
            <button type="button" class="btn btn-outline-info me-1 mb-1" >Bonding</button>
            <button type="button" class="btn btn-outline-info me-1 mb-1" >Veneers</button>
            <button type="button" class="btn btn-outline-info me-1" >Smile Design</button>
            <button type="button" class="btn btn-outline-info me-1" >Full Mouth Rehab</button>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="d-block w-100 h-50"
            src="./images/graysurgical.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1 style={{color:"black"}}><b>SURGICAL</b></h1>
            <p style={{color:"black", fontFamily:"Lucida Handwriting"}}>Slightly longer procedures for comprehensive care</p>
            <button type="button" class="btn btn-outline-info me-1 mb-1" >Implants</button>
            <button type="button" class="btn btn-outline-info me-1 mb-1" >Extractions</button>
            <button type="button" class="btn btn-outline-info me-1 mb-1" >Root Canals</button>
            <button type="button" class="btn btn-outline-info me-1 mb-1" >Periodontal Flaps</button>
          </Carousel.Caption>
          </Carousel.Item>
        </Carousel>



              
        </div>
    );
    }
    
}

