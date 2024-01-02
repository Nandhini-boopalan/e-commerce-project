import { createContext, useState } from "react"
export const carter=createContext()

const Context=({children})=>{
    const [cart,setCart]=useState([])
    return(
        <carter.Provider value={{cart,setCart}}>
{children}
        </carter.Provider>
    )
}
export default Context