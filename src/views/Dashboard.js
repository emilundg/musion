import React, {useState} from 'react';
import '../styles/Dashboard.css';
import {FaTimes} from 'react-icons/fa';
import Axios from "axios";
import ResultList from '../components/ResultList';

function Dashboard() {
    const [searchQueries,
        setSearchQuery] = useState([]);
    const [searchParam,
        setSearchParam] = useState("");
    const [songData,
        setSongData] = useState([]);

    const AddQuery = async() => {
        if (searchParam) {
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
                console.log(error)
            });
    }
    const RemoveQuery = (query) => {
        setSearchQuery(searchQueries.filter((e) => (e.id !== query.id)))
        console.log(songData)
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
                    <button onClick={() => RemoveQuery(element)} className="Dashboard__CloseButton">
                        <FaTimes/>
                    </button>
                </div>
            )
        })
    }
    return (
        <div className="Dashboard">
            <div className="Dashboard__Search">
                <div className="Dashboard__SearchInputContainer">
                    <input
                        type="text"
                        className="Dashboard__SearchInput"
                        value={searchParam}
                        onChange={(e) => setSearchParam(e.target.value)}/>
                    <button onClick={AddQuery} className="Dashboard__SearchButton">Add</button>
                </div>
                <div className="Dashboard__TagsContainer">
                    {RenderTags()}
                </div>
            </div>
            <ResultList data={songData}/>
        </div>
    );
}
export default Dashboard;