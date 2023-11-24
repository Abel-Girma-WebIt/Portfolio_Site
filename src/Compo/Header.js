import React from 'react'

export default function Header(){

return(

<div id="header_cont">

  <h1 id="header_name">Abel</h1>

  <ul id="header_ul">
      <li className="header_list">Home</li>
      <li className="header_list">About</li>
      <a href="#skills_sec"><li className="header_list" >Skills</li></a>

      <a href="#Services_sec"><li className="header_list">Service</li></a>
      
      <li className="header_list">Portfolio</li>
      <li className="header_list">Contact</li>
 

  </ul>

</div>

)

}