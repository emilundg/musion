import React, {useState, useRef} from 'react';
import '../styles/Dashboard.css';
import {FaTimes} from 'react-icons/fa';
import Axios from "axios";
import ResultList from '../components/ResultList';
import Player from '../components/Player';

function Dashboard() {
    const resultRef = useRef();

    const [searchQueries,
        setSearchQuery] = useState([]);
    const [searchParam,
        setSearchParam] = useState("");
    const [playbackURL,
        setPlaybackURL] = useState("");
    const [songData,
        setSongData] = useState([]);
    const AddQuery = async(e) => {
        e.preventDefault();
        if (searchParam) {
            resultRef
                .current
                .setLoading();
            setSearchQuery([
                ...searchQueries, {
                    id: searchQueries.length,
                    searchParam,
                    bgColor: GetRandomColor()
                }
            ]);
            await GetSongs(searchParam);
            setSearchParam("");
        }
    };
    const GetSongs = async(searchParam) => {
        Axios
            .get(`http://localhost:5000/api/search/?query=${searchParam}`)
            .then((response) => {
                const {data} = response.data;
                setSongData([
                    ...songData, {
                        searchParam,
                        data
                    }
                ]);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const RemoveQuery = (query) => {
        resultRef
            .current
            .setLoading();
        setSearchQuery(searchQueries.filter((e) => (e.id !== query.id)));
        setSongData(songData.filter((e) => (e.searchParam !== query.searchParam)));
    };
    const GetRandomColor = () => {
        const colors = [
            '#ffadad',
            '#ffd6a5',
            '#fdffb6',
            '#caffbf',
            '#9bf6ff',
            '#bdb2ff',
            '#ffc6ff'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    const RenderTags = () => {
        return searchQueries.map((element, index) => {
            return (
                <div
                    key={index}
                    className="Dashboard__Badge"
                    style={{
                    backgroundColor: element.bgColor
                }}>
                    {element.searchParam}
                    <button onClick={() => RemoveQuery(element)} className="Dashboard__CloseButton" data-cy={`search-query-${index}`}>
                        <FaTimes/>
                    </button>
                </div>
            )
        })
    }
    const onEventEmit = (playbackURL) => {
        setPlaybackURL(playbackURL);
    }
    return (
        <div className="Dashboard">
            <div className="Dashboard__Search">
                <div className="Dashboard__SearchInputContainer">
                    <input
                        type="text"
                        className="Dashboard__SearchInput"
                        data-cy="search-input"
                        value={searchParam}
                        placeholder="Search"
                        onChange={(e) => setSearchParam(e.target.value)}/>
                    <button
                        onClick={(e) => AddQuery(e)}
                        className="Dashboard__SearchButton"
                        data-cy="add-button">Add</button>
                </div>
                <div className="Dashboard__TagsContainer">
                    {RenderTags()}
                </div>
            </div>
            <ResultList data={songData} ref={resultRef} emitPlaybackURL={onEventEmit}/>
            <Player playbackURL={playbackURL}/>
        </div>
    );
}
export default Dashboard;