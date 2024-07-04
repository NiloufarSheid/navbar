
import logo from "./logo.png"
import links  from "./data"
import { FaBars} from 'react-icons/fa';
import networks from "./Social";


const Navbar = () => {
  return (
    <nav>
 <div className='container'>
   <div className='nav-logo'>
    <button className="nav-toggle">
      <FaBars />
      </button>
    <img src={logo} alt=''/>
   </div>


   <div className='nav-links'>
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