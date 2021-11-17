import { AiOutlineSearch } from "react-icons/ai"

import './SearchMatches.css'

const SearchMatches = (props) => {
    return (
        <>
            <AiOutlineSearch className = "searchIcon" />
            <input
                onChange = {props.onSearchButtonChange}
                className="matchSearchField"
                type="text"
                placeholder="Team Name"
            />
        </>
    );
};

export default SearchMatches;
