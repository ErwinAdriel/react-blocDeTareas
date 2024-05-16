import { useState } from "react";

export default function Nota({item}){

    const[isEdit, setIsEdit] = useState(false);


    return(
        <div className="todo">
            {isEdit ? (
                <div>Modo editar</div>    
            ) : (
                <div>
                    {item.title}
                    <button onClick={() => setIsEdit(true)}> Editar</button>
                    <button>Eliminar</button>
                </div>
            )}
        </div>
        
    );
}