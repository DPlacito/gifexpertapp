import { useState } from "react"

export const AddCategory = () => {
    const [inputValue, setInputValue] = useState('One Punch')
    
    const onInputChange = () => { 
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => { 
        event.preventDefault();
    } 
  
    return (
        <form onSubmit={ (event) => onSubmit(event) }>
           <input
            type="text"
            placeholder="Buscar Gifs"
            value={inputValue}
            onChange={ onInputChange }
            />
        </form>
  )
}
