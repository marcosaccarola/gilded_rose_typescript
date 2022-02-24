import { Item } from "./gilded-rose"

const MAX_QUALITY=50
const MIN_QUALITY=0
const SELL_BY_DATE=0

function qualityLimiter(i: Item){
    i.quality = Math.min(Math.max(i.quality, MIN_QUALITY), MAX_QUALITY)
}
function expirationDateIncreasesQuality(i: Item){
    if (i.sellIn < SELL_BY_DATE){
        i.quality ++
    }
}
function expirationDateDecreasesQuality(i: Item){
    if (i.sellIn < SELL_BY_DATE){
        i.quality --
    }
}
function backstageSpecialBehavior(i: Item){
    if (i.sellIn < 11) {
        i.quality  ++
        }
    if (i.sellIn < 6) {
        i.quality ++
        }
    if(i.sellIn < SELL_BY_DATE){
        i.quality = MIN_QUALITY
        }
}

export const handleSulfuras=(i: Item)=>{
    if (i.name == 'Sulfuras, Hand of Ragnaros'){
        return true
    }
}
export const handleAgedBrie=(i: Item)=>{
    if (i.name == 'Aged Brie' ) {
        i.sellIn --
        i.quality ++
        expirationDateIncreasesQuality(i)
        qualityLimiter(i)
        return true
        }
}
export const handleBackstage=(i: Item)=>{
    if (i.name == 'Backstage passes to a TAFKAL80ETC concert') {
        i.sellIn --
        i.quality ++
        backstageSpecialBehavior(i)
        qualityLimiter(i)
        return true
        }
}
export const handleConjured=(i: Item)=>{
    if(i.name == 'Conjured'){
        i.sellIn --
        i.quality --
        i.quality --
        expirationDateDecreasesQuality(i)
        expirationDateDecreasesQuality(i)
        qualityLimiter(i)
        return true
        }
}
export const handleStandardItem=(i: Item)=>{
    i.sellIn --
    i.quality --
    expirationDateDecreasesQuality(i)
    qualityLimiter(i)
}