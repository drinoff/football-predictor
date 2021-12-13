import "./MatchDetail.css";
import Chart from './Chart/Chart'

const MatchDetail = ({
     matchDetail, 
     h2h 
    }) => {
    return (
        <>
            <div className="headingMatchDetail">
                <img
                    className="detailPageTeamLogo"
                    src={matchDetail.teams.home.logo}
                    alt=""
                />
                <div className="teamNamesDetailPage">
                    <h3>{matchDetail.teams.home.name}</h3>{" "}
                    <p className="homeAwaySeparator">-</p>{" "}
                    <h3>{matchDetail.teams.away.name}</h3>
                </div>
                <img
                    className="detailPageTeamLogo"
                    src={matchDetail.teams.away.logo}
                    alt=""
                />
            </div>
            <div className="seasonRoundInfo">
                <p className= "seasonDetail" >{matchDetail.league.season}</p>
                <p>{matchDetail.league.round}</p>
            </div>
            <div className="venueAndCity">
                <p className="venueName">{matchDetail.fixture.venue.name}</p>
                <p className="cityName">{matchDetail.fixture.venue.city}</p>
            </div>
            <div className="refereeAndDate">
                <p className="eventDate">{matchDetail.fixture.date.substring(0, 16).replace('T',' - ')}</p>
                <p className="eventReferee">{"Referee: " + matchDetail.fixture.referee}</p>
            </div>
            <div className='h2hChart'>
                {h2h
                ? <Chart 
                h2h={h2h}
                teams = {matchDetail.teams}/>
                :''}
            </div>
        </>
    );
};
export default MatchDetail;
