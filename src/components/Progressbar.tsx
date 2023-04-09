import React, { FC, RefObject, useEffect, useRef } from 'react';
import style from './progressbar.module.scss'
interface IProgress {
    // duration: number,
    currentTime: number,
    audioRef: RefObject<HTMLAudioElement | null>,
}

const Progressbar: React.FC<IProgress> = ({ audioRef, currentTime }) => {

    const time = Math.round(audioRef.current?.duration)
    const totalTime = Math.round(time) - currentTime
    const curTime = Math.round(audioRef.current?.currentTime)

    const formatTime = (time) => {
        if (time && !isNaN(time)) {
            const minutes = Math.floor(time / 60);
            const formatMinutes =
                minutes < 10 ? `0${minutes}` : `${minutes}`;
            const seconds = Math.floor(time % 60);
            const formatSeconds =
                seconds < 10 ? `0${seconds}` : `${seconds}`;

            // if (Math.round(time) - currentTime === 0) {
            //     return '00:00';
            // }

            return `${formatMinutes}:${formatSeconds}`;
        }
        else {

        }
        return '00:00';
    };


    const scrollHandleChange = (event: Event) => {
        // const curTime = Math.round(audioRef.current?.currentTime)
        const { value } = event.target as unknown as { value: string };

        if(value < curTime) {
            audioRef.current.currentTime = +value
        }else {
            audioRef.current.currentTime = +value
        }

        console.log(curTime, 'audioRef', +value);
        
    };

console.log(curTime, time);

    return (
        <div className={style.wrap}>
            <input
                value={currentTime}
                onChange={scrollHandleChange}
                className={style.progressbar}
                type="range" min={0} max={Math.round(time)}
                step="1" />

            <div className={style.time}>
                <span>{formatTime(curTime)}</span>
                <span>{formatTime(time - currentTime)}</span>
            </div>
        </div>
    );
}

export default Progressbar;
