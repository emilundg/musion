import React, {useState, useEffect, useCallback} from 'react';
import '../styles/ResultList.css';
import {FaPlay, FaClock} from 'react-icons/fa';

const ResultList = ({data}) => {
    const [mergedSongs,
        setMergedSongs] = useState([]);

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    useEffect(() => {
        const mergeArrays = () => {
            const tempArray = [];
            data.map(dataObject => {
                return tempArray.unshift(...dataObject.data)
            })
            shuffleArray(tempArray);
            setMergedSongs(tempArray);
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }
        mergeArrays();
    }, [data]);

    const listItems = (song) => {
        return (
            <tr key={song.key}>
                <td>
                    <img src={song.pictures.medium} alt="Song description"/>
                </td>
                <td className="ResultList__InformationData">
                    <div>
                        <div className="ResultList__Username">{song.user.username}</div>
                        <a href={song.url} target="_blank" rel="noopener noreferrer">{song.name}</a>
                    </div>
                    <div className="ResultList__AltInformation">
                        <div className="ResultList__AltText">
                            <FaPlay/> {song.play_count}
                        </div>
                        <div className="ResultList__AltText">
                            <FaClock/> {song.audio_length}
                        </div>
                    </div>
                </td>
            </tr>
        )
    }

    return (
        <table className="ResultList">
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {mergedSongs.map(songObject => {
                    return (listItems(songObject))
                })}
            </tbody>
        </table>
    );
}
export default ResultList;