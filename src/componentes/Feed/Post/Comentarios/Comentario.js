import React, { useState } from 'react';
import './Comentarios.css';

function Comentario() {
  const [mostrarComentarios, setMostrarComentarios] = useState(false);

  const [comentario, setComentario] = useState('');

  const handleChange = (event) => {
    setComentario(event.target.value);
  };

  const descricao = "Aqui temos a descrição...";
  const curtidoPor = "Voce, Front-end";

  const comentarios = [
    "mais",
    "Dev_Junior 💙",
    "Outro comentário",
    "Mais um comentário",
    "Dev_Junior: " + comentario
  ];

  return (
    <div>
      <p className='Comentar'>Curtido por {curtidoPor} e outras pessoas</p>
      <p className='Comentar'>{descricao}</p>

      {mostrarComentarios && (
        <div className="ComentariosExibicao">
          {comentarios.map((comentario, index) => (
            <p key={index}>{comentario}</p>
          ))}
        </div>
      )}

      <button className="ComentariosVerMais" onClick={() => setMostrarComentarios(!mostrarComentarios)}>
        {mostrarComentarios ? 'Esconder comentários' : 'Ver todos os comentários'}
      </button>

      <div className="Comentarios">
        <input type="text" placeholder="Digite seu comentário" value={comentario} onChange={handleChange} />
        <button className={comentario ? '' : 'hidden'}>Publicar</button>
      </div>
    </div>
  );
}

export default Comentario;
