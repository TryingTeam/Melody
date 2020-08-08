import React from 'react';
import '../assets/styles/components/AlbumHead.scss';
import { Link } from 'react-router-dom';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

// import '../components/Icons';

const AlbumHead = ({
  caratula,
  type,
  nameAlbum,
  imageArtist,
  linkArtist,
  duration,
}) => {
  return (
    <section>
      <div className='playlist-head'>
        <div className='playlist-head-image'>
          <img src={caratula} alt='image-Album' />
        </div>
        <div className='playlist-head-details'>
          <h5>{type}</h5>
          <h1>{nameAlbum}</h1>
          <div className='metadatos'>
            <img src={imageArtist} alt='imageMiniatura' />
            <Link to='/'>{linkArtist}</Link>
            <p>{duration}</p>
          </div>
        </div>
      </div>

      <div className='playlist-options'>
        <button type='button' className='play'>
          <PlayArrowIcon className='icon' />
        </button>
        <button type='button' className='like'>
          <FavoriteBorderIcon className='icon icon-like' />
        </button>
        <button type='button' className='more'>
          <MoreHorizIcon className='icon' />
        </button>
      </div>
    </section>
  );
};

export default AlbumHead;