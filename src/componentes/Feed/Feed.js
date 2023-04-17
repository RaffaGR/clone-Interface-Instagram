import './Feed.css';

import Post from './Post/Post'

import nomeImagem001 from './Post/Imagens/haranha.jpg';
import nomeImagem002 from './Post/Imagens/download.jpg';
import nomeImagem003 from './Post/Imagens/download2.png';
import nomeImagem004 from './Post/Imagens/homem-aranha-.jpg';
import nomeImagem005 from './Post/Imagens/milosMurilos.jpg';
import nomeImagem006 from './Post/Imagens/Venom.jpeg';
import nomeImagem007 from './Post/Imagens/R.png';

import imagemPerfil001 from './Post/Imagens/R.png';
import imagemPerfil002 from './imagemPerfil/perfil1.jpg';
import imagemPerfil003 from './imagemPerfil/perfil2.jpg';
import imagemPerfil004 from './imagemPerfil/perfil3.jpg';
import imagemPerfil005 from './imagemPerfil/perfil4.jpg';
import imagemPerfil006 from './imagemPerfil/perfil2.jpg';
import imagemPerfil007 from './imagemPerfil/perfil1.jpg';

export default function Feed() {
    return (
        <div className="Feed">
            <Post nomePerfil="Dudu" imagemPost={nomeImagem001} imagemPerfil={imagemPerfil001}/>
            <Post nomePerfil="Lulu" imagemPost={nomeImagem002}
            imagemPerfil={imagemPerfil002}/>
            <Post nomePerfil="Gugu" imagemPost={nomeImagem003}
            imagemPerfil={imagemPerfil003}/>
            <Post nomePerfil="Bugu" imagemPost={nomeImagem004}
            imagemPerfil={imagemPerfil004}/>
            <Post nomePerfil="Tutu" imagemPost={nomeImagem005}
            imagemPerfil={imagemPerfil005}/>
            <Post nomePerfil="Babu" imagemPost={nomeImagem006}
            imagemPerfil={imagemPerfil006}/>
            <Post nomePerfil="Lulu" imagemPost={nomeImagem007}
            imagemPerfil={imagemPerfil007}/>
        </div>
    )
}