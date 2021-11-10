import "./MatchItem.css";

const MatchItem = ({ match }) => {
    return (
        <div className="singleMatchContainer">
            <p className = 'koTime'>{match.kickOffTime}</p>
            <p className="homeTeam">{match.homeTeam}</p>
            <div className = 'scoreWrapper'>
                <p className="homeTeamScore">{match.currentHomeScore}</p> :
                <p className="awayTeamScore">{match.currentAwayScore}</p>
            </div>
            <p className="awayTeam">{match.awayTeam}</p>
        </div>
    );
};

export default MatchItem;
