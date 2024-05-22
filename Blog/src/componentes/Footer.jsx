/*Icons*/
import * as Icon from 'react-bootstrap-icons';
import { MdEmail } from "react-icons/md";
/*Styles*/
import './Styles/Footer.css'

export function FooterPage(){
    return (
        <footer>
            <div className='containerText'>
                <p>Copyright © 2024 - 2024 Ivan Palmar</p>
            </div>  
            <div className='containerText'>
                <div className='containerIconsFooter'>        
                    <div>
                        <a className="linkIconFooter" href="mailto:2iamicda3@gmail.com" target="_blank" rel="noopener noreferrer"><MdEmail /></a>
                    </div>
                    <div>
                        <a className="linkIconFooter" href="https://wa.me/3125074414" target="_blank" rel="noopener noreferrer"><Icon.Whatsapp/></a>
                    </div>
                    <div>
                        <a className="linkIconFooter" href="https://www.instagram.com/9suspect7?igsh=MTZxY211MHRtNXNzcQ%3D%3D" target='_blank' rel="noopener noreferrer"><Icon.Instagram/></a>
                    </div>
                </div>
            </div>
            <div className='containerText'>
                <p>Designed by <span>Ivan David Palmar Martinez</span></p>
            </div>
        </footer>
    )
}