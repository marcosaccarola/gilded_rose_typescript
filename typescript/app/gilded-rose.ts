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

import { handleSulfuras, handleAgedBrie, handleBackstage, handleStandardItem, handleConjured } from "./utils";

export class GildedRose {
    items: Array<Item>;

    constructor(items = []) {
        this.items = items;
    }

    updateQuality() {


        for (let i = 0; i < this.items.length; i++) {
            if (handleSulfuras(this.items[i])){
                continue
            } else if (handleAgedBrie(this.items[i])){
                continue
            } else if (handleBackstage(this.items[i])){
                continue
            } else if (handleConjured(this.items[i])){
                continue
            } else {
                handleStandardItem(this.items[i])
            }
        }
        return this.items;
    }
}
