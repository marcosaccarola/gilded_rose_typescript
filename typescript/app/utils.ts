import { Item } from "./gilded-rose"

const MAX_QUALITY=50
const MIN_QUALITY=0
const SELL_BY_DATE=1

export const handleConjured=(i: Item)=>{
    if(i.name == 'Conjured'){
        if(i.quality > MIN_QUALITY ){
                i.quality --
            }
        if(i.quality > MIN_QUALITY && i.sellIn < SELL_BY_DATE){ 
                i.quality --
            }
        if(i.quality > MIN_QUALITY ){
                i.quality --
            }
        if(i.quality > MIN_QUALITY && i.sellIn < SELL_BY_DATE){ 
                i.quality --
            }
            i.sellIn --
        }
}