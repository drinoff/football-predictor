import MatchDetail from "../../Matches/MatchDetail";
import { Radar } from "react-chartjs-2";

import "./MatchPrediction.css";

const MatchPrediction = ({ prediction, h2h, matchDetail }) => {
    const radarData = prediction.response[0].comparison;
    console.log(prediction);
    const data = {
        labels: [
            "Attacking",
            "Defending",
            "Form",
            "Goals",
            "Poisson Distribution",
        ],
        datasets: [
            {
                label: matchDetail.teams.home.name,
                data: [
                    Number(radarData.att.home.slice(0, 2)),
                    Number(radarData.def.home.slice(0, 2)),
                    Number(radarData.form.home.slice(0, 2)),
                    Number(radarData.goals.home.slice(0, 2)),
                    Number(radarData.def.home.slice(0, 2)),
                ],
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
            },
            {
                label: matchDetail.teams.away.name,
                data: [
                    Number(radarData.att.away.slice(0, 2)),
                    Number(radarData.def.away.slice(0, 2)),
                    Number(radarData.form.away.slice(0, 2)),
                    Number(radarData.goals.away.slice(0, 2)),
                    Number(radarData.def.away.slice(0, 2)),
                ],
                backgroundColor: "rgba(117,250,200,0.2)",
                borderColor: "rgba(117,250,200,1)",
                borderWidth: 1,
            }
        ],
    };
    const options = {
        scale: {
            ticks: { beginAtZero: true },
        },
        angleLines: {
            color: "#7582EB",
        },
        gridLines: {
            color: "RGB(117,130,235)",
        },
    };
    return (
        <>
            <MatchDetail matchDetail={matchDetail} h2h={h2h} />
            <Radar data={data} options={options} />
        </>
    );
};

export default MatchPrediction;
