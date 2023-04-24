import './Post.css';

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
        </div>

    )
}