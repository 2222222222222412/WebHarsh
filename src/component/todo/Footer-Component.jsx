import React,{Component} from 'react'
import {BrowserRouter as  Router,Link,Navigate,NavLink,Route,Routes, useParams} from 'react-router-dom'
import AuthenticationService  from './AuthenticationService.js';




class FooterComponent extends Component{
    render()
   {
       return(
            <footer className='footer'>
                <span className='text-muted'>All Right Reserved @2022 Harsh Vardhan</span>
            </footer>
       )
   } 
}

export default FooterComponent