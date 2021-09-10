import React from 'react'
import { Link } from 'react-router-dom'
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
                <Link to="/homet" className='buttonSkills'>INICIO</Link>
                <Link to="/skillst" className='buttonSkills'>SOBRE</Link>
                <Link to="/contactst" className='buttonSkills'>CONTATO</Link>
                <Link to="/partnerst" className='buttonSkills'>PARCEIROS</Link>
            </div>
            <div className='containerSkills'>
                <div className='cardSkills1'>
                    <div className='individualCardSkills'>
                        <img src={HTML} className='html' alt='html'/>
                        <h1>
                            HTML é a linguagem usada para a construção de páginas Web, 
                            a partir de símbolos utilizados para marcar como o conteúdo
                            da página deverá ser apresentado.
                        </h1>
                    </div>
                    <div className='individualCardSkills'>
                         <img src={CSS} className='html' alt='html'/>
                        <h1>
                            CSS é composta por camadas e utilizada para definir a aparência 
                            em páginas da internet que adotam em seu desenvolvimento linguagens 
                            de marcação.
                        </h1>
                    </div>
                    <div className='individualCardSkills'>
                        <img src={JS} className='html' alt='html'/>
                        <h1>
                            JavaScript é uma linguagem de programação dinâmica com recursos 
                            que fornecem interatividade ás páginas ou aplicações. 
                        </h1>
                    </div>
                    <div className='individualCardSkills'>
                        <img src={REACT} className='html' alt='html'/>
                        <h1>
                            React JS é uma biblioteca JavaScript, utilizada na 
                            construção de interfaces, para aplicações rápidas, 
                            escaláveis e simples.
                        </h1>
                    </div>
                </div>
                <div className='cardSkills2'>
                    <div>
                        <h1>CONHEÇA AS FERRAMENTAS UTILIZADAS NO  DESENVOLVIMENTO 
                            DAS APLICAÇÕES
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