import React , { useState, useEffect } from 'react';

const NewSongForm = ({newSong}) => {
const [ title, setTitle ] = useState('')
const [hit, setHit] = useState(0);

const submitForm = e =>{
    e.preventDefault();
    newSong(title)
    setTitle('')
}
useEffect(()=>{
  setHit(hit+1) 
},[])
    return (
        <div> 
        <form onSubmit={submitForm} >
            <label>Song name : </label>
            <input 
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               type="text" placeholder="input song name"/>
            <input 
              type="submit" placeholder="input song name"/>
        </form>
        <div> <p>useEffect hit number :  {hit} </p> </div>
        </div>
     );
}
 
export default NewSongForm;