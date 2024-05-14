import { useState } from "react";


export default function Bloc(){
    return(
        <div className="container">
            <form className="form">
                <input className="input"></input>
                <input type="submit" value="Guardar" className="buttonGuardar"></input>
            </form>
        </div>
        
    );
}