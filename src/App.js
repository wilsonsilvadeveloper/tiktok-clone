import React, {useEffect, useState} from "react";
import "./App.css";
import Video from "./pages/Video";
import db from  "./config/firebase";
import {collection, getDocs} from 'firebase/firestore/lite';

function App() {

  const [videos, setVideo] = useState([])

  async function getVideos() {
    const videosCollection = collection(db, "videos");
    const videosSnapshot = await getDocs(videosCollection);
    const videosList = videosSnapshot.docs.map(doc => doc.data());
    setVideo(videosList);
  }

  useEffect(()=> {
    getVideos();
  }, [])

  console.log(videos);

  return (
    <div className="App">
      <div className="app-videos-tiktok">
        
        {videos.map((item)=> {
          return (
            <Video 
              likes={item.likes} 
              mensagens={item.mensagens}
              shares={item.shares}
              nameConta={item.name}
              titleMusica={item.music}
              descricao={item.descricao}
              url={item.url} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
