import {useNavigate} from 'react-router-dom';

import './AdminButtons.css';


const AdminButtons = ({id, urlMatchInfo}) => {
    const navigate = useNavigate();
    const onEditButtonClickHandler = () => {
        navigate( `/predictions/${urlMatchInfo}/edit` , {state: {id}});
    };

    const onDeleteButtonClickHandler = () => {
        console.log(id)
    };
    return (
    <div className="adminButtonsWrapper">
        <button className = 'adminButtonsStyle' onClick = {onEditButtonClickHandler}>Edit</button>
        <button className = 'adminButtonsStyle' onClick = {onDeleteButtonClickHandler}>Delete</button>
    </div>
    )
}

export default AdminButtons;