import { useState } from "react";

export function useLocalStorage<typeOfData> (key:string, initialValue: typeOfData)  {
    
    const [storedValue, setStoredValue] = useState(()=>{
        try{
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item): initialValue;
            
            
            
        } catch(error){
            console.log(error);
        }

    });


    const setValue = (value: any) => {
        try{
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value))
            
        } catch(error){
            console.log(error)
        }
    }

    return [storedValue, setValue]
}