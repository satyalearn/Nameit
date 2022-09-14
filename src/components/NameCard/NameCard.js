import React from 'react';
import './NameCard.css';

const nameCheapUrl =
    'https://www.namecheap.com/domains/registration/results/?domain=';

function NameCard({ Name }) {
    return (
        <a
            target="_blank"
            rel="noreferrer"
            className="card-link"
            href={`${nameCheapUrl}${Name}`}
        >
            <div className="result-name-card">
                <p className="result-name">{Name}</p>
            </div>
        </a>
    );
}

export default NameCard;
