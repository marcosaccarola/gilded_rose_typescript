package com.gildedrose;

import static org.junit.Assert.*;

import org.junit.Test;

public class GildedRoseTest {

    @Test
    public void foo() {
        Item[] items = new Item[] { new Item("foo", 0, 0) };
        GildedRose app = new GildedRose(items);
        app.updateQuality();
        assertEquals("foo", app.items[0].name);
    }

    @Test
    public void qualityDecreaseByOne() {
        Item[] items = new Item[] { new Item("Gondor's Branch", 10, 10) };
        GildedRose app = new GildedRose(items);
        app.updateQuality();
        assertEquals(9, app.items[0].quality);
    }

    @Test
    public void qualityDecreaseByTwoIfSellByDateHasPassed() {
        Item[] items = new Item[] { new Item("Gondor's Branch", 0, 10) };
        GildedRose app = new GildedRose(items);
        app.updateQuality();
        assertEquals(8, app.items[0].quality);
    }

    @Test
    public void SulfurasQuality80AndSellIn0() {
        Item[] items = new Item[] { new Item("Sulfuras, Hand of Ragnaros", 0, 80) };
        GildedRose app = new GildedRose(items);
        app.updateQuality();
        assertEquals(0, app.items[0].sellIn);
        assertEquals(80, app.items[0].quality);
    }

    @Test
    public void AgedBrieShouldIncreaseByOneIfSellInAboveZero() {
        Item[] items = new Item[] { new Item("Aged Brie", 15, 45) };
        GildedRose app = new GildedRose(items);
        app.updateQuality();
        assertEquals(46, app.items[0].quality);
    }

    @Test
    public void AgedBrieShouldIncreaseByTwoIfSellInEqualToZero() {
        Item[] items = new Item[] { new Item("Aged Brie", 0, 45) };
        GildedRose app = new GildedRose(items);
        app.updateQuality();
        assertEquals(47, app.items[0].quality);
    }

    @Test
    public void AgedBrieMaxQualityShouldBe50() {
        Item[] items = new Item[] { new Item("Aged Brie", 0, 50) };
        GildedRose app = new GildedRose(items);
        app.updateQuality();
        assertEquals(50, app.items[0].quality);
    }

    @Test
    public void BackstageQualityShouldIncreaseByTwoIfSellInBetween10and6() {
        Item[] items = new Item[] { new Item("Backstage passes to a TAFKAL80ETC concert", 10, 40) };
        GildedRose app = new GildedRose(items);
        app.updateQuality();
        assertEquals(42, app.items[0].quality);
    }

    @Test
    public void BackstageQualityShouldIncreaseByTwoIfSellInBelow6() {
        Item[] items = new Item[] { new Item("Backstage passes to a TAFKAL80ETC concert", 5, 40) };
        GildedRose app = new GildedRose(items);
        app.updateQuality();
        assertEquals(43, app.items[0].quality);
    }

    @Test
    public void BackstageQualityShouldBe0IfSellIn0() {
        Item[] items = new Item[] { new Item("Backstage passes to a TAFKAL80ETC concert", 0, 40) };
        GildedRose app = new GildedRose(items);
        app.updateQuality();
        assertEquals(0, app.items[0].quality);
    }

    @Test
    public void BackstageMaxQualityShouldBe50() {
        Item[] items = new Item[] { new Item("Backstage passes to a TAFKAL80ETC concert", 2, 50) };
        GildedRose app = new GildedRose(items);
        app.updateQuality();
        assertEquals(50, app.items[0].quality);
    }

    // @Test
    // public void ConjuredQualityShoudDecreaseBy2() {
    // Item[] items = new Item[] { new Item("Conjured", 10, 10) };
    // GildedRose app = new GildedRose(items);
    // app.updateQuality();
    // assertEquals(8, app.items[0].quality);
    // }

    // @Test
    // public void ConjuredQualityShoudDecreaseTwiceIfSellByDateHasPassed() {
    // Item[] items = new Item[] { new Item("Conjured", 0, 10) };
    // GildedRose app = new GildedRose(items);
    // app.updateQuality();
    // assertEquals(0, app.items[0].quality);
    // }

    // @Test
    // public void ConjuredMinQualityShouldBe0() {
    // Item[] items = new Item[] { new Item("Conjured", 1, 0) };
    // GildedRose app = new GildedRose(items);
    // app.updateQuality();
    // assertEquals(0, app.items[0].quality);
    // }

    // @Test
    // public void ConjuredMinQualityShouldBe0AlsoIfSellByDateHasPassed() {
    // Item[] items = new Item[] { new Item("Conjured", 0, 0) };
    // GildedRose app = new GildedRose(items);
    // app.updateQuality();
    // assertEquals(0, app.items[0].quality);
    // }

}
