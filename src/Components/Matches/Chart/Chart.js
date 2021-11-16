import { Doughnut } from "react-chartjs-2";

const Chart = ({h2h}) => {
    let homeWins = h2h.response.filter(x=>x.teams.home.winner===true).length;
    let awayWins = h2h.response.filter(x=>x.teams.away.winner===true).length;
    let draws = h2h.response.length - homeWins - awayWins;
    const data = {
        labels: ["Home Wins", "Away Wins", "Draws"],
        datasets: [
            {
                label: "# of Votes",
                data: [homeWins, awayWins, draws],
                backgroundColor: ["#7582EB", "#75FAC8", "#FFB020"],
                borderColor: ["#7582EB", "#75FAC8", "#FFB020"],
                borderWidth: 1,
                color: ["white"],
            },
        ],
    };
    console.log(data)
    return (
        <Doughnut
            data={data}
        />
    );
};
export default Chart;
