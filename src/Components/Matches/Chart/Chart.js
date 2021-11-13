import { Doughnut } from "react-chartjs-2";

const Chart = ({h2h}) => {
    let homeWins = h2h.response.filter(x=>x.teams.home.winner===true).length;
    let awayWins = h2h.response.filter(x=>x.teams.away.winner===true).length;
    let draws = h2h.response.length - homeWins - awayWins;
    const data = {
        labels: ["Home Wins", "Away Wins", "Draws"],
        datasets: [
            {
                label: "Head to Head",
                data: [homeWins, awayWins, draws],
                backgroundColor: ["#7582EB", "#75FAC8", "#FFB020"],
                borderColor: ["#7582EB", "#75FAC8", "#FFB020"],
                borderWidth: 1,
                color: ["white"],
            },
        ],
    };

    return (
        <Doughnut
            className="doughnutChart"
            data={data}
            width={500}
            height={250}
            options={{ maintainAspectRatio: false, responsive: false }}
        />
    );
};
export default Chart;
