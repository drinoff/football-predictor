const BASE_URL =
    "https://football-predictor-3416d-default-rtdb.europe-west1.firebasedatabase.app/";
const postPrediction = (body) => {
    fetch(`${BASE_URL}predictions.json`, {
        method: "POST",
        body: JSON.stringify(body),
    });
};
const getPredictions = () => {
    return fetch(`${BASE_URL}predictions.json`).then((response) =>
        response.json()
    );
};

const getPredictionById = (id) => {
    return fetch(`${BASE_URL}predictions/${id}.json`).then((response) =>
        response.json()
    );
};

const editPrediction = (id, body) => {
    return fetch(`${BASE_URL}predictions/${id}.json`, {
        method: "PUT",
        body: JSON.stringify(body),
    }).then((res) => res.json());
};

const deletePrediction = (id) => {
    return fetch(`${BASE_URL}predictions/${id}.json`, {
        method: "DELETE",
    }).then((res) => res.json());
};

const updateLikes = (id, body) => {
    return fetch(`${BASE_URL}predictions/${id}.json`, {
        method: "PUT",
        body: JSON.stringify(body),
    }).then((res) => res.json());
};

const predictionServices = {
    postPrediction,
    getPredictions,
    getPredictionById,
    editPrediction,
    deletePrediction,
    updateLikes
};

export default predictionServices;
