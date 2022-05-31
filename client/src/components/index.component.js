import React   from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import {AiOutlineHome, AiOutlineFacebook, AiOutlineTwitter, AiOutlineLinkedin} from "react-icons/ai"  
import {Link} from 'react-router-dom';
import {Dropdown,DropdownToggle,DropdownMenu,DropdownItem} from "reactstrap";


export default class Index extends React.Component
{

    constructor(props) {
        super(props);
    
        this.toggle1 = this.toggle1.bind(this);
        this.toggle2 = this.toggle2.bind(this);
        
        // this.onMouseEnter = this.onMouseEnter.bind(this); 
        // this.onMouseLeave = this.onMouseLeave.bind(this);
        this.state = {
          dropdownOpen1: false,
          dropdownOpen2: false,
          
        };
      }
    
      toggle1() {
        this.setState(prevState => ({
          dropdownOpen1: !prevState.dropdownOpen1,
          
        }));
      }
      toggle2() {
        this.setState(prevState => ({
          dropdownOpen2: !prevState.dropdownOpen2
        }));
      }   
      


    render()
    {
    return(

      <div style={{margin:10, fontFamily:"Georgia"}}>
      <header>
          <nav className="navbar navbar-expand-sm container-fluid" style={{backgroundColor:"Purple"}}>
              <ul className="navbar-nav ms-auto">
                  <li className="navbar-item px-1"><img src="./images/facebookLogo.png" height="25" width="25"></img></li>
                  <li className="navbar-item "><img src="./images/instagramLogopng.png" height="25" width="25"></img></li>
                  <li className="navbar-item px-1"><img src="./images/linkedinLogopng.png" height="25" width="25"></img>
                  </li>
                  <li className="navbar-item ">
                      <p style={{fontSize:13, margin:10, color:"white"}}>Copyright@2022</p>
                  </li>
              </ul>
          </nav>
  
          <nav className="navbar-brand" style={{fontFamily:"Times New Roman", width:'100%'}}>
              <ul className="navbar-nav" style={{backgroundImage: "url('./images/back.png')",width:'100%',backgroundSize: 'cover',backgroundRepeat: 'space'}}>
                  <li className="navbar-item">
  
                      <p className="navbar-item" style={{fontFamily:"Lucida Handwriting"}}>Dr Shetty's</p>
                      </li>
                      <li className="navbar-item px-5">
                        <nav className="navbar navbar-expand-lg container-fluid">
                        <ul className="navbar-nav">
                      
                      <li><img src='./images/logotooth.png' height="100" width="200"></img></li>
                      
                      <li><p className="nav-brand" style={{textAlign:"center", fontFamily:"Georgia" ,fontSize:75}}>TOTAL DENTAL CARE</p></li>
                              </ul>
                              </nav>
                  </li>
                  {/* <li className="navbar-item ms-auto">
                      <p class="form-check form-switch ms-auto">
                          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                          <span><label class="form-check-label" for="flexSwitchCheckDefault"
                              style={{fontSize: '10px'}}>Theme</label></span>
                      </p>
                  </li> */}
              </ul>
  
          </nav>
  
      </header>
      
      <nav className="navbar navbar-dark navbar-expand-lg" style={{backgroundColor:"LavenderBlush"}}>
          <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto">
                  <li style={{fontFamily:"Lucida Handwriting"}}><em><b>Dr Sandhya Shankar Shetty</b></em> & <em><b>Dr
                              Pratiksha Shankar Shetty</b></em></li>
                  <br></br>
              </ul>
  
  
              <ul className="navbar-nav ms-auto">
                  <li className="navbar-item">
                  
                  <Dropdown className="d-inline" // onMouseOver={this.onMouseEnter} // onMouseLeave={this.onMouseLeave}
                        isOpen={this.state.dropdownOpen1} toggle={this.toggle1}>
                        <DropdownToggle caret>
                            About
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem ><a href="#" style={{textDecoration:"none"}}>Home</a></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                  </li>
                  <li className="navbar-item">
                      <p className="nav-link" style={{color:"grey"}}>Services</p>
                  </li>
              </ul>
              <button type="button" class="btn btn-dark" style={{margin:5}}>
                  Book an Appointment
              </button>
  
          </div>
      </nav>
      
    
 
  
  
      {/* <video width="100%" autoplay>
          <source src="https://youtu.be/36MEJbSidMg" type="video">
          </source>
          Your browser does not support the video tag.
      </video> */}
      {/* <iframe width="100%" height="315" src="https://youtube.com/embed/36MEJbSidMg?controls=0&autoplay=true&muted=1">
      </iframe> */}
  
  
  
      <Carousel>
          <Carousel.Item style={{height:"500px"}}>
            
              <img className="d-block w-100 h-100" src="./images/image3.webp" alt="First slide" />
              
              <Carousel.Caption>
              <div style={{backgroundColor:"rgba(255,255,255,.5)", height:"max-height", padding:"10px", borderRadius:"50px"}}>
                  <h1 style={{color:"black"}}><b>GENERAL</b></h1>
                  <p style={{color:"black",fontFamily:"Lucida Handwriting" , opacity:1}}>Simple procedures for everyday problems</p>
                  <button type="button" class="btn btn-outline-danger me-1"  ><b>Fillings</b></button>
                  <button type="button" class="btn btn-outline-danger me-1"><b>Scaling</b></button>
                  <button type="button" class="btn btn-outline-danger me-1"><b>Crowns</b></button>
                  <button type="button" class="btn btn-outline-danger me-1"><b>Emergency</b></button>
                  </div>
              </Carousel.Caption>
              
          </Carousel.Item>
          <Carousel.Item style={{height:"500px"}}>
              <img className="d-block w-100 h-100" src="./images/image2.jpg" alt="Second slide" height="100%" />
              <Carousel.Caption>
              <div style={{backgroundColor:"rgba(255,255,255,.5)", height:"max-height", padding:"10px", borderRadius:"50px"}}>
                  <h1 style={{color:"black"}}><b>COSMETIC</b></h1>
                  <p style={{color:"black", fontFamily:"Lucida Handwriting"}}>Enhancing the outward appearance of your
                      teeth</p>
                  <button type="button" class="btn btn-outline-danger me-1 mb-1"><b>Whitening</b></button>
                  <button type="button" class="btn btn-outline-danger me-1 mb-1"><b>Aligners/Braces</b></button>
                  <button type="button" class="btn btn-outline-danger me-1 mb-1"><b>Bonding</b></button>
                  <button type="button" class="btn btn-outline-danger me-1 mb-1"><b>Veneers</b></button>
                  <button type="button" class="btn btn-outline-danger me-1"><b>Smile Design</b></button>
                  <button type="button" class="btn btn-outline-danger me-1"><b>Full Mouth Rehab</b></button>
                  </div>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{height:"500px"}}>
              <img className="d-block w-100 h-100" src="./images/image1.webp" alt="Third slide" />
  
              <Carousel.Caption>
              <div style={{backgroundColor:"rgba(255,255,255,.5)", height:"max-height", padding:"10px", borderRadius:"50px"}}>
                  <h1 style={{color:"black"}}><b>SURGICAL</b></h1>
                  <p style={{color:"black", fontFamily:"Lucida Handwriting"}}>Slightly longer procedures for comprehensive
                      care</p>
                  <button type="button" class="btn btn-outline-danger me-1 mb-1"><b>Implants</b></button>
                  <button type="button" class="btn btn-outline-danger me-1 mb-1"><b>Extractions</b></button>
                  <button type="button" class="btn btn-outline-danger me-1 mb-1"><b>Root Canals</b></button>
                  <button type="button" class="btn btn-outline-danger me-1 mb-1"><b>Periodontal Flaps</b></button>
                  </div>
              </Carousel.Caption>
          </Carousel.Item>
      </Carousel>

      
    <br></br>
    <Card style={{ width: '100%', height:'max-height', backgroundColor:"LightPink" }}>

<Card.Body style={{scrollbarWidth:"none"}}>
    {/* <Card.Title style={{color:"black"}}>Name</Card.Title> */}
    <Card.Text style={{color:"black"}}>
    <nav className="navbar navbar-expand-sm container-fluid">
        <ul className="navbar-nav ms-auto">
        <li className="navbar-item"><img src="./images/cat3.jpg" style={{height:200, width:200, margin:20}}></img></li>
        <li style={{marginTop:20, fontSize:25}}>Dr Sandhya Shetty has completed her B.D.S from Government Dental College, Aurangabad. She has an experience of almost 30 years in the field. Rest assured, her work is of utmost quality and precision. Her interests include ABC and XYZ.<br></br>
        <br></br>
              <ul className="navbar-nav me-auto">
                  <li className="navbar-item px-3"><img src="./images/facebookLogo.png" height="50" width="50"></img></li>
                  <li className="navbar-item"><img src="./images/instagramLogopng.png" height="50" width="50"></img></li>
                  <li className="navbar-item px-3"><img src="./images/linkedinLogopng.png" height="50" width="50"></img>
                  </li>
                  
              </ul></li>
        </ul>
        </nav>
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
</Card.Body>
</Card>

<Card style={{ width: '100%', height:'max-height', backgroundColor:"LightPink" }}>
<Card.Body style={{scrollbarWidth:"none"}}>
    {/* <Card.Title style={{color:"black"}}>Name</Card.Title> */}
    <Card.Text style={{color:"black"}}>
        <nav className="navbar navbar-expand-sm container-fluid">
        <ul className="navbar-nav me-auto">
        
        <li style={{marginTop:20, fontSize:25}}>Dr Pratiksha Shetty has completed her B.D.S from Nair Hospital and Dental College, Mumbai. She is currently pursuing her M.D.S from Government Dental College, XYZ. Her interests include ABC and XYZ<br></br>
        <br></br>
              <ul className="navbar-nav ms-auto">
                  <li className="navbar-item px-3"><img src="./images/facebookLogo.png" height="50" width="50"></img></li>
                  <li className="navbar-item"><img src="./images/instagramLogopng.png" height="50" width="50"></img></li>
                  <li className="navbar-item px-3"><img src="./images/linkedinLogopng.png" height="50" width="50"></img>
                  </li>
                  
              </ul>
          </li>
        <li className="navbar-item"><img src="./images/cat1.jpg" style={{height:200, width:200, margin:20}}></img></li>
        
        </ul>
        </nav>
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
</Card.Body>
</Card>
    <br></br>
    <div style={{height:"500px"}}>

    <nav className="navbar  navbar-expand-sm container-fluid" style={{scrollbarWidth:"none",WebkitScrollbarDisplay:"none", backgroundColor:"LavenderBlush"}}>
        <ul className="navbar-nav me-auto" style={{ display: "grid",
gridAutoFlow: "column",
overflowX: "scroll",
overscrollBehaviorInline: "contain", }}>
            <li className="navbar-item px-3" style={{loading:"lazy", height:160}}>
                <Card style={{ width: '30rem', height:'10rem', backgroundColor:"rgba(100,0,0,.5)" }}>

                    <Card.Body style={{scrollbarWidth:"none"}}>
                        <Card.Title style={{color:"white"}}>Name</Card.Title>
                        <Card.Text style={{color:"white"}}>
                            Sample text
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </li>

            <li className="navbar-item px-3">
                <Card style={{ width: '30rem', height:'10rem',backgroundColor:"rgba(100,0,0,.5)" }}>

                    <Card.Body style={{scrollbarWidth:"none"}}>
                        <Card.Title style={{color:"white"}}>Name</Card.Title>
                        <Card.Text style={{color:"white"}}>
                            Sample text
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </li>
            <li className="navbar-item px-3" style={{loading:"lazy"}}>
                <Card style={{ width: '30rem' , height:'10rem', backgroundColor:"rgba(100,0,0,.5)"}}>

                    <Card.Body style={{scrollbarWidth:"none"}}>
                        <Card.Title style={{color:"white"}}>Name</Card.Title>
                        <Card.Text style={{color:"white"}}>
                            Sample text
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </li>
            <li className="navbar-item px-3" style={{loading:"lazy"}}>
                <Card style={{ width: '30rem' , height:'10rem', backgroundColor:"rgba(100,0,0,.5)" }}>

                    <Card.Body style={{scrollbarWidth:"none"}}>
                        <Card.Title style={{color:"white"}}>Name</Card.Title>
                        <Card.Text style={{color:"white"}}>
                            Sample text
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </li>
            <li className="navbar-item px-3" style={{loading:"lazy"}}>
                <Card style={{ width: '30rem', height:'10rem', backgroundColor:"rgba(100,0,0,.5)" }}>

                    <Card.Body style={{scrollbarWidth:"none"}}>
                        <Card.Title style={{color:"white"}}>Name</Card.Title>
                        <Card.Text style={{color:"white"}}>
                            Sample text
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </li>
        </ul>
    </nav>

    <nav className="navbar  bg-light navbar-expand-sm container-fluid">
        <ul className="navbar-nav">
         
            <li className="navbar-item px-6"><b><br></br><br></br><br></br>REACH US:</b> </li>
            <li className="navbar-item px-5"><br></br>Dr Shetty's Total Dental Care<br></br>Shop #9, Saidham Complex<br></br>P.K road
                Mumbai- 400076<br></br>Maharashtra, India <br></br> <br></br>+(91) 98XXXXXXXX</li>

<li>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.63998435371!2d72.94209841393148!3d19.167230054081532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8f7c2d76931%3A0xa2d85150fddd96c8!2sDr%20Sandhya&#39;s%20Total%20Dental%20Care!5e0!3m2!1sen!2sin!4v1653633865846!5m2!1sen!2sin" width="800" height="200" style={{border:0}} referrerpolicy="no-referrer-when-downgrade"></iframe>
                </li>
        </ul>
    </nav>

        <nav className="navbar  navbar-expand-sm container-fluid"
            style={{height:"max-height",backgroundColor:"Purple"}}>
            <ul className="navbar-nav me-auto" style={{color:"white"}}>
                <li className="navbar-item px-5"><br></br>
                    <h3>Position yourself with precision</h3>
                    <br></br><small>Call us at: +(91)98XXXXXXX</small> <br></br> <small>Email us at:
                        danger@example.com</small>
                </li>
                <li className="navbar-item px-5"><br></br>QUICK LINKS:<br></br><br></br>Home<br></br>About
                    Us<br></br>Technology<br></br>Careers<br></br>Documentation<br></br>Contact Us</li>
                <li className="navbar-item px-5"><br></br>ADDRESS:<br></br><br></br>Dr Shetty's Total Dental Care<br></br>Shop #9, Saidham Complex<br></br>P.K road
                Mumbai- 400076<br></br>Maharashtra, India
                    <br></br> <br></br>+(91) 98XXXXXXXX</li>
                <li className="navbar-item px-5"><br></br>SOCIAL:<br></br><br></br>
                    <AiOutlineFacebook size={30} />
                    <AiOutlineTwitter size={30} />
                    <AiOutlineLinkedin size={30} />
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>Copyright@2022</li>
            </ul>
        </nav>
    </div>

  
  
  
  
  </div>
    );
    }
    
}

