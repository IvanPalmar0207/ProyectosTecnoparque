/*Components*/
import { TitlePage } from "../componentes/TitleSection"
/*Styles*/
import './Styles/AboutUs.css'
/*Images*/
import ModelLeft from './imgs/ModelLeft.jpg'
import ModelRight from './imgs/ModelRight.jpg'
import ModelBarber from './imgs/ModelBarber.jpg'

export function AboutUs(){
    return(
        <>
            {TitlePage('Sobre nosotros')}
            <section className="mainSection">
                <h2>Sobre Nosotros</h2>
                <p>
                    Ofrecemos servicios de Producción y Postproducción
                    Audiovisual enfocados en resaltar personas, marcas y eventos.
                    Nos especializamos en mejorar tu presencia en redes sociales y
                    atraer una audiencia más amplia, aumentando tu visibilidad en
                    línea y creando recuerdos duraderos. Estamos comprometidos
                    en potenciar tu presencia en línea y ofrecer experiencias
                    memorables a ti y a tus clientes. Nos especializamos en cualquier tipo 
                    de eventos tanto masivos como de unas cuantas personas que participen en
                    cualquier tipo de celebracion.
                </p>
            </section>
            <section className="containerServicesSection">            
                <img src={ModelLeft} alt="imageServices" />
                <div className="servicesSection">
                    <h2>Nuestros Servicios</h2> 
                    <ul>
                        <li>
                            Produccion de Video 📽️
                        </li>
                        <br />
                        <li>
                            Edicion y Postproduccion 📹
                        </li>
                        <br />
                        <li>
                            Fotografia Profesional 📷
                        </li>
                        <br />
                        <li>
                            Cobertura para todo tipo de ocasion 🎉
                        </li>
                        <br />
                        <li>
                            Servicio Excepcional 🎀
                        </li>
                        <br />
                        <li>
                            Retratos - Videos 🖼️
                        </li>
                    </ul>
                </div>
            </section>
            <section className="containerCategoriesSection">                
                <div className="categoriesSection">
                    <h2>Categoria de Servicios</h2>
                    <ul>
                        <li>
                            Salones de Belleza 💋
                        </li>
                        <br />
                        <li>
                            Retratos Versatiles 🖼️
                        </li>
                        <br />
                        <li>       
                            Comercial(Productos y Servicios) 🚹
                        </li>
                        <br />
                        <li>
                            Locaciones 🛤️
                        </li>
                        <br />
                        <li>
                            Eventos 🎉
                        </li>
                        <br />
                        <li>    
                            Podcast 🎤
                        </li>
                        <br />
                        <li>    
                            Video Clips 📽️
                        </li>
                        <br />
                    </ul>
                </div>
                <img  src={ModelRight} alt="categoriesImage" />
            </section>
            <section className="containerBarberShopSection">
                <img src={ModelBarber} alt="barberShopImage" />
                <div className="barberShopSection">
                    <h2>Salones de Belleza</h2>
                    <p>
                        ¡Déjate cautivar por la magia de un clip como nunca antes! Desde su llegada
                        hasta el último adiós, nuestro proceso audiovisual captura los momentos más
                        valiosos de tu experiencia. Disfruta de la consulta inicial, el relajante lavado, la
                        creatividad del estilismo y la confianza renovada frente al espejo. Cada
                        instante se convierte en un tesoro atemporal. ¡Prepárate para ser la estrella de
                        tu propia historia de estilo!
                    </p>
                    <div className="pricesSection">
                        <ul>
                            <li>Proceso a color: $100.000 🌅</li>
                            <li>Proceso de maquillaje o MakeUp: $90.000 🌆</li>
                            <li>Peinado y Styling: $40.000 🌤️</li>
                            <li>Reel antes y despues: $70.000 🌟</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}