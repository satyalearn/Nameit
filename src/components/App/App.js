import React, { useState } from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import ResultContainer from '../ResultContainer/ResultContainer';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

function App() {
    const [text, setText] = useState(true);
    const [suggestedNames, setSuggestedNames] = useState([]);
    const handleInputChange = inputText => {
        console.log(inputText);
        setText(!inputText);
        setSuggestedNames(inputText ? name(inputText) : []);
    };

    // console.log(name('cloud'));
    return (
        <div className="App">
            <Header headerExpanded={text} />
            <SearchBox handleInputChange={handleInputChange} />
            <ResultContainer suggestedNames={suggestedNames} text={text} />
        </div>
    );
}
export default App;

/* class based component*/

/* class App extends React.Component {
    state ={
        headerText:'this is cool app'
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.headerText}</h1>
                <button onClick={()=>{
                    this.setState({headerText:"wow"})
                }}></button>
            </div>
        );
    }
}
 export default App; */

//state
// state is an js obj where we save the data which will get change in future

//Props
// props is the data which we can tranfer data from parent to child

// npm install gh-pages --save-dev
