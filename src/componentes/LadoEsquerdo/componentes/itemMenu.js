import './itemMenu.css'

export default function ItemMenu(props) {
    if (parseInt(window.innerWidth) > 600) {
        return (
            <span className='ItemMenu'>
                <span className='icone'>{props.icone}</span>
                <span className='texto'>{props.texto}</span>
            </span>
        )
    } else {
        return (
            <span className='ItemMenu'>
                <span className='icone'>{props.icone}</span>
            </span>
        )
    }
}