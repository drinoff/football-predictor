
const BASE_URL = "https://football-predictor-3416d-default-rtdb.europe-west1.firebasedatabase.app/";
const postPrediction = (body) => {
    fetch(`${BASE_URL}predictions.json`,{
        method: 'POST',
        body: JSON.stringify(body),
    
    })
    
}
const getPredictions = () => {
     return fetch(`${BASE_URL}predictions.json`)
                .then(response => response.json())  
}

const predictionServices = {
    postPrediction,
    getPredictions
}

export default predictionServices;