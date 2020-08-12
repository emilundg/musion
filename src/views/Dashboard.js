import React, {useState} from 'react';
import '../styles/Dashboard.css';
import {FaTimes} from 'react-icons/fa';

function Dashboard() {
    // Declare a new state variable, which we'll call "count"
    const [searchQueries,
        setSearchQuery] = useState([]);
    const [searchParam,
        setSearchParam] = useState("");

    const AddQuery = () => {
        if (searchParam) {
            setSearchQuery([
                ...searchQueries, {
                    id: searchQueries.length,
                    searchParam,
                    bgColor: GetRandomColor()
                }
            ]);
            setSearchParam("");
        }
    };

    const RemoveQuery = (id) => {
        setSearchQuery(searchQueries.filter((e) => (e.id !== id)))
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
                    <button
                        onClick={() => RemoveQuery(element.id)}
                        className="Dashboard__CloseButton">
                        <FaTimes/>
                    </button>
                </div>
            )
        })
    }

    return (
        <div className="Dashboard">
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
    );
}
export default Dashboard;