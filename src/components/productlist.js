
import { useContext } from "react"
import { list } from "../pdtinfo"
import Product from './product'


const ProductList=({})=>{
    
    return(
        <div>

        
     
        <div className="grid grid-cols-3 gap-4 p-8">
            
            {list.map((prod)=>{
               
                return(
                    
<Product className=""  key={prod.id} prod={prod} />

                )
              
                
            })}
          
            

        </div>
        </div>
    )
}
export default ProductList