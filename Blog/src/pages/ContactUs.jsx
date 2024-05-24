/*Components*/
import { TitlePage } from "../componentes/TitleSection"
/*Icons*/
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
/*Styles*/
import './Styles/ContactUs.css'
import ModelForm from './imgs/ModelForm.jpg';

export function ContactUs(){
    return(
        <>
            {TitlePage('Contacta Suspect')}
            <div>        
                <section className="sectionNumber1">
                    <div className="infoTopic">
                        <div className="iconInfo">                        
                            <CiLocationOn />                        
                        </div>
                        <h2>Direccion</h2>
                        <br />
                        <p className="descriptionTopic">
                            En esta seccion podras encontrar en donde se encuentra alojada la compañia manejada                             
                            por David Zamora Pulido y Adriana Palmar donde podras hacer todo tipo de encargos cuando
                            te contactes directamente con la compañia y el personal encargado, podras contar con todo el catalogo
                            de servicios.
                        </p>
                        <br />                                        
                        <p className="mainTopic">Bogota, Villa del Rio</p>                        
                    </div>
                    <div className="infoTopic">
                        <div className="iconInfo">
                            <MdOutlinePhone />
                        </div>
                        <h2>Telefonos</h2>
                        <br />
                        <p className="descriptionTopic">
                            Te podras contactar con los referentes de la compañia por via telefonica para poder realizar el agendamiento
                            de las diferentes citas o compromisos que tu quieras realizar ya sea una sesion fotografica, un video clip o multiples clips
                            con un fin especifico de conmemoracion o de un evento especial donde se requiere un fotografo de 
                            alta calidad como lo es David Antonio Zamora Pulido.
                        </p>
                        <br />                        
                        <p className="mainTopic">+57 312 5074414</p>                                            
                        <p className="mainTopic">+57 323 3261230</p>                        
                    </div>
                    <div className="infoTopic">
                        <div className="iconInfo">
                            <MdEmail />
                        </div>                        
                        <h2>Correos</h2>
                        <br />
                        <p className="descriptionTopic">
                            Los dos correos electronicos estan habilitados para enviar un mensaje con cualquier tipo de duda o sugerencia
                            que se pueda presentar con alguno de los contratos, trabajos o sesiones ya realizadas por el artista, el fin de 
                            habilitar los correos es poder facilitar a los clientes cualquie informacion de una manera rapida o formal.
                        </p>
                        <br />                        
                        <p className="mainTopic">2iamicda3@gmail.com</p>                        
                        <p className="mainTopic">palmartinez.adrii@gmail.com</p>                                                
                    </div>
                </section>
                <section className="sectionNumber2">
                    <article className="contactMessage">
                        <p>
                            Si deseas realizar alguna sugerencia o deseas contratar algun tipo de servicio por favor escribe tu mensaje 
                            completando el formulario donde tendras que digitar tu nombre, tus apellidos, tu numero de telefono, tu correo 
                            electronico, tu mensaje, y por ultimo tambien puedes elegir el tipo de servicio que deseas contratar
                            haciendo click y elegiendo una opcion de la lista desplegable.📷🚨🕋
                        </p>    
                    </article>               

                    <h2 className="formTitle">Envia un mensaje a SusxPHxecT</h2>

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

                            <select className="fieldsSelect" name="services" id="services" >                           
                                <option>Elige un servicio a contratar</option>
                                <option value="#">Fotografia de Eventos</option>
                                <option value="#">Fotografia de Productos</option>
                                <option value="#">Fotografia NewBorn</option>
                                <option value="#">Banco de Imagenes</option>
                            </select>

                            <br />

                            <div className="containerButtons">
                                <input className="buttonContact" type="reset" value="Borrar"/>
                                <input className='buttonContact' type="submit" value="Enviar"/>
                            </div>

                        </form>

                        <img className="modelImage" src={ModelForm} alt="imageForm" />

                    </div>

                </section>
            </div>
        </>
    )
}