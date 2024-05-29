/*React Hooks*/
import { useState, useEffect } from "react"
/*react-router-dom*/
import { Link } from "react-router-dom"
/*Styles*/
import './Styles/Cart.css'
/*Components*/
import { TitleSection } from "../components/TitleSection"
/*Images*/
import Tennis1 from './Imgs/Tennis/Tennis1.jpg'
/*Icons*/
import { IoIosArrowBack } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";

export function CartSection(){

    const [counterProducts, setCounterProducts] = useState(0)

    const lessProduct = () => {
        counterProducts <= 1 ? setCounterProducts(1) : setCounterProducts(counterProducts - 1)
    }

    
    const plusProduct = () => {
            setCounterProducts(counterProducts + 1)
    }   

    return(
        <>
        {TitleSection('Carrito de compras')}

            <div className="cartMain">
                <div className="containerBack">
                    <Link className ='cartLinks' to = '/'><h2><IoIosArrowBack />Volver</h2></Link>
                </div>

                <div className="containerCart">
                    <div className="tableCartContainer">
                        <table className="tableContainer">
                            <thead className="containerHead">
                                <tr>
                                    <th>Nombre del Producto</th>
                                    <th>Imagen de referencia</th>                                
                                    <th className="none">Cantidad</th>
                                    <th>SubTotal</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="containerProducts">
                                    <td>Nike Balzer Low 79</td>
                                    <td><img className="TennisImage" src={Tennis1} alt="imageTennis" /></td>
                                    <td className="none">
                                        <button className="plusLess" onClick={lessProduct}>-</button>
                                            <span className="quantity">{counterProducts}</span>
                                        <button className="plusLess" onClick={plusProduct}>+</button>
                                    </td>
                                    <td>$580.200</td>
                                    <td><FaRegTrashAlt /></td>
                                </tr>                                
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="paymentMethod">
                        <h2>🔥Entrega🔥</h2>
                        <p>
                            Ver todas las opciones de envio y metodos de pago
                            que incluyen los diferentes plazos y precios calculados
                            segun la ciudad de recepcion del envio.
                        </p>

                        <button className="calculateProducts">
                            Calcular <MdArrowForwardIos />
                        </button>

                        <div className="paymentTotal">
                            <article>
                                <span>Subtotal:</span>
                                <span>$580.200</span>
                            </article>
                            <article>
                                <span>Total:</span>
                                <span>$580.200</span>
                            </article>
                        </div>

                        <button className="calculateProducts">
                            <Link className="calculateProducts" to='/Login'><MdAttachMoney /> Pagar tus productos <MdAttachMoney /></Link>
                        </button>

                        <div className="continueBuying">
                            <Link className="cartLinks" to='/ShopNow'><IoIosArrowBack />Seguir Comprando</Link>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}