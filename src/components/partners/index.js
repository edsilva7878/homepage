import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
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
                <Link to="/" className='buttonPartners'>HOME</Link>
                <Link to="/skills" className='buttonPartners'>ABOUT</Link>
                <Link to="/contacts" className='buttonPartners'>CONTACT</Link>
                <Link to="/partners" className='buttonPartners'>PARTNERS</Link>
            </div>
            <div className='containerPartners'>
                <div className='cardPartners1'>
                <div className='individualCardPartners'>
                    <a href="http://mendes10segurosesaude.com.br/" target="_blank" rel="noreferrer">
                        <img src={Mendes} className='img' alt='whats'/>
                    </a>
                        <p className='txt'> INSURANCE BROKER</p>
                    </div>
                    <div className='individualCardPartners'>
                    <a href="https://next-dev-danilo.vercel.app/" target="_blank" rel="noreferrer">
                        <img src={Nascoliver} className='img' alt='tel'/>
                    </a>
                        <p className='txt'>FRONTEND DEVELOPER</p>
                    </div>
                    <div className='individualCardPartners'>
                    <a href="https://jaine665.wixsite.com/jainesilva" target="_blank" rel="noreferrer">
                    <img src={Jaine} className='img' alt='email'/>
                    </a>
                        <p className='txt'>VISUAL COMMUNICATION</p>
                    </div>
                    <div className='individualCardPartners'>
                    <a href="https://ailsontenorio.netlify.app/" target="_blank" rel="noreferrer">
                        <img src={Ailson} className='img' alt='linkedin'/>
                    </a>
                        <p className='txt'>LEGAL ADVICE</p>
                    </div>
              </div>
                <div className='cardPartners2'>
                    <div>
                        <h1>
                            FIND OUT MORE ABOUT THE SERVICES OFFERED BY OUR PARTNERS
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