export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

const MAX_QUALITY=50
const MIN_QUALITY=0
const MIN_SELL_IN=0

export class GildedRose {
    items: Array<Item>;

    constructor(items = []) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name == 'Sulfuras, Hand of Ragnaros'){
                    continue
                }
            if (this.items[i].name == 'Aged Brie' ) {
                if (this.items[i].quality < MAX_QUALITY) {
                            this.items[i].quality ++
                        }
                if (this.items[i].quality < MAX_QUALITY && this.items[i].sellIn == MIN_SELL_IN){
                        this.items[i].quality ++
                    }
                }
            if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
                if (this.items[i].quality < MAX_QUALITY) {
                        this.items[i].quality ++
                    }
                if (this.items[i].quality < MAX_QUALITY && this.items[i].sellIn < 11) {
                            this.items[i].quality  ++
                    }
                if (this.items[i].quality < MAX_QUALITY && this.items[i].sellIn < 6) {
                        this.items[i].quality ++
                    }
                if(this.items[i].sellIn == MIN_SELL_IN){
                        this.items[i].quality = MIN_QUALITY
                    }
                }
            if (
                this.items[i].name != 'Sulfuras, Hand of Ragnaros' &&
                this.items[i].name != 'Aged Brie' &&
                this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert'
                ) {
                if (this.items[i].quality > MIN_QUALITY) {
                        this.items[i].quality --
                    }
                if(this.items[i].quality > MIN_QUALITY && this.items[i].sellIn == MIN_SELL_IN){
                        this.items[i].quality --
                    }
                }
            if(this.items[i].name == 'Conjured'){
                if(this.items[i].quality > MIN_QUALITY ){
                            this.items[i].quality --
                        }
                if(this.items[i].quality > MIN_QUALITY && this.items[i].sellIn == MIN_SELL_IN){ 
                            this.items[i].quality --
                        }  
                } 
                
                this.items[i].sellIn --;
            }
        return this.items;
    }
}
