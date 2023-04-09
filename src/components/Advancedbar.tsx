import React, { FC, RefObject, useEffect, useState } from 'react';
import { FcLike } from 'react-icons/fc';
import { BsRepeat } from 'react-icons/bs';
import { FaRandom } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import style from './advancedbar.module.scss'
interface IProgress {
    audioRef: RefObject<HTMLAudioElement | null>,
}

const Advancedbar: React.FC<IProgress> = ({audioRef}) => {
    const [isLike, setIsLike] = useState<boolean>(false);
    const [isRepeat, setIsRepeat] = useState<boolean>(false);
    const [isRandom, setIsRandom] = useState<boolean>(false);

    const repeatHandle = () => {
        setIsRepeat(!isRepeat)
        console.log(isRepeat, 'repeatHandker');
        
    }

    const likeHandle = () => {
        setIsLike(!isLike)
    }

    useEffect(() => {
        audioRef.current.loop = isRepeat

    },[isRepeat])

    
    return (
        <div className={style.advancedbar}>

            {!isLike
                ?
                <button onClick={likeHandle} className={style.btn}>
                    <AiOutlineHeart size='1.6em' color='white' />
                </button>
                :
                <button onClick={likeHandle} className={style.btn}>
                    <FcLike size='1.6em' color='red' />
                </button>
            }
            {!isRepeat
                ?
                <button onClick={repeatHandle} className={style.btn}>
                    <BsRepeat size='1.6em' />
                </button>
                :
                <button onClick={repeatHandle} className={style.btn}>
                    <BsRepeat size='1.6em' color='orange' />
                </button>
            }


            {!isRandom
                ?
                <button onClick={repeatHandle} className={style.btn}>
                    <FaRandom size='1.6em' />
                </button>
                :
                <button onClick={repeatHandle} className={style.btn}>
                    <FaRandom size='1.6em' color='orange' />
                </button>
            }

        </div>
    );
}

export default Advancedbar;
