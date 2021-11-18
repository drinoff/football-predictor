import Prediction from "./Prediction/Prediction";

const Predictions = (props) => {
    return (
    <>
        {props.predictions
            ? props.predictions.map((prediction) => <Prediction />)
            : "There is no Predictions Currently"}
    </>
    )
};

export default Predictions;
