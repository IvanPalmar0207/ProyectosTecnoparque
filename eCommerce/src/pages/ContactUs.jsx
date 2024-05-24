/*Components*/
import { TitleSection } from "../components/TitleSection";
/*Images*/
import ModelContact from './Imgs/ModelContact.jpg'
/*Styles*/
import './Styles/ContactUs.css'

export function ContactSection(){
    return(
        <>
            {TitleSection('Contacta Shoe Store')}
            <div>                       
                <section className="sectionContact">
                    <article className="contactMessage">
                        <p>
                            Si deseas realizar algun tipo de sugerencia para realizar el release de nuevos pares
                            de calzado que te puedan interesar nos puedes enviar un mensaje completando el formulario que 
                            pide tu nombre, tus apellidos, tu numero de telefono, tu email y por ultimo un mensaje en 
                            el que escribiras la inquietud que deseas presentar al soporte tecnico de ShoeFastStore. 👌🪄🌅
                        </p>    
                    </article>               

                    <h2 className="formTitle">Envia un mensaje a ShoeFastStore🥾👟</h2>

                    <div className="formContact">
                        <form className="containerFormContact">
                        
                            <input className="fields" type="text" placeholder="Nombres" required/>

                            <br />
                        
                            <input className="fields" type="text" placeholder="Apellidos" required/>

                            <br />
                                            
                            <input className="fields" type="text" placeholder="Numero de telefono" required/>

                            <br />
                        
                            <input className="fields" type="email" placeholder="Email" required/>

                            <br />
                
                            <textarea className='fieldsArea' name="description" rows={8} cols={40} placeholder="Escribe tu mensaje"></textarea>                        

                            <br />

                            <div className="containerButtons">
                                <input className="buttonContact" type="reset" value="Borrar"/>
                                <input className='buttonContact' type="submit" value="Enviar"/>
                            </div>

                        </form>

                        <img className="modelImage" src={ModelContact} alt="imageForm" />

                    </div>

                </section>
            </div>
        </>    )
}