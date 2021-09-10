import React from 'react'
import { Link } from 'react-router-dom'
import FundoPartners from '../images/partners.png'
import Mendes from '../images/mendes.png'
import Jaine from '../images/jaine.png'
import Nascoliver from '../images/nascoliver.png'
import Ailson from '../images/ailson.png'
import Brazil from '../images/tagBrazil.png'
import Bretanha from '../images/tagBret.png'

export default function Partners(){
    
    return(
        <div className='wrapperPartners'>
            <img src={FundoPartners} className='fundoPartners' alt='fundoPartners'/>
            <div className='topPartners'>
                <h1>edsilva7878</h1>
                <div className='tags'>
                <Link to="/partnerst">
                    <img src={Brazil} className='brazil' alt='brazil'/>
                </Link>
                <Link to="/partners">
                    <img src={Bretanha} className='bretanha' alt='bretanha'/>
                </Link>
                </div>   
                <Link to="/homet" className='buttonPartners'>INICIO</Link>
                <Link to="/skillst" className='buttonPartners'>SOBRE</Link>
                <Link to="/contactst" className='buttonPartners'>CONTATO</Link>
                <Link to="/partnerst" className='buttonPartners'>PARCEIROS</Link>
            </div>
            <div className='containerPartners'>
                <div className='cardPartners1'>
                <div className='individualCardPartners'>
                    <a href="http://mendes10segurosesaude.com.br/" target="_blank" rel="noreferrer">
                        <img src={Mendes} className='img' alt='whats'/>
                    </a>
                        <p className='txt'>CORRETORA DE SEGUROS </p>
                    </div>
                    <div className='individualCardPartners'>
                    <a href="https://next-dev-danilo.vercel.app/" target="_blank" rel="noreferrer">
                        <img src={Nascoliver} className='img' alt='tel'/>
                    </a>
                        <p className='txt'>DESENVOLVEDOR FRONTEND</p>
                    </div>
                    <div className='individualCardPartners'>
                    <a href="https://jaine665.wixsite.com/jainesilva" target="_blank" rel="noreferrer">
                    <img src={Jaine} className='img' alt='email'/>
                    </a>
                        <p className='txt'>COMUNICAÇÃO VISUAL</p>
                    </div>
                    <div className='individualCardPartners'>
                    <a href="https://ailsontenorio.netlify.app/" target="_blank" rel="noreferrer">
                        <img src={Ailson} className='img' alt='linkedin'/>
                    </a>
                        <p className='txt'>CONSULTORIA JURÍDICA </p>
                    </div>
              </div>
                <div className='cardPartners2'>
                    <div>
                        <h1>
                            SAIBA MAIS SOBRE OS SERVIÇOS OFERECIDOS POR NOSSOS PARCEIROS
                        </h1>
                </div>
                </div>
                <div className='footerPartners'>
                    <h1>www.edsilva7878.com.br</h1>

            </div>
            </div>
        </div>
    )
}