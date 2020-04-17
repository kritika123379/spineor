import Navabout from '../Common/About/Aboutinsights/navabout'
import Navservices from '../Common/About/Aboutinsights/navservices'
import Link from "next/link"
import About from '../Common/About'

import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

 
 const header = (props) => {
    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);

     return (
         <React.Fragment>
         <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
          <div className="menubar" style={{backgroundColor:"#fffffff",color:"black"}}><DropdownToggle  >
           About
         </DropdownToggle>
         </div>
          <div className="menu" > <DropdownMenu>
           <div className="menuitem"><DropdownItem  style={{color:"#ffffff"}}>Who We Are </DropdownItem></div>
           <div className="menuitem1"><DropdownItem style={{color:"#ffffff"}}>Our Infrastructure</DropdownItem></div>
           <div className="menuitem2" ><DropdownItem style={{color:"#ffffff"}}>Our Values</DropdownItem></div>
           <div  className="menuitem3"><DropdownItem style={{color:"#ffffff"}}>Events & Celebration</DropdownItem></div>
           <div className="menuitem4"><DropdownItem style={{color:"#ffffff"}}>FAQ</DropdownItem></div>
         </DropdownMenu>
         </div>
       </ButtonDropdown>
     
       <style jsx>{`
       .name{
       
       }
       .menubar{
        position: absolute;
        width: 45px;
        height: 16px;
        left: 480px;
        top: 30px; 
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px; 
        color: #000000;
        background-color:transparent
        
       }
       menu:hover {
        background:#184A88 ;
      }
      menuitem:hover{
        background:blue ;
      }
       .menu{
       background:#184A88;
       }
       .menuitem{
        background:#184A88;
        height: 36px;
        left: 451px;
        top: 91px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 200%;   
       }
       .menuitem1{
        height: 31px;
        left: 451px;
        top: 132px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 200%; 
        color: #FFFFFF;
        background:#184A88
       }
       .menuitem2{
        background:#184A88;
        height: 31px;
        left: 451px;
        top: 168px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 200%;
        color: #FFFFFF;
       }
       .menuitem3{
        background:#184A88;
        width: 182px;
        height: 33px;
        left: 451px;
        top: 204px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 200%;   
        color: #FFFFFF;
       }
       .menuitem4{
        width: 182px;
        height: 33px;
        left: 451px;
        top: 242px;
        background:#184A88;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 200%; 
        color: #FFFFFF;
       }
      
       `}</style>
             
       </React.Fragment>   
     );
 };
 

export default header