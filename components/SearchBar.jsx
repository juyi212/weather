import React, {useState} from 'react';
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
    const selectList = ["korea","japen","china","london","europe"]
    const [selected, setSelected] = useState("")
    const handleChangeSelect = (event) => {
        // 데이터 보내기 
        setSelected(event.target.value)
    }
    return (
        <div className="searchbar-container">
            <div className="searchbar-box">
                <input className="searchbar" list="city" onChange={handleChangeSelect} value={selected}></input>
                    <select id="city" onChange={handleChangeSelect} value={selected}>
                        {selectList.map((item, i) => (
                            <option value={item} key={i}>{item}</option>
                        ))}
                    </select>
                <FontAwesomeIcon icon={faSearch} className="search-icon" />         
            </div>
        </div>
    )
}

export default SearchBar;