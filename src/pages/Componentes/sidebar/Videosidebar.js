import React, {useState} from 'react'
import './Videosidebar.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import { FavoriteBorder } from '@mui/icons-material';

function Videosidebar({likes, mensagens, shares}) {

    const [liked, setLiked] = useState(false);

    function handdleLike() {
        setLiked(!liked);
    }

  return (
    <div className='videoSideBar'>
        <div className='videoSideBar-options'
            onClick={handdleLike}
        >
            { liked ? <FavoriteIcon className='sideBarIcone' fontSize='large' /> : <FavoriteBorder className='sideBarIcone' fontSize='large'/> }
            <p>{liked ? likes + 1: likes}</p>
        </div>

        <div className='videoSideBar-options'>
            <ChatIcon fontSize='large' className='sideBarIcone' />
            <p>{mensagens}</p>
        </div>

        <div className='videoSideBar-options'>
            <ShareIcon fontSize='large' className='sideBarIcone' />
            <p>{shares}</p>
        </div>
    </div>
  )
}

export default Videosidebar