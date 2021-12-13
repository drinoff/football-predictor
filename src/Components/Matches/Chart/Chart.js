import { Doughnut } from "react-chartjs-2";

const Chart = ({h2h, teams}) => {
    console.log(h2h);
    const home = teams.home.name;
    let homeWins = 0;
    const away = teams.away.name;
    let awayWins = 0;
    let draws = 0;

    h2h.response.forEach(element => {
        if(element.teams.home.name === home && element.teams.home.winner === true) {
            homeWins++;
        }else if(element.teams.away.name === home && element.teams.away.winner===true){
            homeWins++;
        }else if(element.teams.away.name === away && element.teams.away.winner===true){
            awayWins++;
        }else if(element.teams.home.name === away && element.teams.home.winner===true){
            awayWins++;
        }else{
            draws++;
        }
    });;
    console.log(homeWins, awayWins, draws);
    const data = {
        labels: [home +'wins', away + 'wins', "Draws"],
        datasets: [
            {
                label: "# of Votes",
                data: [homeWins||0, awayWins||0, draws||0],
                backgroundColor: ["#7582EB", "#75FAC8", "#FFB020"],
                borderColor: ["#7582EB", "#75FAC8", "#FFB020"],
                borderWidth: 1,
                color: ["white"],
            },
        ],
    };
    return (
        <Doughnut
            data={data}
            width={500}
            height={250}
            options={{ maintainAspectRatio: false, responsive: false }}
        />
    );
};
export default Chart;
