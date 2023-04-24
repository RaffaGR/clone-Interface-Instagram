import './Mensager.css';

export default function Mensager(propriedades) {
    return(
        <div className="Mensager">
            <div className="ImagemIconUsers"><img alt="text" src={propriedades.imagemIconUsers} /></div>

            <div className="Surname_CompleteName">
                <div className="Apelido">{propriedades.apelido}</div>
                <div className="NomeCompleto">{propriedades.nomeQCompleto}</div>
            </div>

            <div className="Option">{propriedades.options}</div>
        </div>
    )
}