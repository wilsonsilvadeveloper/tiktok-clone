import React from "react";
import "./Videofooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';


function Videofooter({name, musica, descricao}) {
  return (
    <div className="footer">
      <div className="textoFooter">
        <h3>@{name}</h3>
        <p>{descricao}</p>

        <div className="footerTituloMusica">
          <MusicNoteIcon className="iconeMusicaFooter" />
          <div className="tituloMusicFooter">
            <p>{musica}</p>
          </div>
          
        </div>
      </div>
      <img className="imgFooter" alt="imagem de um vinil girando"
       src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"/>
    </div>
  );
}

export default Videofooter;
