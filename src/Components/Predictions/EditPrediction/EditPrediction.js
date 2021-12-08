import { useEffect } from "react";
import { useLocation } from "react-router";

import predictionServices from "../../../services/predictionServices";
import './EditPrediction.css';

const Editprediction = () => {
    const location = useLocation();
    const id = location.state.id;
    console.log(id);

    useEffect(() => {
        predictionServices
            .getPredictionById(id)
            .then((data) => console.log(data));
    }, [id]);
    return (
        <div className="editFormContainer">
            <form id="edit-form" className = "editFormStyle" action="PUT">

                <div className="editMatchName">
                    <label htmlFor="match" className="match">Match</label>
                    <input type="text" className = "formStyle" />
                </div>

                <div className="editPrediction">
                    <label htmlFor="prediction" className="prediction">
                        Prediction
                    </label>
                    <input type="text" className = "formStyle"/>
                </div>

                <div className="editDescription">
                    <label htmlFor="description" className="editDescriptionLabel">
                        Description
                    </label>
                    <textarea type="text"></textarea>
                </div>
                <input type="button" className="editFormButton" value="Edit"/>
                
            </form>
        </div>
    );
};

export default Editprediction;
