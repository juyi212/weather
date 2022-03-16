import React from 'react';
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
    return (
        <div className="searchbar-container">
            <input className="searchbar"/>
            <FontAwesomeIcon icon={faSearch} className="search" />         
        </div>
    )
}

export default SearchBar;