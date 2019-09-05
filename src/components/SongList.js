import React, { useState } from 'react';
import  uuid  from 'uuid/v1'
import NewSongForm from './NewSongForm';


const SongList = () => {
    const [songs, setSongs] = useState([
        {title: 'almost there', id:uuid() },{title: 'memory gospel', id: uuid()},{title: 'this wild darkness', id: uuid()}
    ])
    const addSongs = (title) => {
        setSongs([...songs, {title,id:uuid()}])
    }
    return ( 
        <div className="song-list">
            <ul>
                {songs.map( song => ( <li key={song.id} >{song.title}</li> ))} 
            </ul>
            <NewSongForm newSong={addSongs} />
        </div>
     );
}
 
export default SongList;