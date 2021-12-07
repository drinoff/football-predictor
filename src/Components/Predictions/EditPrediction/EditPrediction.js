import { useEffect } from "react";
import { useLocation } from "react-router";

import predictionServices from "../../../services/predictionServices";

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
            <form id="edit-form" action="PUT">

                <div className="editMatchName">
                    <label htmlFor="match" className="match"></label>
                    <input type="text" />
                </div>

                <div className="editPrediction">
                    <label htmlFor="prediction" className="prediction">
                        Prediction
                    </label>
                    <input type="text" />
                </div>

                <div className="editDescription">
                    <label htmlFor="description" className="description">
                        Description
                    </label>
                    <textarea type="text"></textarea>
                </div>
                
            </form>
        </div>
    );
};

export default Editprediction;
