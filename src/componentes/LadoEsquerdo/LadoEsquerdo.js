import './LadoEsquerdo.css';

import Usuario from '../Usuario/Usuario';
import iUser from '../Feed/Post/Imagens/devJunior.png';

import logo from './imagensLE/Instagram-Logo-PNG-Pic-Background.png';

import ItemMenu from './componentes/itemMenu';

import { AiOutlineSearch } from "react-icons/ai";
import { MdHomeFilled } from "react-icons/md";
import { IoCompassOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdAddCircleOutline } from "react-icons/io";
/* Minha duvida, por acaso cada icone é uma funtion? pq eles são colocados no import e não no from
Respondida, é pq aceita imagem tbm */
/* let text = "         Instagram"; */
export default function LadoEsquerdo() {
    return(
        <div className="LadoEsquerdo">
            <div className='logo'>
                <img classname='log1' src={logo} alt='logotype' />
                <img classname='log1' src={logo} alt='logotype' />
                <span>{/* {text} */}</span>
            </div>
            <div className="menu-principal">
                {/* <span>
                    <span className='icone'>@</span>
                    <span className='texto'>as</span>
                </span>
                <span>
                    <span>@</span>
                    <span>tx</span>
                </span> */}
                <ItemMenu icone={<MdHomeFilled /> } texto='Página Inicial' />
                <ItemMenu icone={<AiOutlineSearch /> }texto='Pesquisar'/>
                <ItemMenu icone={<IoCompassOutline />} texto='Explorar'/>
                <ItemMenu icone={<img src="https://img.icons8.com/windows/32/null/speech-bubble--v1.png" />} texto='Mensagens'/>
                <ItemMenu icone={<IoIosHeartEmpty />} texto='Notificações'/>
                <ItemMenu icone={<IoMdAddCircleOutline /> }texto='Criar'/>
                <Usuario iconUser={iUser} texto='Dev_Junior'/>
            </div>
        </div>
    )
}