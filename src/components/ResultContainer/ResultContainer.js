import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultContainer.css';
function ResultContainer({ suggestedNames }) {
    const suggestJsx = suggestedNames.map(Name => {
        return <NameCard Name={Name} Key={Name} />;
    });
    return <div className="results-container">{suggestJsx}</div>;
}

export default ResultContainer;
