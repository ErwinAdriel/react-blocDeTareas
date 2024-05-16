import { useState } from "react";
import Nota from "./Nota";


export default function Bloc(){

    const [title, setTitle] = useState("Hola");
    const [notas, setNotas] = useState([]);


    function handleChange(event){
        const value = event.target.value;

        setTitle(value);
    }

    function handleSubmit(e){
        e.preventDefault();

        const newNota = {
            id: crypto.randomUUID(),
            title: title,
            completed: false,
        };

        const temp = [...notas];
        temp.unshift(newNota);

        setNotas(temp);
    }
    return(
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    onChange={handleChange} 
                    className="input" 
                    placeholder="Ingresar tarea">
                </input>
                <input
                    onClick={handleSubmit}
                    type="submit" 
                    value="Guardar" 
                    className="buttonGuardar">
                </input>
            </form>
            <div className="notasContainer">
                {notas.map((item) => (
                    <Nota key={item.id} item={item}/>
                ))}
            </div>
        </div>
        
    );
}