import './MatchDetail.css'

const MatchDetail = ({matchDetail}) => {

    return (
        <div className = "headingMatchDetail">
            <h3>{matchDetail.teams.home.name}</h3> <p className = "homeAwaySeparator">-</p> <h3>{matchDetail.teams.away.name}</h3>
        </div>
    );
}
export default MatchDetail;