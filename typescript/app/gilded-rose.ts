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
            handleSulfuras(this.items[i])
            handleAgedBrie(this.items[i])
            handleBackstage(this.items[i])
            handleStandardItem(this.items[i])
            handleConjured(this.items[i])
            }
        return this.items;
    }
}
