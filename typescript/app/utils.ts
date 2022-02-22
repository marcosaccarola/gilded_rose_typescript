import { Item } from "./gilded-rose"

const MAX_QUALITY=50
const MIN_QUALITY=0
const SELL_BY_DATE=1

function qualityLimiter(i: Item){
    if (i.quality > MAX_QUALITY){
        i.quality = MAX_QUALITY
    }
    if (i.quality < MIN_QUALITY){
        i.quality = MIN_QUALITY
    }
}
export const handleSulfuras=(i: Item)=>{
    if (i.name == 'Sulfuras, Hand of Ragnaros'){
        return
    }
}
export const handleAgedBrie=(i: Item)=>{
    if (i.name == 'Aged Brie' ) {
        i.quality ++
        if (i.sellIn < SELL_BY_DATE){
            i.quality ++
        }
        i.sellIn --
        qualityLimiter(i)
        }
}
export const handleBackstage=(i: Item)=>{
    if (i.name == 'Backstage passes to a TAFKAL80ETC concert') {
        i.quality ++
        if (i.sellIn < 11) {
            i.quality  ++
            }
        if (i.sellIn < 6) {
            i.quality ++
            }
        if(i.sellIn < SELL_BY_DATE){
            i.quality = MIN_QUALITY
            }
        i.sellIn --
        qualityLimiter(i)
        }
}
export const handleStandardItem=(i: Item)=>{
    if (
        i.name != 'Sulfuras, Hand of Ragnaros' &&
        i.name != 'Aged Brie' &&
        i.name != 'Backstage passes to a TAFKAL80ETC concert' &&
        i.name != 'Conjured'
        ) {
        i.quality --
        if(i.sellIn < SELL_BY_DATE){
            i.quality --
            }
        i.sellIn --
        qualityLimiter(i)
        }
}
export const handleConjured=(i: Item)=>{
    if(i.name == 'Conjured'){
        i.quality --
        i.quality --
        if(i.sellIn < SELL_BY_DATE){ 
            i.quality --
            i.quality --
            }
        i.sellIn --
        qualityLimiter(i)
        }
}