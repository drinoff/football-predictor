import { useState } from "react";
import { useNavigate } from "react-router-dom";

import predictionServices from "../../../../services/predictionServices";
import BasicModal from "../../../BasicModal/BasicModal";

import "./AdminButtons.css";

const AdminButtons = ({ id, urlMatchInfo }) => {
    const [openModal, setOpenModal] = useState(false);
    const [error, setError] = useState();
    const navigate = useNavigate();
    const onEditButtonClickHandler = () => {
        navigate(`/predictions/${urlMatchInfo}/edit`, { state: { id } });
    };

    const onDeleteButtonClickHandler = () => {
        predictionServices.deletePrediction(id).then((res) => {
            setOpenModal(true);
        }).catch((err) => {
            setError(err.message);
        });
        setTimeout(() => {
        navigate('/predictions')
        }, 2000);
    };
    return (
        <>
            <BasicModal 
            openModal={openModal} 
            msg = {'Success'}
            secondMsg = {'Deleted!'}
            errorMsg = {error} />
            <div className="adminButtonsWrapper">
                <button
                    className="adminButtonsStyle"
                    onClick={onEditButtonClickHandler}
                >
                    Edit
                </button>
                <button
                    className="adminButtonsStyle"
                    onClick={onDeleteButtonClickHandler}
                >
                    Delete
                </button>
            </div>
        </>
    );
};

export default AdminButtons;
