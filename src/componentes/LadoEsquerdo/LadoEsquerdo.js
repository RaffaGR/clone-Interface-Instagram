import './LadoEsquerdo.css'

import logo from './imagensLE/Instagram-Logo-PNG-Pic-Background.png'

import ItemMenu from './componentes/itemMenu'

import { AiFillInstagram } from "react-icons/ai";
/* Minha duvida, por acaso cada icone é uma funtion? pq eles são colocados no import e não no from
Respondida, é pq aceita imagem tbm */
export default function LadoEsquerdo() {
    return(
        <div className="LadoEsquerdo">
            <div className='logo'>
                <img src={logo} alt='logotype' />
            </div>
            <div className="menu-principal">
                <span>
                    <span className='icone'>@</span>
                    <span className='texto'>as</span>
                </span>
                <span>
                    <span>@</span>
                    <span>tx</span>
                </span>
                <ItemMenu icone={<AiFillInstagram /> }texto='txt'/>
                <ItemMenu icone='text2' texto=' txt2'/>
                
            </div>
        </div>
    )
}