import { useState } from "react";

export default function Nota({item, onUpdate, onDelete}){

    const[isEdit, setIsEdit] = useState(false);

    function FormEdit(){

        const [newValue, setNewValue] = useState(item.title)
        
        function handleSubmit(e){
            e.prevenDefault();
        }

        function handleChange(e){
            const value = e.target.value;
            setNewValue(value);
        }
        
        function handleClickUpdate(){
            onUpdate(item.id, newValue);
            setIsEdit(false);
        }
        return(
            <form className="updateForm" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className="input" 
                    onChange={handleChange} 
                    value={newValue}>
                    </input>
                <button className="btnActualizar" onClick={handleClickUpdate}>Actualizar</button>
            </form>
        );
    }

    function TodoElement(){
        return(
            <div className="todoInfo">
                <span className="todoTitle">{item.title}</span>
                <button className="btnUpdate" onClick={() => setIsEdit(true)}> Editar</button>
                <button className="btnDelete" onClick={(e) => onDelete(item.id)}>Eliminar</button>
            </div>
        )
    }

    return(
        <div className="todo">
            {isEdit ? <FormEdit/> : <TodoElement/>}
        </div>
        
    );
}