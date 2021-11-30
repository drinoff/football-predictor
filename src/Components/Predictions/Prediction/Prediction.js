import { Link } from "react-router-dom";

import "./Prediction.css";

const Prediction = ({ matchInfo, isRender, detailsStyle }) => {
    const urlMatchInfo = matchInfo.match.replaceAll(" ", "");
    const matchstatus = matchInfo.matchDetails.fixture.status.short;

    return (
        <>
            <article className="singlePrediction">
                <div className="teamNamesAndFlags">
                    <img
                        className="flag"
                        src={matchInfo.matchDetails.teams.home.logo}
                        alt={matchInfo.matchDetails.teams.home.name}
                    />
                    <div className="teamPredictionNames">{matchInfo.match}</div>
                    <img
                        className="flag"
                        src={matchInfo.matchDetails.teams.away.logo}
                        alt={matchInfo.matchDetails.teams.away.name}
                    />
                </div>
                <div className="matchPrediction">{matchInfo.prediction}</div>
                {isRender && (
                    <Link
                        className="predictionDetailsButton"
                        to={urlMatchInfo}
                        state={{ matchInfo }}
                    >
                        Details
                    </Link>
                )}
                
                {matchInfo.matchDetails.predictionStatus === true ? (
                    <span className = {`predictionStatus ${detailsStyle}`}>{matchstatus === "FT" ? <i className="fas fa-check"></i> : ""}</span>
                ) : (
                    <span className = {`predictionStatus ${detailsStyle}`} >{matchstatus === "FT" ? <i className="fas fa-check"></i> : ""}</span>
                )}
            </article>
        </>
    );
};

export default Prediction;
