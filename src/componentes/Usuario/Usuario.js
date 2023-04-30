import './Usuario.css'

export default function Usuario(props) {
    return (
        <span className="Usuario">
            <span className="user"><img alt="imag" src={props.iconUser}/></span>
            <span className='texto'>{props.texto}</span>
        </span>
    )
}