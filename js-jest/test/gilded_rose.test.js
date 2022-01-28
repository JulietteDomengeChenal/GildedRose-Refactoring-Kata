const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  it("Elixir of the Mongoose", function() {
    new Shop([new Item("Elixir of the Mongoose", 5, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(9);
  });

  it("Conjured Mana Cake", function() {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 5, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
  });

  it("Backstage passes to a TAFKAL80ETC concert", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(13);
  });

  it("Backstage passes to a TAFKAL80ETC concert end", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", -1, 32)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it("Aged Brie", function() {
    const gildedRose = new Shop([new Item("Aged Brie", -2, 13)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(15);
  });

  it("+5 Dexterity Vest", function() {
    const gildedRose = new Shop([new Item("+5 Dexterity Vest", -2, 13)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(11);
  });

});