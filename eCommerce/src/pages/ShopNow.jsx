/*React Hooks*/
import { Link } from "react-router-dom"
/*Images*/
import Tennis1 from './Imgs/Tennis/Tennis1.jpg'
import Tennis2 from './Imgs/Tennis/Tennis2.jpg'
import Tennis3 from './Imgs/Tennis/Tennis3.jpg'
import Tennis4 from './Imgs/Tennis/Tennis4.jpg'
import Tennis5 from './Imgs/Tennis/Tennis5.jpg'
import Tennis6 from './Imgs/Tennis/Tennis6.jpg'
import Tennis7 from './Imgs/Tennis/Tennis7.jpg'
import Tennis8 from './Imgs/Tennis/Tennis8.jpg'
import Tennis9 from './Imgs/Tennis/Tennis9.jpg'
import Tennis10 from './Imgs/Tennis/Tennis10.jpg'
import Tennis11 from './Imgs/Tennis/Tennis11.jpg'
import Tennis12 from './Imgs/Tennis/Tennis12.jpg'
/*Styles*/
import './Styles/ShopNow.css';

export function ShopNow(){
    return(
        <div className="shopSection">
            <h2 className="shopTitle">✨Compra y Recibe al instante💰</h2>
            <br />
            <div className='containerItems'>
                <div className="containerItem">
                    <img className="itemImage" src={Tennis1} alt="itemImage" />
                    <h2 className="itemName">Nike Blazer Low 79</h2>
                    <br />
                    <p className="itemPrice">$580.200</p>
                    <br />
                    <div className='containerButton'>
                        <Link className='cartButtonItem' to='Cart'>Agregar al Carrito</Link>
                    </div>
                </div>
                <div className="containerItem">
                    <img className="itemImage" src={Tennis2} alt="itemImage" />
                    <h2 className="itemName">Nike Renew Run 4</h2>
                    <br />
                    <p className="itemPrice">$484.950</p>
                    <br />
                    <div className='containerButton'>
                        <Link className='cartButtonItem' to='Cart'>Agregar al Carrito</Link>
                    </div>
                </div>
                <div className="containerItem">
                    <img className="itemImage" src={Tennis3} alt="itemImage" />
                    <h2 className="itemName">Nike Air Max</h2>
                    <br />
                    <p className="itemPrice">$1.014.950</p>
                    <br />
                    <div className='containerButton'>
                        <Link className='cartButtonItem' to='Cart'>Agregar al Carrito</Link>
                    </div>
                </div>
                <div className="containerItem">
                    <img className="itemImage" src={Tennis4} alt="itemImage" />
                    <h2 className="itemName">Nike Air Force 1 '07</h2>
                    <br />
                    <p className="itemPrice">$759.950</p>
                    <br />
                    <div className='containerButton'>
                        <Link className='cartButtonItem' to='Cart'>Agregar al Carrito</Link>
                    </div>
                </div>
            </div>
            <div className='containerItems'>
                <div className="containerItem">
                    <img className="itemImage" src={Tennis5} alt="itemImage" />                
                    <h2 className="itemName">Red Converse</h2>
                    <br />
                    <p className="itemPrice">$1.334.000</p>
                    <br />
                    <div className='containerButton'>
                        <Link className='cartButtonItem' to='Cart'>Agregar al Carrito</Link>
                    </div>
                </div>
                <div className="containerItem">
                    <img className="itemImage" src={Tennis6} alt="itemImage" />
                    <h2 className="itemName">Nike Air Max 90 Lv8</h2>
                    <br />
                    <p className="itemPrice">$809.950</p>
                    <br />
                    <div className='containerButton'>
                        <Link className='cartButtonItem' to='Cart'>Agregar al Carrito</Link>
                    </div>
                </div>
                <div className="containerItem">
                    <img className="itemImage" src={Tennis7} alt="itemImage" />
                    <h2 className="itemName">Air Jordan 1 Dior</h2>
                    <br />
                    <p className="itemPrice">$20.000.000</p>
                    <br />
                    <div className='containerButton'>
                        <Link className='cartButtonItem' to='Cart'>Agregar al Carrito</Link>
                    </div>
                </div>
                <div className="containerItem">
                    <img className="itemImage" src={Tennis8} alt="itemImage" />
                    <h2 className="itemName">Adidas Yeezy Boost 350 V2 Carbon</h2>
                    <br />
                    <p className="itemPrice">$1.699.000</p>
                    <br />
                    <div className='containerButton'>
                        <Link className='cartButtonItem' to='Cart'>Agregar al Carrito</Link>
                    </div>
                </div>
            </div>            
            <div className='containerItems'>
                <div className="containerItem">
                    <img className="itemImage" src={Tennis9} alt="itemImage" />
                    <h2 className="itemName">Nike Blazer</h2>
                    <br />
                    <p className="itemPrice">$649.950</p>
                    <br />
                    <div className='containerButton'>
                        <Link className='cartButtonItem' to='Cart'>Agregar al Carrito</Link>
                    </div>
                </div>
                <div className="containerItem">
                    <img className="itemImage" src={Tennis10} alt="itemImage" />
                    <h2 className="itemName">New Balance 10</h2>
                    <br />
                    <p className="itemPrice">$569.900</p>
                    <br />
                    <div className='containerButton'>
                        <Link className='cartButtonItem' to='Cart'>Agregar al Carrito</Link>
                    </div>
                </div>
                <div className="containerItem">
                    <img className="itemImage" src={Tennis11} alt="itemImage" />
                    <h2 className="itemName">Air Jordan 2</h2>
                    <br />
                    <p className="itemPrice">$867.000</p>
                    <br />
                    <div className='containerButton'>
                        <Link className='cartButtonItem' to='Cart'>Agregar al Carrito</Link>
                    </div>
                </div>
                <div className="containerItem">
                    <img className="itemImage" src={Tennis12} alt="itemImage" />                
                    <h2 className="itemName">Air Jordan 1 Classic</h2>
                    <br />
                    <p className="itemPrice">$4.000.000</p>
                    <br />
                    <div className='containerButton'>
                        <Link className='cartButtonItem' to='Cart'>Agregar al Carrito</Link>
                    </div>                
                </div>
            </div>            
        </div>
    )
}