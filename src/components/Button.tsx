import { useState } from "react";

export function Button() {

    //let cont = 0;
    const [cont, setCont] = useState(0);

    function increment() {
        //cont++;
        setCont(cont + 1);

        console.log(cont);
    }

    return (
        <button onClick={increment}>{cont}</button>
    )
}
