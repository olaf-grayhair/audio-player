import React, { FC, useEffect, useRef, useState } from 'react';
import style from './audioplayer.module.scss'
import Controls from './Controls';
import Progressbar from './Progressbar';
import { ImVolumeMute, ImVolumeMute2 } from 'react-icons/im';
import Audiobar from './Audiobar';
import Advancedbar from './Advancedbar';


const AudioPlayer: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const playAnimationRef = useRef();
    const duration = Math.round(audioRef.current?.duration)
    const curTime = Math.round(audioRef.current?.currentTime)




    const repeat = () => {
        const currentTime = Math.round(audioRef.current?.currentTime)
        playAnimationRef.current = requestAnimationFrame(repeat);
        console.log(currentTime, curTime, duration);
        
        setCurrentTime(currentTime)
        if (duration === currentTime) {

            setIsPlaying(isPlaying => false)
            console.log(isPlaying, 'duration === curTime');
        }
    };

    const playPause = () => {
        setIsPlaying(!isPlaying)
    }




    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
            playAnimationRef.current = requestAnimationFrame(repeat);

            if (duration === curTime) {
                console.log('dadad');
                audioRef.current.currentTime = 0
            }
        }


        else {
            audioRef.current.pause();
            cancelAnimationFrame(playAnimationRef.current);

        }
    }, [isPlaying, audioRef]);


    return (
        <div className={style.wrap}>
            <div className={style.content}>
                <Advancedbar audioRef={audioRef} />
                <div className={style.cover}>
                    <img className={style.img}
                        src="https://e-cdns-images.dzcdn.net/images/cover/9e3f7d1badd6db1513cc3946305bba70/120x120-000000-80-0-0.jpg" alt="" />
                </div>

                <div className={style.album}>
                    <h1 className={style.title}>Onceborn</h1>
                    <h2 className={style.song}>nemo</h2>
                </div>
                <Progressbar audioRef={audioRef} currentTime={currentTime} />
            </div>


            <audio src="src/Unforgiven.mp3" ref={audioRef}></audio>
            {/* 
            <audio src="https://cdns-preview-8.dzcdn.net/stream/c-899d31027fc75b18b5c46a1a6b5f4e05-6.mp3" ref={audioRef}></audio> */}

            <Controls play={isPlaying} audioRef={audioRef} action={playPause} />

            <Audiobar audioRef={audioRef} />
        </div>
    );
}

export default AudioPlayer;
