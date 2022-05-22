import React from 'react';
//import {Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom"

import Index from './components/index.component'; 
import about from './components/about';
import cosmeticServices from './components/cosmeticServices';
import generalServices from './components/generalServices';
import surgicalServices from './components/surgicalServices';
import form from './components/form';


function App()
{
  // render()
  // {
  return (
    <Router basename='/'>

      
      <Route path="/about" component={about}></Route>
      <Route exact path="/" component={Index}></Route>
     
      <Route path="/cosmeticServices" component={cosmeticServices}></Route>
      <Route path="/generalServices" component={generalServices}></Route>
      <Route path="/surgicalServices" component={surgicalServices}></Route>
      <Route path="/bookAppointment" component={form}></Route>
      
     
    </Router>
  );
}




export default App;

// class App extends Component {
//   constructor(props)
//   {
//     super(props);
//     this.state={apiResponse:""}
  
  // callAPI()
  // {
  //   fetch("http://localhost:27017/").then(res=>res.text()).then(res=>this.setState({apiResponse:res})).catch(err=>err);

  // }
  // componentDidMount()
  // {
  //   this.callAPI();
  // }
  