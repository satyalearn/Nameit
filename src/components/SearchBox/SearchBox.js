import React from 'react';
import './SearchBox.css';
function SearchBox({ handleInputChange }) {
    return (
        <div className="search-container">
            <input
                type="text"
                className="search-input"
                placeholder="type keywords"
                onChange={e => {
                    handleInputChange(e.target.value);
                }}
            />
        </div>
    );
}

export default SearchBox;
