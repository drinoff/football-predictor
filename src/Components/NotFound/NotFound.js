import notFound from "../../Assets/images/notFound.svg";
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="notFoundContainer">
            <h1 className="notFounfdErrorHeading">
                404:The Page you are looking for is not here
            </h1>
            <h3 className="secondaryError">
                You either tried some shady route or you came here by mistake.
                Whichever it is, try using the navigation.
            </h3>
            <img className="notFoundImage" src={notFound} alt="404cat" />
            <button className="notFoundButton">Back to Matches</button>
        </div>
    );
};

export default NotFound;
