/*Components*/
import { TitleSection } from "../components/TitleSection"
/*Images*/
import ModelsAbout from './Imgs/About/ModelsAbout.jpg'
/*Styles*/
import './Styles/AboutUs.css'

export function AboutUs(){
    return(
        <>
            {TitleSection('Sobre Nosotros')}
            <div className="containerAboutUs">
                <h2>🔍Sobre Nosotros🔎</h2>            
            <div className="containerAbout">                
                <img className="ImagenProduccion" src={ModelsAbout} alt="ImagenProduccion" />
                <div className="containerText">
                    <h2>Vendemos mucho mas que calzado</h2>
                    <p>
                        Bienvenidos a Shoe Fast Store, tu destino en línea para 
                        encontrar el calzado perfecto que se adapta a tu estilo y 
                        necesidades. Nuestra historia comenzó con una visión clara y
                        una pasión por el diseño de calzado, todo inspirado por 
                        nuestro fundador, Iván Palmar.
                        <br />
                        <br />
                        Iván Palmar, un entusiasta del calzado y emprendedor nato, soñaba 
                        con crear una plataforma donde la moda y la comodidad se unieran 
                        en perfecta armonía. Con años de experiencia en la industria y un 
                        agudo sentido del estilo, Iván decidió convertir su sueño en 
                        realidad. Así nació Shoe Fast Store, un e-commerce dedicado
                        a ofrecer una selección especial de zapatos que combinan calidad, 
                        diseño y funcionalidad.
                    </p>
                    <br />                    
                    <h2>Nuestra Mision</h2>
                    <p>
                        En Shoe Fast Store, nuestra misión es transformar la
                        experiencia de compra de calzado. Nos esforzamos por ofrecer a
                        nuestros clientes no solo productos excepcionales, sino también 
                        una experiencia de compra fácil y agradable. Creemos que cada 
                        paso que das es importante, por lo que trabajamos incansablemente
                        para asegurarnos de que cada par de zapatos en nuestra colección
                        esté a la altura de tus expectativas.
                    </p>
                    <br />
                    <h2>Nuestro Compromiso</h2>                    
                    <p>
                        Estamos comprometidos a brindarte no solo los mejores zapatos, 
                        sino también la mejor experiencia de compra. En Shoe Fast Store,
                        cada cliente es parte de nuestra familia, y trabajamos arduamente 
                        para que te sientas valorado y satisfecho con cada compra.
                    <br />
                    <br />
                    Únete a nuestra comunidad y descubre por qué Shoe Fast Store es el 
                    destino favorito para los amantes del calzado. Síguenos en nuestras
                     redes sociales, suscríbete a nuestro boletín informativo y mantente
                    al tanto de las últimas tendencias y ofertas exclusivas.
                    <br />
                    <br />
                    Gracias por elegir Shoe Fast Store. Estamos encantados de 
                    acompañarte en cada paso de tu camino.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}