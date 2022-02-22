export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

const MAX_QUALITY=50
const MIN_QUALITY=0
const SELL_IN=1

function handleSulfuras(i: Item){
    if (i.name == 'Sulfuras, Hand of Ragnaros'){
        return
    }
}
function handleAgedBrie(i: Item){
    if (i.name == 'Aged Brie' ) {
        if (i.quality < MAX_QUALITY) {
                i.quality ++
                }
        if (i.quality < MAX_QUALITY && i.sellIn < SELL_IN){
                i.quality ++
            }
            i.sellIn --
        }
}
function handleBackstage(i: Item){
    if (i.name == 'Backstage passes to a TAFKAL80ETC concert') {
        if (i.quality < MAX_QUALITY) {
                i.quality ++
            }
        if (i.quality < MAX_QUALITY && i.sellIn < 11) {
                i.quality  ++
            }
        if (i.quality < MAX_QUALITY && i.sellIn < 6) {
                i.quality ++
            }
        if(i.sellIn < SELL_IN){
                i.quality = MIN_QUALITY
            }
            i.sellIn --
        }
}
function handleStandardItem(i: Item){
    if (
        i.name != 'Sulfuras, Hand of Ragnaros' &&
        i.name != 'Aged Brie' &&
        i.name != 'Backstage passes to a TAFKAL80ETC concert' &&
        i.name != 'Conjured'
        ) {
        if (i.quality > MIN_QUALITY) {
                i.quality --
            }
        if(i.quality > MIN_QUALITY && i.sellIn < SELL_IN){
                i.quality --
            }
            i.sellIn --
        }
}
function handleConjured(i: Item){
    if(i.name == 'Conjured'){
        if(i.quality > MIN_QUALITY ){
                i.quality --
            }
        if(i.quality > MIN_QUALITY && i.sellIn < SELL_IN){ 
                i.quality --
            }
        if(i.quality > MIN_QUALITY ){
                i.quality --
            }
        if(i.quality > MIN_QUALITY && i.sellIn < SELL_IN){ 
                i.quality --
            }
            i.sellIn --
        }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = []) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            handleSulfuras(this.items[i])
            handleAgedBrie(this.items[i])
            handleBackstage(this.items[i])
            handleStandardItem(this.items[i])
            handleConjured(this.items[i])
            }
        return this.items;
    }
}
