(function() {
  'use strict';

  angular.module('ShoppingApp', [])
  .controller('ToBuyController', ToBuyController)
  .controller('BoughtController', BoughtController)
  .service('ShoppingService', ShoppingService);

  ToBuyController.$inject = ['ShoppingService'];
  function ToBuyController(ShoppingService) {
    var toBuy = this;

    toBuy.shoppingList = ShoppingService.getShoppingList();
    toBuy.itemBought = ShoppingService.itemBought;
    toBuy.everythingBought = ShoppingService.everythingBought;
  }

  BoughtController.$inject = ['ShoppingService'];
  function BoughtController(ShoppingService) {
    var bought = this;

    bought.boughtList = ShoppingService.getBoughtList();
    bought.anythingBought = ShoppingService.anythingBought;
  }

  function ShoppingService() {
    var shop = this;

    // Initial shopping list
    var shoppingList = [
      {
        name: "Pistachios",
        qty: "1 bag" 
      },
      {
        name: "Chicken-flavored rice",
        qty: "20 bags"
      },
      {
        name: "Spicy chicken patties",
        qty: "20 bags"
      },
      {
        name: "Cinnamon toast crunch",
        qty: "5 bags"
      },
      {
        name: "Popsicles",
        qty: "2 bags"
      }
    ];

    var boughtList = [];

    shop.itemBought = function(index) {
      var item = shoppingList[index];
      shoppingList.splice(index, 1);
      boughtList.push(item);
    };

    shop.getShoppingList = function() {
      return shoppingList;
    };

    shop.getBoughtList = function() {
      return boughtList;
    };

    shop.anythingBought = function() {
      return boughtList.length == 0;
    };

    shop.everythingBought = function() {
      return shoppingList.length == 0;
    };
  }
})();
