import React, {useState} from 'react';
import {useForm} from 'react-hook-form'; // npm install react-hook-form
import './App.css';

function App() {
    const [countAardbei, setCountAardbei] = useState(0);
    const [countBanaan, setCountBanaan] = useState(0);
    const [countAppel, setCountAppel] = useState(0);
    const [countKiwi, setCountKiwi] = useState(0);

    const addCountAardbei = () => {
        setCountAardbei(countAardbei + 1);
    }

    const subtractCountAardbei = () => {
        setCountAardbei(countAardbei - 1);
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
        setCountAardbei(0);
        setCountBanaan(0);
        setCountAppel(0);
        setCountKiwi(0);
    }

    const {register, watch, handleSubmit, errors} = useForm();

    const onSuccess = (formData) => {
        console.log(formData)
    }

    const onError = (errorList) => {
        console.log(errorList)
    }

    const currentBezorg = watch("bezorg");

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <div>
                {countAardbei} <span>&nbsp;</span>
                🍓 <span>&nbsp;</span>
                <button onClick={addCountAardbei}>+</button>
                <span>&nbsp;</span>
                <button onClick={subtractCountAardbei}>-</button>
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
                <button className="resetButton" onClick={resetCount}>Reset</button>
            </div>

            <h1>Bestelformulier</h1>
            <form onSubmit={handleSubmit(onSuccess, onError)}>
                <div>
                    <label htmlFor="firstName">Voornaam: </label>
                    <input
                        name="firstName"
                        id="firstName"
                        type="text"
                        ref={register({required: true})}
                    />
                    <div className="error">
                        {errors.firstName && <p>⚠ Voornaam is verplicht</p>}
                    </div>
                </div>

                <div>
                    <label htmlFor="lastName">Achternaam: </label>
                    <input
                        name="lastName"
                        id="lastName"
                        type="text"
                        ref={register({required: true})}
                    />
                    <div className="error">
                        {errors.lastName && <p>⚠ Achternaam is verplicht</p>}
                    </div>
                </div>

                <div>
                    <label htmlFor="age">Leeftijd: </label>
                    <input
                        name="age"
                        id="age"
                        type="number"
                        ref={register({required: true, min: 18})}
                    />
                    <div className="error">
                        {errors.age && <p>⚠ Je moet minimaal 18 jaar zijn</p>}
                    </div>
                </div>

                <div>
                    <label htmlFor="zipCode">Postcode: </label>
                    <input
                        name="zipCode"
                        id="zipCode"
                        type="text"
                        ref={register({required: true, pattern: /^[0-9]{4}[a-zA-Z]{2}$/})}
                    />
                    <div className="error">
                        {errors.zipCode && <p>⚠ Postcode klopt niet</p>}
                    </div>
                </div>

                <fieldset>
                    <legend>Bezorgfrequentie</legend>
                    <div>
                        <label>
                            <input
                                ref={register({required: true})}
                                type="radio"
                                value="iedereweek"
                                name="bezorg"
                                id="iedere-week"
                            />
                            Iedere week
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                ref={register({required: true})}
                                type="radio"
                                value="omdeweek"
                                name="bezorg"
                                id="om-de-week"
                            />
                            Om de week
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                ref={register({required: true})}
                                type="radio"
                                value="iederemaand"
                                name="bezorg"
                                id="iedere-maand"
                            />
                            Iedere maand
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                ref={register({required: true})}
                                type="radio"
                                value="other"
                                name="bezorg"
                                id="pet-other"
                            />
                            Anders
                        </label>
                    </div>
                    {currentBezorg === "other" && (
                        <div>
                            <label htmlFor="other-bezorg"/>
                            <input
                                ref={register({required: true})}
                                name="otherbezorg"
                                type="text"
                                id="other-bezorg"
                            />
                            <div className="error">
                                {errors.otherbezorg && <p>⚠ Verplicht</p>}
                            </div>
                        </div>
                    )}
                </fieldset>

                <div>
                    <label htmlFor="remark">Opmerking: </label>
                    <textarea
                        name="remark"
                        id="remark"
                        rows="5"
                        cols="35"
                        ref={register}
                    />
                </div>

                <div>
                    <input
                        type="checkbox"
                        name="agree"
                        id="agree"
                        ref={register({required: true})}
                    />
                    <label htmlFor="agree" id="agree">Ik ga akkoord met de voorwaarden</label>
                    <div className="error">
                        {errors.agree && <p>⚠ Je moet akkoord gaan met de voorwaarden</p>}
                    </div>
                </div>
                <div>
                    <button className="resetButton">Verzend</button>
                </div>
            </form>
        </>
    );
}

export default App;