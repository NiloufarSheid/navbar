
import logo from "./logo.png"
import links  from "./data"
import { FaBars} from 'react-icons/fa';
import networks from "./Social";
import { useState } from "react";


const Navbar = () => {
  const[showLinks,setShowLinks]=useState(false);
  return (
    <nav>
 <div className='container'>
   <div className='nav-logo'>
    <button className="nav-toggle" onClick={()=>setShowLinks(!showLinks)}>
      <FaBars />
      </button>
    <img src={logo} alt=''/>
   </div>


   {
    showLinks && <div className='nav-links'>
    <ul>
{
  links.map((link) => {
    const { id,url,text } = link;
    return (
      <li key={id}>
        <a href={url}>{text}</a>
      </li>
    );
  })
}
    </ul>
   </div>
   }


   <ul className="nav-socials">
{
  networks.map((network) => {
    const { id,url,icon } = network;
    return (
      <li key={id}>
        <a href={url}>{icon}</a>
      </li>
    );
  })
}
    </ul>


   



  

</div>
    </nav>
   
  );
}

export default Navbar;