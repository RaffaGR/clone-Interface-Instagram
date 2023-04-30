import './Post.css';
import iconCoration from '../icons/coracao.png';
import iconComent from '../icons/bate-papo.png';
import iconCompart from '../icons/instagram-direto.png';
import iconMark from '../icons/marca.png';


// props = propriedade

export default function Post(props) {
    return(
        <div className='Post'>
            <div className="BarraSuperior">
                <div className="ImagemPerfilAutor"><img alt="Text" src={props.imagemPerfil}/> </div>
                <div className="NomePerfilAutor">{props.nomePerfil}</div>
                <div className="MenuBarraSuperior">...</div>
            </div>
            <div className="ConteudoPost"><img alt="text" src={props.imagemPost} /></div>
            <div className="BarraInferior">
                <div><img alt='icons' src={iconCoration} /></div>
                <div><img alt='icons' src={iconComent} /></div>
                <div><img alt='icons' src={iconCompart} /></div>
                <div><img alt='icons' src={iconMark} /></div>
            </div>
        </div>

    )
}