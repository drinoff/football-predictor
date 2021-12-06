import { useEffect} from 'react';
import { useLocation } from 'react-router';

import predictionServices from '../../../services/predictionServices';

const Editprediction = () => {
    const location = useLocation();
    const id = location.state.id;
    console.log(id)

    useEffect(() => {
        predictionServices.getPredictionById(id)
        .then(data => console.log(data))
    }, [id]);
    return (
        <div className="edintFormContainer">
            <form id = 'edit-form' action="PUT"></form>
            <label htmlFor="match" className="match"></label>
            <input type="text"  />
        </div>
    )
};

export default Editprediction;
