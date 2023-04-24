import './Usuario.css'

export default function Usuario(props) {
    return (
        <div className="Usuario">
            <div className="user"><img alt="Text" src={props.iconUser}/></div>
        </div>
    )
}