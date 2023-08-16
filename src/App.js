import React, { useState } from 'react';
import './App.css';

function App() {
    // Initialize counter state and the function to update it
    const [counter, setCounter] = useState(1);

    // For demonstration purposes, make setCounter accessible globally.
    // This approach is NOT recommended in a real-world application.
    window.changeCounter = (value) => setCounter(value);

    return (
        <div className="App">
            <header className="App-header">
                <h1>{counter}</h1>
                <h4>{counter}</h4>
                <button onClick={() => setCounter(counter + 1)}>Increase</button>
            </header>
        </div>
    );
}

export default App;

