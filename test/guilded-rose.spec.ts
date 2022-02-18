import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {
    
    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
    });
    it('Quality should decrease by 1', function() {
        const gildedRose = new GildedRose([ new Item('Some item', 10, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(9);
    });
    it('Quality should decrease by 2 if the sell by date has passed', function() {
        const gildedRose = new GildedRose([ new Item('Some item', 0, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(8);
    });
    it('Sulfuras quality should be 80 and SellIn 0', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 0, 80) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(80);
        expect(items[0].sellIn).to.equal(0);
    });
    it('Aged Brie quality should increase by 1 if SellIn >0', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 1, 45) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(46);
    });
    it('Aged Brie quality should increase by 2 if SellIn ==0', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 0, 45) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(47);
    });
    it('Aged Brie maximum quality should be 50', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 0, 50) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.be.below(51);
    });
    it('Backstage quality should increase by 2 if SellIn <11 && SellIn >5', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 40) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(42);
    });
    it('Backstage quality should increase by 3 if SellIn <6', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 40) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(43);
    });
    it('Backstage quality should be 0 if SellIn ==0', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 0, 40) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
    });
    it('Backstage maximum quality should be 50', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 1, 49) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.be.below(51);
    });
    it('Conjured quality should decrease by 2', function() {
        const gildedRose = new GildedRose([ new Item('Conjured', 10, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(8);
    });
    it('Conjured quality should decrease twice if the sell by date has passed', function() {
        const gildedRose = new GildedRose([ new Item('Conjured', 0, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(6);
    });
    it('Conjured minimum quality should be 0', function() {
        const gildedRose = new GildedRose([ new Item('Conjured', 1, 1) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.be.above(-1);
    });
    it('Conjured minimum quality should be 0 also if the sell by date has passed', function() {
        const gildedRose = new GildedRose([ new Item('Conjured', 0, 1) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
    });

});
