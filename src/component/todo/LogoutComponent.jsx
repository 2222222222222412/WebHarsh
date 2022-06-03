import React,{Component} from 'react'
import {BrowserRouter as  Router,Link,Navigate,NavLink,Route,Routes, useParams} from 'react-router-dom'
import AuthenticationService  from './AuthenticationService.js';


class LogoutComponent extends Component{
    render()
   {
       
       return(
           <div className='Logout'>
              <h1>You are Logged Out</h1>
              <div className='container'>
                  Thank You For Using Our Application
              </div>
           </div>
       )
   } 
}

export default LogoutComponent