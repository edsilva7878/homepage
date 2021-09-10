import React from 'react'
import { Link } from 'react-router-dom'
import FundoContact from '../images/contact.png'
import Whats from '../images/whats.png'
import Email from '../images/email.png'
import Linkedin from '../images/linkedin.png'
import Git from '../images/git.png'
import Brazil from '../images/tagBrazil.png'
import Bretanha from '../images/tagBret.png'

export default function Contacts(){
    
    return(
        <div className='wrapperContacts'>
            <img src={FundoContact} className='fundoContacts' alt='fundoContacts'/>
            <div className='topContacts'>
                <h1>edsilva7878</h1>
                <div className='tags'>
                <Link to="/contactst">
                    <img src={Brazil} className='brazil' alt='brazil'/>
                </Link>
                <Link to="/contacts">
                    <img src={Bretanha} className='bretanha' alt='bretanha'/>
                </Link>
                </div>    
                <Link to="/homet" className='buttonContacts'>INICIO</Link>
                <Link to="/skillst" className='buttonContacts'>SOBRE</Link>
                <Link to="/contactst" className='buttonContacts'>CONTATO</Link>
                <Link to="/partnerst" className='buttonContacts'>PARCEIROS</Link>
            </div>
            <div className='containerContacts'>
                <div className='cardContacts1'>
                    <div className='individualCardContacts'>
                    <img src={Whats} className='whats' alt='whats'/>
                        <p>55 (11) 99250-6743 </p>
                    </div>
                    <div className='individualCardContacts'>
                    <img src={Email} className='email' alt='email'/>
                        <p>edsilva7878@gmail.com</p>
                    </div>
                    <div className='individualCardContacts'>
                    <img src={Linkedin} className='linkedin' alt='linkedin'/>
                        <p>edsilva7878</p>
                    </div>
                    <div className='individualCardContacts'>
                    <img src={Git} className='git' alt='git'/>
                        <p>edsilva7878</p>
                    </div>
              </div>
                <div className='cardContacts2'>
                    <div>
                        <h1>FIQUE A VONTADE PARA ENTRAR EM CONTATO E CRIAR UM PROJETO</h1>
                </div>
                </div>
                <div className='footerContacts'>
                    <h1>www.edsilva7878.com.br</h1>

            </div>
            </div>
        </div>
    )
}