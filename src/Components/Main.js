import React, { useState } from "react";
import './Main.css';
import {nanoid} from 'nanoid';
import Die from "./Die";
export default function Main () {
    function allNewDice() {
        let newDice = [];
        for(let i = 0; i<10; i++) {
            newDice.push({
               value: Math.ceil(Math.random() *6 ),
               isHeld: true,
               id: nanoid()
            })
        }
        return newDice;
    }
    let [dice, setDice ] = useState(allNewDice())

    let diceElements = dice.map(die => <Die 
        key={die.id} value={die.value} isHeld={die.isHeld} 
        holdDice={()=> holdDice(die.id)}
    />)

    function rollDie() {
        setDice(allNewDice)
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
             <div className="box">
                 <div className="box-item">
                   {diceElements}
                 </div>
                 <button className="roll-dice" onClick={rollDie}>Roll</button>
             </div>
        </section>
    )
}