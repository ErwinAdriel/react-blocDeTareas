import { useState } from "react";


export default function Bloc(){

    const [title, setTitle] = useState("Hola");

    function handleClick(e){
        e.preventDefault();
        setTitle('Adriel');
    }
    return(
        <div className="container">
            <form className="form">
                <input className="input" value={title}></input>
                <input
                onClick={handleClick}
                type="submit" 
                value="Guardar" 
                className="buttonGuardar">
                </input>
            </form>
        </div>
        
    );
}