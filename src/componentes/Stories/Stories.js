import './Stories.css'
import Story from './componentes/Story/Story';

import imagem1 from '../Feed/imagemPerfil/perfil1.jpg';
var nome = "text";


export default function Stories() {
    return (
        <div className="Stories">
            <Story imgPerfil={imagem1} nomeDaConta={nome} />
            <Story imgPerfil={imagem1} nomeDaConta="Text" />
            <Story imgPerfil={imagem1} nomeDaConta="Text" />
            <Story imgPerfil={imagem1} nomeDaConta="Text" />
            <Story imgPerfil={imagem1} nomeDaConta="Text" />
            <Story imgPerfil={imagem1} nomeDaConta="Text" />
        </div>
        )
}
