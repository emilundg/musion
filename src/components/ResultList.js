import React, {useState} from 'react';
import '../styles/ResultList.css';

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
                    // console.log(searchKey)
                    return (listItems(searchKey.data))
                })}
            </tbody>
        </table>
    );
}
export default ResultList;