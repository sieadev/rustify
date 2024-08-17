import "./Home.css";

function Home() {

    return (
        <div className="container">
            <div className="left">
                <div className="left-top">
                    <button className={"Search_Option"}>All</button>
                    <button className={"Search_Option"}>Artists</button>
                    <button className={"Search_Option"}>Playlists</button>
                    <button className={"Search_Option"}>Search</button>
                </div>
                <div className="left-mid"></div>
                <div className="left-bottom"></div>
            </div>
            <div className="center"></div>
            <div className="right"></div>
        </div>
    );
}

export default Home;