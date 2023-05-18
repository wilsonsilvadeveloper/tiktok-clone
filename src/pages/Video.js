import React, {useRef, useState} from 'react'
import "./Videos.css"
import Videofooter from './Componentes/footer/Videofooter';
import Videosidebar from './Componentes/sidebar/Videosidebar';

function Video({likes, mensagens, shares, nameConta, titleMusica, descricao, url}) {

  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function randdleStart(){

    if(!play) {
      videoRef.current.play();
      setPlay(true);
    }

    else{
      videoRef.current.pause();
      setPlay(false);
    }
    
  }

  return (
    <div className='container-video'>
      <video
        className='video-player'
        ref={videoRef}
        onClick={randdleStart}
        loop
        src={url}
      >
      </video>
      <Videosidebar 

        likes={likes}
        mensagens={mensagens}
        shares={shares}
      />
      <Videofooter 
        name={nameConta}
        musica={titleMusica}
        descricao={descricao}      
      />
    </div>
  )
}

export default Video