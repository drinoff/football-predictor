import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

import predictionServices from "../../../services/predictionServices";
import BasicModal from "../../BasicModal/BasicModal";

import "./EditPrediction.css";



const Editprediction = () => {
    const navigate = useNavigate();
    const [openModal,setOpenModal] = useState(false);
    const [prediction, setPrediction] = useState();
    const location = useLocation();
    const id = location.state.id;

    useEffect(() => {
        predictionServices.getPredictionById(id).then((data) => {
            setPrediction(data);
        });
    }, [id]);

    

    const onPredictionChangeHandler = (e) => {
        setPrediction({
            ...prediction,
            prediction: e.target.value,
        });
    };

    const onDescriptionChangeHandler = (e) => {
        setPrediction({
            ...prediction,
            predictionDesc: e.target.value,
        });
    };
    const onFormSubmitHandler = (e) => {
        e.preventDefault();
        predictionServices
            .editPrediction(id, prediction)
            .then((res) => console.log(res));
            setOpenModal(true);
            setTimeout(() => {
            navigate("/predictions");
        }, 2000);
    };
    return (
        <div className="editFormContainer">
            <BasicModal
            msg = 'Success'
            secondMsg = 'Prediction Edited'
            openModal = {openModal}
            />
            <form
                id="edit-form"
                className="editFormStyle"
                action="PUT"
                onSubmit={onFormSubmitHandler}
            >
                <div className="editMatchName">
                    <label htmlFor="match" className="match">
                        Match
                    </label>
                    <input
                        type="text"
                        className="formStyle"
                        readOnly
                        value={prediction ? prediction.match : ""}
                    />
                </div>

                <div className="editPrediction">
                    <label htmlFor="prediction" className="prediction">
                        Prediction
                    </label>
                    <select
                        name="prediction"
                        id="prediction"
                        className="formStyle"
                        value={prediction ? prediction.prediction : ""}
                        onChange={onPredictionChangeHandler}
                    >
                        <option value="1">1</option>
                        <option value="X">X</option>
                        <option value="2">2</option>
                        <option value="1X">1X</option>
                        <option value="X2">X2</option>
                        <option value="Over 2,5">Over 2,5</option>
                        <option value="Under 2,5">Under 2,5</option>
                        <option value="Over 1,5">Over 1,5</option>
                        <option value="Under 1,5">Under 1,5</option>
                    </select>
                </div>

                <div className="editDescription">
                    <label
                        htmlFor="description"
                        className="editDescriptionLabel"
                    >
                        Description
                    </label>
                    <textarea
                        type="text"
                        value={prediction ? prediction.predictionDesc : ""}
                        onChange={onDescriptionChangeHandler}
                    ></textarea>
                </div>

                <input
                    type="submit"
                    className="editFormButton"
                    value="Edit"
                />
            </form>
        </div>
    );
};

export default Editprediction;
