import React from 'react';
//import {Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom"

var index=require('./components/index');
var about=require('./components/about');
var cosmeticServices=require('./components/cosmeticServices');
var generalServices=require('./components/generalServices');
var surgicalServices=require('./components/surgicalServices');
var form=require('./components/form');


function App()
{
  // render()
  // {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <p>
          Dr Shetty's Total Dental Care
        </p>  
      </header>
      <br/>
      <Route path="/" component={index}></Route>
      <Route path="/about" component={about}></Route>
      <Route path="/cosmeticServices" component={cosmeticServices}></Route>
      <Route path="/generalServices" component={generalServices}></Route>
      <Route path="/surgicalServices" component={surgicalServices}></Route>
      <Route path="/bookAppointment" component={form}></Route>

    </div>
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
  