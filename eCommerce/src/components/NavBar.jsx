/*React Hooks*/
import { Link } from "react-router-dom"
/*Estilos*/
import * as Icon from 'react-bootstrap-icons';

import './Styles/navBar.css';

export function NavBar(){
    return (        
        <nav>   
            <div className="containerName">Shoe Fast Store</div>
            <div className="containerWindow">
                <ul className="containerOptions">
                    <li className="optionsLabel">
                        <Link className="linkOption" to='/'>Home</Link>    
                    </li>
                    <li className="optionsLabel">
                        <Link className="linkOption" to='AboutUs'>Sobre nosotros</Link>
                    </li>
                    <li className="optionsLabel">
                        <Link className="linkOption" to='ShopNow'>Shop Now</Link>
                    </li>
                    <li className="optionsLabel">
                        <Link className="linkOption" to='Contact'>Contactanos</Link>
                    </li>
                </ul>
            </div>          

            <div className="cointanerNetowrks">
                <ul className="containerIcons">
                    <li className="iconNet">
                        <Link className="linkIcon" to='Register'>Crear Cuenta</Link>
                    </li>
                    <li className="iconNet">
                        <Link className="linkIcon" to='Login'>Login</Link>
                    </li>
                    <li className="iconNet">
                        <Link className="linkIcon" ><Icon.Cart/></Link>
                    </li>
                </ul>
            </div>            

        </nav>        
    )
}