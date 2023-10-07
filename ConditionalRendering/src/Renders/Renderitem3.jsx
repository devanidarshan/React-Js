const ItemStatus = ({Item , ItemPacked}) => {
     return(
          <li>
               {ItemPacked ? Item : null}
          </li>
     )
}

const RenderItem3 = () => {
  return (
    <div>
    <ul>
     <ItemStatus Item ="1. Take a bowl" ItemPacked={false}/>
     <ItemStatus Item ="2. Combine Sugar ,Cocao Powder" ItemPacked={false}/>
     <ItemStatus Item ="3. Add Boiling Water" ItemPacked={true}/>
     <ItemStatus Item ="4. Stirring Continuesly" ItemPacked={false}/>
     <ItemStatus Item ="5. Stir in milk and heat until very hot without boiling. " ItemPacked={true}/>
     <ItemStatus Item ="6. Remove from heat; add vanilla" ItemPacked={true}/>
     <ItemStatus Item ="7. Add Cream" ItemPacked={true}/>
     <ItemStatus Item ="8. Drinking temperature then divide hot cocoa " ItemPacked={true}/>
     <ItemStatus Item ="9. Serve Cold Coco and enjoy!" ItemPacked={true}/>
    </ul>
    </div>
  )
}


export default RenderItem3