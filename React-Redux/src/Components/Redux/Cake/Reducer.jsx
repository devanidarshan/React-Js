import { BUY_CAKE, BUY_PASTRY } from "./Type";

const initialState = {
     numOfCakes:10,
     numOfPastry:10,
}
export const reducer = (state = initialState , action) => {
    switch(action.type){
         case BUY_CAKE:return{
              ...state,
              numOfCakes:state.numOfCakes > 0 ? state.numOfCakes - 1 : 0,
         }
         case BUY_PASTRY:return{
          ...state,
          numOfPastry:state.numOfPastry  > 0 ? state.numOfPastry -1 : 0,
     }
         default:return state
    }
}