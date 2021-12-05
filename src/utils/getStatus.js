const getStatus = (match, prediction) => {
    let status = "";
   if(prediction === '1' && match.response[0].teams.home.winner === true){
       status = true;
}else if(prediction === '2' && match.response[0].teams.away.winner === true){
    status = true;
}else if(prediction === 'X' && match.response[0].teams.home.winner === null && match.response[0].teams.away.winner === null){
    status = true;
}else if(prediction === 'BTS' && match.response[0].goals.home !== 0 && match.response[0].goals.away !== 0){
    status = true;
}else if(prediction === 'Over 2,5' && match.response[0].goals.home + match.response[0].goals.away > 2)
{
    status = true;
}else if(prediction === 'Under 2,5' && match.response[0].goals.home + match.response[0].goals.away < 3)
{
    status = true;
}
else if(prediction === 'Over 1,5' && match.response[0].goals.home + match.response[0].goals.away > 1)
{
    status = true;
}else if(prediction === 'Under 1,5' && match.response[0].goals.home + match.response[0].goals.away < 2)
{
    status = true;
}
else if(prediction === '1X' && (match.response[0].teams.home.winner === true || match.response[0].teams.away.winner === null))
{
    status = true;
}else if(prediction === '2X' && (match.response[0].teams.away.winner === true || match.response[0].teams.home.winner === null))
{
    status = true;
}else{
    status = false;
}
    return status;
};

export default getStatus;