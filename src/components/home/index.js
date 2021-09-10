import React from 'react'
import './styles.css'
import FundoHome from '../images/home.png'
import { Link } from 'react-router-dom'
import Brazil from '../images/tagBrazil.png'
import Bretanha from '../images/tagBret.png'
export default function Home(){
    return(
        <div className='wrapperHome'>
            <img src={FundoHome} className='fundoHome' alt='fundoHome'/>
            <div className='menuHome'>
                <h1>edsilva7878</h1>
                <div className='tags'>
                <Link to="/homet">
                    <img src={Brazil} className='brazil' alt='brazil'/>
                </Link>
                <Link to="/">
                    <img src={Bretanha} className='bretanha' alt='bretanha'/>
                </Link>
                </div>    
                <Link to="/" className='buttonHome'>HOME</Link>
                <Link to="/skills" className='buttonHome'>ABOUT</Link>
                <Link to="/contacts" className='buttonHome'>CONTACT</Link>
                <Link to="/partners" className='buttonHome'>PARTNERS</Link>
            </div>
                <div className='containerHome'>
                <div className='cardHome1'></div>
                <div className='cardHome2'>
                    <div>
                        <h1>HI, I AM EDUARDO SILVA AND THIS IS MY HOME PAGE</h1>
                       
                    </div>
                </div>
                <div className='footerHome'>
                    <h1>www.edsilva7878.com.br</h1>

            </div>
            </div>
        </div>
    )
}