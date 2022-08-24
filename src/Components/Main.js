import React, { useState } from "react";
import './Main.css';
import Die from "./Die";
export default function Main () {
    function allNewDice() {
        let newDice = [];
        for(let i = 0; i<10; i++) {
            newDice.push(Math.ceil(Math.random() *6 ))
        }
        return newDice;
    }
    let [dice, setDice ] = useState(allNewDice())

    let diceElements = dice.map(die => <Die value={die} />)
    function rollDie() {
        setDice(allNewDice)
    }
    console.log(allNewDice())
    return (
        <section className="Main">
             <div className="box">
                 <div className="box-item">
                   {diceElements}
                 </div>
                 <button className="roll-dice" onClick={rollDie}>Roll</button>
             </div>
        </section>
    )
}