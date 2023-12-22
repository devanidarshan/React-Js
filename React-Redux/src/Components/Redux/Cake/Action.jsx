import { BUY_CAKE } from "./Type";
import {BUY_PASTRY} from "./Type"

export default function buyCake(){
    return{
         type:BUY_CAKE,
         
    }
}

export function buyPastry(){
    return{
         type:BUY_PASTRY,
         
    }
}