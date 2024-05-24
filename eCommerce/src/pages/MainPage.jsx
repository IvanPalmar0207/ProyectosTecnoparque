/*Components*/
import { TitleSection } from "../components/TitleSection"
/*Styles*/
import './Styles/MainPage.css';
/*Images*/
import MainRelease from './Imgs/MainPage/MainRelease.jpg'
import MenShoe from './Imgs/MainPage/MenShoe.jpg'
import WomenShoe from './Imgs/MainPage/WomenShoes.jpg'
import KidShoes from './Imgs/MainPage/KidShoes.jpg'
/*Icons*/
import { FaTruckFront } from "react-icons/fa6";
import { RiRefund2Line } from "react-icons/ri";
import { MdOutlinePayments } from "react-icons/md";
import { MdPrivacyTip } from "react-icons/md";

export function MainPage(){
    return (
        <>
            {TitleSection('Home')}
            <div className="mainSection">
                <h2 className="mainSectionTitle">🔥Lanzamiento Exclusivo de la semana🔥</h2>
                <div className="containerImageRelease">
                    <img className="imageRelease" src={MainRelease} alt="imageRelease" />
                </div>
                <div className="containerPerson">
                    <h2 className="titleCategoriesPerson">💸Compras por categoria💰</h2>
                    <div className="containerPersons">
                        <div className="personClass">
                            <img src={MenShoe} alt="imagePerson" />
                            <h2>Hombres 🧔🏻</h2>
                        </div>
                        <div className="personClass">
                            <img src={WomenShoe} alt="imagePerson" />
                            <h2>Mujeres 👩🏻</h2>
                        </div>
                        <div className="personClass">
                            <img src={KidShoes} alt="imagePerson" />
                            <h2>Niños 🧒🏻</h2>
                        </div>
                    </div>
                </div>
                <div className="containerRules">
                    <div className="ruleItem">
                        <div className="imageRule">
                            <FaTruckFront />
                        </div>
                        <h2>Envio Gratuito</h2>
                    </div>
                    <div className="ruleItem">
                        <div className="imageRule">
                            <RiRefund2Line />
                        </div>
                        <h2>Politica de Reembolso</h2>
                    </div>
                    <div className="ruleItem">
                        <div className="imageRule">
                            <MdOutlinePayments />
                        </div>
                        <h2>Pago Seguro</h2>
                    </div>
                    <div className="ruleItem">
                        <div className="imageRule">
                            <MdPrivacyTip />
                        </div>
                        <h2>Proteccion a la privacidad</h2>
                    </div>
                </div>                
            </div>
        </>
    )
}