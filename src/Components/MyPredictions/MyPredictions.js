import { useState, useEffect, useContext } from "react";

import Skeleton from "@mui/material/Skeleton";
import Prediction from "../Predictions/Prediction/Prediction";

import AuthContext from "../../contexts/AuthContext";
import predictionServices from "../../services/predictionServices";
import matchServices from "../../services/matchServices";
import getStatus from "../../utils/getStatus";

import "./MyPredictions.css";

const MyPredictions = () => {
    const [userPredictions, setUserPredictions] = useState();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        predictionServices.getPredictions().then((res) => {
            let data = Object.entries(res);
            data.forEach((prediction) => {
                matchServices
                    .getMatchById(prediction[1].matchDetails.fixture.id)
                    .then((matchUpdate) => {
                        prediction[1].matchDetails.fixture.status.short =
                            matchUpdate.data.response[0].fixture.status.short;
                        prediction[1].matchDetails.predictionStatus = getStatus(
                            matchUpdate.data,
                            prediction[1].prediction
                        );
                    });
            });
            setTimeout(() => {
                setUserPredictions(
                    data.reverse().filter(
                        (prediction) => prediction[1].email === user.email
                    )
                );
            }, 2000);
        });
    }, [user]);

    return (
        <div className="myPredictionsContainer">
            {userPredictions ? (
                userPredictions.map((prediction) => (
                    <Prediction
                        key={prediction[0]}
                        matchInfo={prediction[1]}
                        isRender
                    />
                ))
            ) : (
                <>
                    <Skeleton
                        sx={{
                            bgcolor: "#2A3745",
                            borderRadius: "8px",
                            marginBottom: "20px",
                            marginTop: "20px",
                        }}
                        variant="rect"
                        width="70%"
                        height="80px"
                    />
                    <Skeleton
                        sx={{
                            bgcolor: "#2A3745",
                            borderRadius: "8px",
                            marginBottom: "20px",
                            marginTop: "20px",
                        }}
                        variant="rect"
                        width="70%"
                        height="80px"
                    />
                    <Skeleton
                        sx={{
                            bgcolor: "#2A3745",
                            borderRadius: "8px",
                            marginBottom: "20px",
                            marginTop: "20px",
                        }}
                        variant="rect"
                        width="70%"
                        height="80px"
                    />
                    <Skeleton
                        sx={{
                            bgcolor: "#2A3745",
                            borderRadius: "8px",
                            marginBottom: "20px",
                            marginTop: "20px",
                        }}
                        variant="rect"
                        width="70%"
                        height="80px"
                    />
                    <Skeleton
                        sx={{
                            bgcolor: "#2A3745",
                            borderRadius: "8px",
                            marginBottom: "20px",
                            marginTop: "20px",
                        }}
                        variant="rect"
                        width="70%"
                        height="80px"
                    />
                </>
            )}
        </div>
    );
};

export default MyPredictions;
