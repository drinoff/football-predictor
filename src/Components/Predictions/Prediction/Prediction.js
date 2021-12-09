import { useState, useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import BasicModal from "../../BasicModal/BasicModal";

import AuthContext from "../../../contexts/AuthContext";

import "./Prediction.css";
import predictionServices from "../../../services/predictionServices";

const Prediction = ({ matchInfo, isRender, detailsStyle, id }) => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [likes, setLikes] = useState(matchInfo.likes?.length || 0);
    const [openModal, setOpenModal] = useState(false);
    const [msg, setMsg] = useState("");
    const urlMatchInfo = matchInfo.match.replaceAll(" ", "");
    const matchstatus = matchInfo.matchDetails.fixture.status.short;

    const onLikeClickHandler = () => {
        if (user.email === '') {
            setMsg("You must be logged in to like a prediction");
            setOpenModal(true);
            setTimeout(() => {
                setOpenModal(false);
            }, 2000);
            navigate("/login");
        }
        if (
            matchInfo.email !== user.email &&
            !matchInfo.likes?.includes(user.email)
        ) {
            setLikes(likes + 1);
            if (!matchInfo.likes) {
                matchInfo.likes = [];
            }
            matchInfo.likes.push(user.email);

            predictionServices
                .updateLikes(id, matchInfo)
                .then((res) => console.log(res));
        } else {
            if (matchInfo.email === user.email) {
                setOpenModal(true);
                setMsg("You can't like your own prediction");
                setTimeout(() => {
                    setOpenModal(false);
                }, 500);
            } else {
                setOpenModal(true);
                setMsg("You already Liked That Match");
                setTimeout(() => {
                    setOpenModal(false);
                }, 500);
            }
        }
    };

    return (
        <>
            <BasicModal
                openModal={openModal}
                msg={msg}
                secondMsg={""}
                error={""}
            />
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
                        state={{ matchInfo, id, urlMatchInfo }}
                    >
                        Details
                    </Link>
                )}

                {matchInfo.matchDetails.predictionStatus === true ? (
                    <span className={`predictionStatus ${detailsStyle}`}>
                        {matchstatus === "FT" ? (
                            <i className="fas fa-check"></i>
                        ) : (
                            ""
                        )}
                    </span>
                ) : (
                    <span className={`predictionStatus ${detailsStyle}`}>
                        {matchstatus === "FT" ? (
                            <i className="fas fa-times"></i>
                        ) : (
                            ""
                        )}
                    </span>
                )}
                <div className="likesContainer">
                    <p className="likes">Likes:{likes}</p>
                    <i
                        onClick={onLikeClickHandler}
                        className="fas fa-heart"
                    ></i>
                </div>
            </article>
        </>
    );
};

export default Prediction;
