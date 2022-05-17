import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class index extends Component
{
    render()
    {
        return(

            
            <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">hi</Link>
            <h1>hello guys</h1>
            <div class="container-fluid" max-width="100%" >
    
            <ul class="navbar-nav">
            <li class="nav-item">About</li>
            <li class="nav-item">Services</li>
            <li class="nav-item">Contact</li>
            <li class="nav-item">Book Appointment</li>
            </ul>
            </div>

            </nav>

        )
    }
    
}
export default index;

