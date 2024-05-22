/*Components*/
import { TitlePage } from "../componentes/TitleSection";
/*Styles*/
import './Styles/MainPage.css'
/*violinRoute*/
import Violin1 from './imgs/violinRoute/Violin1.jpg';
import Violin2 from './imgs/violinRoute/Violin2.jpg';
import Violin3 from './imgs/violinRoute/Violin3.jpg';
import Violin4 from './imgs/violinRoute/Violin4.jpg';
/*Capital*/
import Capital1 from './imgs/Capital/Capital1.jpg';
import Capital2 from './imgs/Capital/Capital2.jpg';
import Capital3 from './imgs/Capital/Capital3.jpg';
import Capital4 from './imgs/Capital/Capital4.jpg';
/*Comicon*/
import Comicon1 from './imgs/Comicon/Comicon1.jpg';
import Comicon2 from './imgs/Comicon/Comicon2.jpg';
import Comicon3 from './imgs/Comicon/Comicon3.jpg';
import Comicon4 from './imgs/Comicon/Comicon4.jpg';
/*MotardTimes*/
import Moto1 from './imgs/MotardTimes/Moto1.jpg';
import Moto2 from './imgs/MotardTimes/Moto2.jpg';
import Moto3 from './imgs/MotardTimes/Moto3.jpg';
import Moto4 from './imgs/MotardTimes/Moto4.jpg';

export function MainPage(){    
    
    return(    
        <>        
        {TitlePage('Pagina Principal')}
        <section className="containerMP">
            <div className="containerSection">
                <h2>La ruta del violin</h2>
                <div className="containerImagesMP">
                    <img className="imageMainPage" src={Violin1} alt="violinRoute" />
                    <img className="imageMainPage" src={Violin2} alt="violinRoute" />
                </div>
                <div className="containerImagesMP">
                    <img className="imageMainPage" src={Violin3} alt="violinRoute" />
                    <img className="imageMainPage" src={Violin4} alt="violinRoute" />
                </div>
                <h3>Fecha de Creacion: <span>8 de Marzo de 2024</span></h3>
                <p>
                    Un gran violinista de las calles de la fria y cruel ciudad de Bogota ha querido
                    representar a traves de su arte, las melodias mas puras que un humano pueda escuchar,
                    desea que el mundo conozca que hay mas alla de la calle y lo malos vicios y deseo 
                    compartir su arte para inspirar a aquellas personas que les falta un gran acorde en su vida.
                </p> 
            </div>
            <div>
            </div>
            <div className="containerSection">
                <h2>Comicon 2023</h2>                
                <div className="containerImagesMP">
                    <img className="imageMainPage" src={Comicon1} alt="violinRoute" />
                    <img className="imageMainPage" src={Comicon2} alt="violinRoute" />
                </div>
                <div className="containerImagesMP">
                    <img className="imageMainPage" src={Comicon3} alt="violinRoute" />
                    <img className="imageMainPage" src={Comicon4} alt="violinRoute" />
                </div>
                <h3>Fecha de Creacion: <span>7 de Agosto de 2023</span></h3> 
                <p>
                    El evento mas grande del pais en terminos de cultura japonesa, se pueden
                    evidenciar todo tipo de representacion de vestimentas a personajes muy 
                    conocidos en el anime desde Dragon Ball, Naruto o cualquier otro tipo de
                    programa televisivo que seguramente marco tu infancia. 
                </p> 
            </div>
            <div className="containerSection">
                <h2>Inauguracion de la Capital</h2>
                <div className="containerImagesMP">
                    <img className="imageMainPage" src={Capital1} alt="violinRoute" />
                    <img className="imageMainPage" src={Capital2} alt="violinRoute" />
                </div>
                <div className="containerImagesMP">
                    <img className="imageMainPage" src={Capital3} alt="violinRoute" />
                    <img className="imageMainPage" src={Capital4} alt="violinRoute" />
                </div>
                <h3>Fecha de Creacion: <span>20 de Febrero de 2024</span></h3> 
                <p>
                    Un gran lugar donde se pueden apreciar familias, conocidos y gente nueva que
                    desea experimentar un momento de tranquilidad junto con sus mas allegados, y 
                    para cumplir el sueño de muchos se realizo la inauguracion del restaurante 
                    la Capital. 
                </p> 
            </div>
            <div className="containerSection">
                <h2>Motard Times</h2>
                <div className="containerImagesMP">
                    <img className="imageMainPage" src={Moto1} alt="violinRoute" />
                    <img className="imageMainPage" src={Moto2} alt="violinRoute" />
                </div>
                <div className="containerImagesMP">
                    <img className="imageMainPage" src={Moto3} alt="violinRoute" />
                    <img className="imageMainPage" src={Moto4} alt="violinRoute" />
                </div>
                <h3>Fecha de Creacion: <span>2 de Febrero de 2023</span></h3> 
                <p>
                    Un grupo de amigos motociclistas tienen las ganas de conquistar el
                    mundo simplemente llendo a tope de velocidad con una adrenalina que
                    no se puede explicar pero que si se puede reflejar en las diferentes
                    fotografias que pudieron capturar el momento preciso de la accion.
                </p>
            </div>
        </section>
        </>
    )
}