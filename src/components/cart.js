import Product from "./product"
import { list } from "../pdtinfo"
import { useState,useEffect,useContext } from "react"
import { carter } from "../context"

const Cart=()=>{
    const [total,setTotal]=useState()
    const {cart,setCart}=useContext(carter)
    useEffect(()=>{
setTotal(cart.reduce((acc,curr)=> acc + Number(curr.price),0))
    },[cart])
    const cartProducts = list.filter((prod) =>
    cart.some((item) => item.id === prod.id)
  );

    return(
        <div>
<span>My Cart</span><br/>

<div className="grid grid-cols-3 gap-4" >
{cartProducts.map((prod) => (
  <Product prod={prod} key={prod.id}  />
))}
<span className="text-3xl font-bold">Total: Rs {total}</span>

</div>
        </div>
    )
}
export default Cart