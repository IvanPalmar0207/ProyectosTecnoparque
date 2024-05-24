/*Components*/
import { TitleSection } from "../components/TitleSection";
/*Images*/
import RegisterVideo from './Imgs/Register/RegisterVideo.mp4'
import Tennis8 from './Imgs/Tennis/Tennis8.jpg'
/*Styles*/
import './Styles/Register.css'

export function RegisterSection(){
    return(
        <>
            {TitleSection('Contacta Shoe Store')}
            <div>                       
                <section className="sectionContact">          

                    <h2 className="formTitleRegister">🔥 Registrate facil y rapido con Shoe Fast Store 🔥</h2>

                    <div className="formContact">
                        <form className="containerFormContact" action="Login">
                        
                            <input className="fields" type="text" placeholder="Nombres" required/>

                            <br />
                        
                            <input className="fields" type="text" placeholder="Apellidos" required/>

                            <br />                            
                        
                            <input className="fields" type="email" placeholder="Email" required/>
                                
                            <br />                            

                            <input className="fields" type="text" placeholder="Numero de contacto" required/>                                                            
                            
                            <br />

                            <input className="fields" type="password" placeholder="Contraseña" required/>
                                                            

                            <br />

                            <input className="fields" type="password" placeholder="Confirmar Contraseña" required/>
                                
                            <br />

                            <div className="containerButtons">
                                <input className="buttonContact" type="reset" value="Eliminar"/>
                                <input className='buttonContact' type="submit" value="Siguiente"/>
                            </div>

                        </form>

                        <video className="modelImage" src={RegisterVideo} poster={Tennis8} alt="videoForm" autoPlay loop muted controls/>

                    </div>

                </section>
            </div>
        </>    
    )
}