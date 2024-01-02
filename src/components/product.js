import {carter}  from "../context"
import { useContext } from "react"


const Product=({prod})=>{
    const {cart,setCart}=useContext(carter)
    console.log(useContext(carter))
    

    
    return(
        <div className="border border-gray-400 shadow-lg p-6">

       
        
            <img className="h-40" src={prod.img} alt="pic"/>
<p className="font-semibold">{prod.title}</p>
<p>{prod.author}</p>
<p>Price(Rs): {prod.price}</p>
{cart.includes(prod)?(<button onClick={()=>{
    setCart(cart.filter((c)=> c.id !== prod.id))
}} className="border border-gray-500 p-2">Remove to cart</button>

):(<button onClick={()=>{
    setCart([...cart,prod])
}} className="border border-gray-500 m-2 px-2">Add to cart</button>
)}


       
        </div>
    )
}
export default Product