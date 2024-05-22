/*React Hooks*/
import { Link } from "react-router-dom"
/*Estilos*/
import * as Icon from 'react-bootstrap-icons';
import { MdEmail } from "react-icons/md";

import './Styles/navBar.css';
import iconBlog from './imgs/LogoSuspect.png';

export function NavBar(){
    return (        
        <nav>   
            <div className="containerIcon"><img className="iconBlog" src={iconBlog} alt="IconoBlog" /></div>
            <div className="containerWindow">
                <ul className="containerOptions">
                    <li className="optionsLabel">
                        <Link className="linkOption" to='/'>Paginal Principal</Link>    
                    </li>
                    <li className="optionsLabel">
                        <Link className="linkOption" to='AboutUs'>Sobre nosotros</Link>
                    </li>
                    <li className="optionsLabel">
                        <button className="contactButton"><Link className="buttonText" to='ContactUs'>Contactanos</Link></button>
                    </li>
                </ul>
            </div>          

            <div className="cointanerNetowrks">
                <ul className="containerIcons">
                    <li className="iconNet">
                        <a className="linkIcon" href="mailto:2iamicda3@gmail.com" target="_blank" rel="noopener noreferrer"><MdEmail /></a>
                    </li>
                    <li className="iconNet">
                        <a className="linkIcon" href="https://www.instagram.com/9suspect7?igsh=MTZxY211MHRtNXNzcQ%3D%3D" target='_blank' rel="noopener noreferrer"><Icon.Instagram/></a>
                    </li>
                    <li className="iconNet">
                        <a className="linkIcon" href="https://wa.me/3125074414" target="_blank" rel="noopener noreferrer"><Icon.Whatsapp/></a>
                    </li>
                </ul>
            </div>            

        </nav>        
    )
}