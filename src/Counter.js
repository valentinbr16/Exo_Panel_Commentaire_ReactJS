import React, {useState} from 'react'

export default function Counter() {
    /*
    bachi: afficher la valeur de l'état
    useState(0): entre parenthèses, valeur initiale de l'état 
    setBachi: crée la fonction qui permet de modifier l'état
    state = {
        bachi: 0,
        titleOfTheDead: "mon titre qui tue sa mère"
    }
    */
    let [bachi, setBachi] = useState(0);
    let [titleOfTheDead, setTitleOfTheDead] = useState("mon titre qui tue sa mère");

    function incrementBachi() {
        /*
        Equivalent de 
        this.setState({bachi: this.state.bachi +1})
        */
        setBachi(bachi+1);
        setTitleOfTheDead("Mon nouveau titre");
    }

    return (
        <div className="counter">
            <button onClick={incrementBachi}>Cliquez moi {bachi} fois</button>
            <h1>{titleOfTheDead}</h1>
        </div>

    )
}