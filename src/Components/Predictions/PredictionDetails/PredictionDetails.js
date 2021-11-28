import { useLocation } from "react-router-dom";

import { Box } from "@mui/system";
import Prediction from "../Prediction/Prediction";
import MatchPrediction from "../../CreatePrediction/MatchPrediction/MatchPrediction"

import "./PredictionDetails.css";

const PredictionDetails = () => {
    const location = useLocation();
    const { matchInfo } = location.state;
    console.log(matchInfo);

    return (
        <div className="detailsPredictionPage">
            <Box
                className="singlePredictionDetailContainer"
                sx={{ bgcolor: "#111827", height: "auto", width: "90%" }}
            >
                <Prediction
                    key={matchInfo.match}
                    matchInfo={matchInfo}
                    isRender={false}
                    detailsStyle = {'predictionsStatusDetailPage'}
                />
            </Box>
            <Box
                className="predictionDescription"
                sx={{ bgcolor: "#111827", height: "auto", width: "90%" }}
            >
                <p>
                    {matchInfo.predictionDesc}
                </p>
                
            </Box>
            <div className="predictionDetailsContainer">
                <Box
                    className="predictionDetailsH2HContainer"
                    sx={{ bgcolor: "#111827", height: "auto", width: "43%" }}
                >
                    <MatchPrediction
                        prediction={matchInfo.selectedMatchPrediction}
                        h2h={matchInfo.selectedMatchH2H}
                        matchDetail = {matchInfo.matchDetails}
                    />
                </Box>
                <Box
                    className="predictionDetailsContainer"
                    sx={{ bgcolor: "#111827", height: "auto", width: "55%" }}
                ></Box>
            </div>
        </div>
    );
};

export default PredictionDetails;
