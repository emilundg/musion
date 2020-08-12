import React, {useState} from 'react';
import '../styles/ResultList.css';
import {FaPlay, FaClock} from 'react-icons/fa';

const ResultList = ({data}) => {
    const listItems = (searchKeyArray) => {
        return searchKeyArray.map(song => {
            return (
                <tr key={song.key}>
                    <td>
                        <img src={song.pictures.medium} alt="Song description"/>
                    </td>
                    <td>
                        <a href={song.url} target="_blank" rel="noopener noreferrer">{song.name}</a>
                        <div>by {song.user.username}</div>
                        <div>
                            <div>
                                <FaPlay/> {song.play_count}
                            </div>
                            <div>
                                <FaClock/> {song.audio_length}
                            </div>
                        </div>
                    </td>
                </tr>
            )
        })
    }
    return (
        <table className="ResultList">
            <tr>
                <th></th>
                <th>Firstname</th>
            </tr>
            {console.log(data)}
            <tbody>
                {data.map(searchKey => {
                    return (listItems(searchKey.data))
                })}
            </tbody>
        </table>
    );
}
export default ResultList;