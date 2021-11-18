import { Button } from "@mui/material";
import SearchMatches from './SearchMatches/SearchMatches';

import "./FilterButtonContainer.css";

const FilterButtonContainer = (props) => {
    const countries = [
        'All',
        'England',
        'Italy',
        'France',
        'Germany',
        'Spain',
    ]
    
    return (
        <div className="countryFilter">
            {countries.map(country =><Button onClick = {props.onButtonClick} key = {country} className = "countryFilterButton">{country}</Button>)} 
            <SearchMatches onSearchButtonChange = {props.onSearchButtonChange}/>
        </div>
    );
};

export default FilterButtonContainer;
