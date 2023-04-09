import React, { FC, RefObject, useEffect } from 'react';
import style from './controllers.module.scss'
import { BsFillPlayFill } from 'react-icons/bs';
import { BiSkipPrevious, BiSkipNext, BiPause } from 'react-icons/bi';

interface IControls {
  play: boolean,
  audioRef: RefObject<HTMLAudioElement | null>,
  action: any
}

const Controls: React.FC<IControls> = ({ play, audioRef, action }) => {

  
  return (
    <div className={style.wrap}>
      <button className={style.btn} ><BiSkipPrevious color='orange' size='2.4em' /></button>
      
      {play
        ?
        <button  className={style.btn} onClick={() => action()}>
          <BiPause color='orange' size='4.4em' />
        </button>
        : 
        <button  className={style.btn} onClick={() => action()}>
          <BsFillPlayFill color='orange' size='4.4em' />
        </button>}

      <button className={style.btn} ><BiSkipNext color='orange' size='2.4em' /></button>


    </div>
  );
}

export default Controls;
