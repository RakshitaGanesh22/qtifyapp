import { createContext, useState, } from "react";
export const MyContext = createContext();
export const MyProvider=({children})=>{
    const [albumData,setAlbum]=useState({});
    const[newAlbum,setNewAlbum]=useState({});
    return(
        <MyContext.Provider value={{albumData,setAlbum,newAlbum,setNewAlbum}}>{children}</MyContext.Provider>
    )
}