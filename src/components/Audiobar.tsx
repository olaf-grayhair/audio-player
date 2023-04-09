import React, { FC, RefObject, useState } from 'react';
import { ImVolumeMute, ImVolumeMute2 } from 'react-icons/im';
import style from './audiobar.module.scss'

interface IProgress {
    audioRef: RefObject<HTMLAudioElement | null>,
}

const Audiobar: React.FC<IProgress> = ({ audioRef }) => {
    const [isMute, setIsMute] = useState<boolean>(true);

    const muteButton = () => {
        setIsMute(isMute => !isMute)
        audioRef.current.muted = isMute
    }

    const volumeHandleChange = (event: Event) => {
        const { value } = event.target as unknown as { value: string };
        audioRef.current.volume = value;
    };

    return (
        <div className={style.audiobar}>
            <input
                // className={style.progressbar}
                type="range" min={0} max={1} step="0.1"
                onChange={volumeHandleChange}
            />
            {isMute
                ? <button className={style.btn} onClick={muteButton}><ImVolumeMute color='orange' size='1.4em' /></button>
                : <button className={style.btn} onClick={muteButton}><ImVolumeMute2 color='orange' size='1.4em' /></button> 
                
            }

        </div>
    );
}

export default Audiobar;
