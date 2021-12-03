const getStatus = (match, prediction) => {
    let status = "";
   if(prediction === '1' && match.response[0].teams.home.winner === true){
       status = true;
}else if(prediction === '2' && match.response[0].teams.away.winner === true){
    status = true;
}else if(prediction === 'X' && match.response[0].teams.home.winner === null){
    status = true;
}else if(prediction === 'BTS' && match.response[0].goals.home !== 0 && match.response[0].goals.away !== 0){
    status = true;
}else{
    status = false;
}
    return status;
};

export default getStatus;