import "./MatchItem.css";

const MatchItem = ({ match, onClick }) => {
    return (
        <div
            onClick={() => onClick(match.fixture.id)}
            className="singleMatchContainer"
        >
            <img
                className="nationFlag"
                src={match.league.flag}
                alt={match.league.name}
            />
            <p className="leagueName">{match.league.country}</p>
            <p className="matchStatus">{match.fixture.status.short}</p>

            <div className="teamResultWrapper">
                <p className="homeTeam">{match.teams.home.name}</p>
                <div className="scoreWrapper">
                    <p className="homeTeamScore">{match.score.fulltime.home}</p>
                    :
                    <p className="awayTeamScore">{match.score.fulltime.away}</p>
                </div>
                <p className="awayTeam">{match.teams.away.name}</p>
            </div>
        </div>
    );
};

export default MatchItem;
