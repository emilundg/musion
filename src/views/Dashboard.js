import React, {useState} from 'react';
import '../styles/Dashboard.css';

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
                    searchParam,
                    bgColor: getRandomColor()
                }
            ]);
            setSearchParam("");
        }
    };

    const RemoveQuery = (e) => {
        let query = e.target.value;
        setSearchQuery(searchQueries.filter((e) => (e !== query)))
    };

    const getRandomColor = () => {
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
            {RenderTags()}
        </div>
    );
}
export default Dashboard;