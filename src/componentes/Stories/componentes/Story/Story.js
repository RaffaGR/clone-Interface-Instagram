import './Story.css'

function Story(pp) {
    return (
        <div className="Story">
            <div className="imgStory">
                <img alt="" src={pp.imgPerfil} />
            </div>
            <div className="nomeStory">
                <span>{pp.nomeDaConta}</span>
            </div>
        </div>
    )
}

export default Story;