import React, { useState } from "react";
import './Main.css';
import {nanoid} from 'nanoid';
import Die from "./Die";
export default function Main () {
    let [dice, setDice ] = useState(allNewDice())

    let diceElements = dice.map(die => <Die 
        key={die.id} value={die.value} isHeld={die.isHeld} 
        holdDice={()=> holdDice(die.id)}
    />)

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() *6 ),
            isHeld: false,
            id: nanoid()
        }
    }

    function allNewDice() {
        let newDice = [];
        for(let i = 0; i<10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice;
    }

    

    function rollDie() {
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld ? die : generateNewDie()
        }))
    }
    function holdDice(id) {
        console.log(id)
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ?
            {...die, isHeld: !die.isHeld} : die
        }))
    }
    console.log(allNewDice())
    return (
        <section className="Main">
            <h1  className="title">Dice Tenzies</h1>
            <p className="instructions">Roll until all dices are same. Click each die to freezon it at its current value between rolls</p>
             <div className="box">
                 <div className="box-item">
                   {diceElements}
                 </div>
                 <button className="roll-dice" onClick={rollDie}>Roll</button>
             </div>
        </section>
    )
}