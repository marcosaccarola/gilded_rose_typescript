# -*- coding: utf-8 -*-
import unittest

from gilded_rose import Item, GildedRose


class GildedRoseTest(unittest.TestCase):
    def test_foo(self):
        items = [Item("foo", 0, 0)]
        gilded_rose = GildedRose(items)
        gilded_rose.update_quality()
        self.assertEquals("foo", items[0].name)

    def test_standard_items_quality_decrease_by_1(self):
        items = [Item("+5 Dexterity Vest", 10, 10)]
        gilded_rose = GildedRose(items)
        gilded_rose.update_quality()
        self.assertEquals(9, items[0].quality)

    def test_standard_items_quality_decrease_by_2_if_sell_by_date_passed(self):
        items = [Item("an Item", 0, 10)]
        gilded_rose = GildedRose(items)
        gilded_rose.update_quality()
        self.assertEquals(8, items[0].quality)

    def test_Sulfuras_immutable(self):
        items = [Item("Sulfuras, Hand of Ragnaros", 5, 80)]
        gilded_rose = GildedRose(items)
        gilded_rose.update_quality()
        self.assertEquals(80, items[0].quality)
        self.assertEquals(5, items[0].sell_in)

    def test_Aged_Brie_quality_increase_by_1_if_sellIn_above_0(self):
        items = [Item("Aged Brie", 10, 45)]
        gilded_rose = GildedRose(items)
        gilded_rose.update_quality()
        self.assertEquals(46, items[0].quality)

    def test_Aged_Brie_quality_increase_by_2_if_sellIn_is_0(self):
        items = [Item("Aged Brie", 0, 45)]
        gilded_rose = GildedRose(items)
        gilded_rose.update_quality()
        self.assertEquals(47, items[0].quality)

    def test_Aged_Brie_max_quality_is_50(self):
        items = [Item("Aged Brie", 0, 50)]
        gilded_rose = GildedRose(items)
        gilded_rose.update_quality()
        self.assertEquals(50, items[0].quality)

    def test_Backstage_quality_increase_by_2_if_sell_in_between_6_and_10(self):
        items = [Item("Backstage passes to a TAFKAL80ETC concert", 8, 10)]
        gilded_rose = GildedRose(items)
        gilded_rose.update_quality()
        self.assertEquals(12, items[0].quality)

    def test_Backstage_quality_increase_by_3_if_sell_in_between_5_and_1(self):
        items = [Item("Backstage passes to a TAFKAL80ETC concert", 5, 10)]
        gilded_rose = GildedRose(items)
        gilded_rose.update_quality()
        self.assertEquals(13, items[0].quality)

    def test_Backstage_quality_is_0_if_sellIn_is_0(self):
        items = [Item("Backstage passes to a TAFKAL80ETC concert", 0, 10)]
        gilded_rose = GildedRose(items)
        gilded_rose.update_quality()
        self.assertEquals(0, items[0].quality)

    def test_Backstage_max_quality_is_50(self):
        items = [Item("Backstage passes to a TAFKAL80ETC concert", 5, 50)]
        gilded_rose = GildedRose(items)
        gilded_rose.update_quality()
        self.assertEquals(50, items[0].quality)

    def test_Conjured_quality_decrease_by_2(self):
        items = [Item("Conjured", 10, 10)]
        gilded_rose = GildedRose(items)
        gilded_rose.update_quality()
        self.assertEquals(8, items[0].quality)

    def test_Conjured_quality_decrease_by_4_if_sell_by_date_has_passed(self):
        items = [Item("Conjured", 0, 10)]
        gilded_rose = GildedRose(items)
        gilded_rose.update_quality()
        self.assertEquals(6, items[0].quality)

    def test_Conjured_min_quality_is_0(self):
        items = [Item("Conjured", 5, 1)]
        gilded_rose = GildedRose(items)
        gilded_rose.update_quality()
        self.assertEquals(0, items[0].quality)

    def test_Conjured_min_quality_is_0_also_if_sell_by_date_has_passed(self):
        items = [Item("Conjured", 0, 1)]
        gilded_rose = GildedRose(items)
        gilded_rose.update_quality()
        self.assertEquals(0, items[0].quality)


if __name__ == '__main__':
    unittest.main()
