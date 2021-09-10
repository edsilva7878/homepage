import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import FundoSkills from '../images/about.png'
import HTML from '../images/html.png'
import CSS from '../images/CSS.png'
import JS from '../images/js.png'
import REACT from '../images/frame.png'
import Brazil from '../images/tagBrazil.png'
import Bretanha from '../images/tagBret.png'

export default function Skillst(){
    
    return(
        <div className='wrapperSkills'>
            <img src={FundoSkills} className='fundoSkills' alt='fundoSkills'/>
            <div className='menuSkills'>
                <h1>edsilva7878</h1>
                <div className='tags'>
                <Link to="/skillst">
                    <img src={Brazil} className='brazil' alt='brazil'/>
                </Link>
                <Link to="/skills">
                    <img src={Bretanha} className='bretanha' alt='bretanha'/>
                </Link>
                </div>    
                <Link to="/" className='buttonSkills'>HOME</Link>
                <Link to="/skills" className='buttonSkills'>ABOUT</Link>
                <Link to="/contacts" className='buttonSkills'>CONTACT</Link>
                <Link to="/partners" className='buttonSkills'>PARTNERS</Link>
            </div>
            <div className='containerSkills'>
                <div className='cardSkills1'>
                    <div className='individualCardSkills'>
                        <img src={HTML} className='html' alt='html'/>
                        <h1>
                            HTML is the language used to build web pages,
                            from symbols used to mark as content
                            of the page should be displayed.
                        </h1>
                    </div>
                    <div className='individualCardSkills'>
                         <img src={CSS} className='html' alt='html'/>
                        <h1>
                            CSS is composed of layers and used to define 
                            the appearance of web pages that adopt markup 
                            languages ​​in their development.
                        </h1>
                    </div>
                    <div className='individualCardSkills'>
                        <img src={JS} className='html' alt='html'/>
                        <h1>
                            JavaScript is a dynamic programming language with 
                            features that provide interactivity to pages or 
                            applications.
                        </h1>
                    </div>
                    <div className='individualCardSkills'>
                        <img src={REACT} className='html' alt='html'/>
                        <h1>
                            React JS is a JavaScript library, used in the 
                            construction of interfaces, for fast, scalable 
                            and simple applications.
                        </h1>
                    </div>
                </div>
                <div className='cardSkills2'>
                    <div>
                        <h1>
                            DISCOVER THE TOOLS USED IN THE DEVELOPMENT 
                            OF APPLICATIONS
                        </h1>
                </div>
                </div>
                <div className='footerSkills'>
                    <h1>www.edsilva7878.com.br</h1>

            </div>
            </div>
        </div>
    )
}