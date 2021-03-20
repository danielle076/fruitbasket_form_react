import React, {useState} from 'react';
import './App.css';

function App() {
    const [countAardbij, setCountAardbij] = useState(0);
    const [countBanaan, setCountBanaan] = useState(0);
    const [countAppel, setCountAppel] = useState(0);
    const [countKiwi, setCountKiwi] = useState(0);

    const addCountAardbij = () => {
        setCountAardbij(countAardbij + 1);
    }

    const subtractCountAardbij = () => {
        setCountAardbij(countAardbij - 1);
    }

    const addCountBanaan = () => {
        setCountBanaan(countBanaan + 1);
    }

    const subtractCountBanaan = () => {
        setCountBanaan(countBanaan - 1);
    }

    const addCountAppel = () => {
        setCountAppel(countAppel + 1);
    }

    const subtractCountAppel = () => {
        setCountAppel(countAppel - 1);
    }

    const addCountKiwi = () => {
        setCountKiwi(countKiwi + 1);
    }

    const subtractCountKiwi = () => {
        setCountKiwi(countKiwi - 1);
    }

    const resetCount = () => {
        setCountAardbij(0);
        setCountBanaan(0);
        setCountAppel(0);
        setCountKiwi(0);
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <div>
                {countAardbij} <span>&nbsp;</span>
                🍓 <span>&nbsp;</span>
                <button onClick={addCountAardbij}>+</button>
                <span>&nbsp;</span>
                <button onClick={subtractCountAardbij}>-</button>
            </div>
            <div>
                {countBanaan} <span>&nbsp;</span>
                🍌 <span>&nbsp;</span>
                <button onClick={addCountBanaan}>+</button>
                <span>&nbsp;</span>
                <button onClick={subtractCountBanaan}>-</button>
            </div>
            <div>
                {countAppel} <span>&nbsp;</span>
                🍏 <span>&nbsp;</span>
                <button onClick={addCountAppel}>+</button>
                <span>&nbsp;</span>
                <button onClick={subtractCountAppel}>-</button>
            </div>
            <div>
                {countKiwi} <span>&nbsp;</span>
                🥝 <span>&nbsp;</span>
                <button onClick={addCountKiwi}>+</button>
                <span>&nbsp;</span>
                <button onClick={subtractCountKiwi}>-</button>
            </div>
            <div>
                <button className="resetButton" onClick={resetCount}>reset</button>
            </div>
        </>
    );
}

export default App;
