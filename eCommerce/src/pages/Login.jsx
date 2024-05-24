/*React-router-dom*/
import { Link } from "react-router-dom"
/*Components*/
import { TitleSection } from "../components/TitleSection"
/*Styles*/
import './Styles/Login.css'
/*Icons*/
import { SiGmail } from "react-icons/si";

export function LoginSection(){
    return(
        <>
            {TitleSection('Contacta Shoe Store')}
            <div>                       
                <section className="sectionContact">          

                    <h2 className="formTitleLogin"> 💎 Inicia sesion con SFS 👟</h2>

                    <div className="formContact">
                        <form className="containerFormContact" action="/">
                        
                            <input className="fields" type="email" placeholder="Email" required/>

                            <br />                            
                        
                            <input className="fields" type="password" placeholder="Contraseña" required/>
                                
                            <br />                            

                            <input className="fields" type="password" placeholder="Confimar Contraseña" required/>
                                
                            <br />                                                        

                            <div className="containerButtonsLogin">                                
                                <Link to='/'><button><SiGmail /></button></Link>
                            </div>

                            <div className="containerResetPass">
                                <Link className='resetPassword' to='/'>Cambiar contraseña</Link>
                            </div>

                            <div className="containerButtons">
                                <input className="buttonContact" type="reset" value="Eliminar"/>
                                <input className='buttonContact' type="submit" value="Siguiente"/>
                            </div>

                        </form>

                    </div>

                </section>
            </div>
        </>    

    )
}