import React, {forwardRef, useImperativeHandle, useState, useEffect} from 'react';
import '../styles/Player.css';
import {FaChevronUp, FaChevronDown} from 'react-icons/fa';

const Player = forwardRef(({
    playbackURL
}, ref) => {
    const [playerOpen,
        setPlayerOpen] = useState(true);
    useImperativeHandle(ref, () => ({}));
    useEffect(() => {
        const changePlayerState = () => {
            if (!playerOpen) {
                setPlayerOpen(true);
            }
        }
        changePlayerState();
    }, [playbackURL, playerOpen]);
    if (playbackURL) {
        return (
            <div className="Player">
                <div className="Player__Accordion">
                    {playerOpen
                        ? <FaChevronUp onClick={() => setPlayerOpen(false)}/>
                        : <FaChevronDown onClick={() => setPlayerOpen(true)}/>}
                </div>
                <iframe
                    className={!playerOpen && 'Player__Iframe--Closed'}
                    title="Song playback"
                    width="100%"
                    height="89%"
                    src={`https://www.mixcloud.com/widget/iframe/?feed=${playbackURL}`}
                    frameBorder="0"></iframe>
            </div>
        );
    }
    return (
        <div></div>
    )
})
export default Player;