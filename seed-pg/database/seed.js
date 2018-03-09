const Sequelize = require("sequelize");
const faker = require("faker");
const Promise = require("bluebird");
const sequelize = new Sequelize("menus", "postgres", "", {
  host: "postgresDB",
  //port: 5554,
  dialect: "postgres",
  //protocol:"postgres"
});

const RestaurantMenuItems = sequelize.define("RestaurantMenuItems", {
  restaurantId: Sequelize.INTEGER,
  menuName: Sequelize.TEXT,
  menuCategoryName: Sequelize.TEXT,
  menuItemName: Sequelize.TEXT,
  menuItemDescription: Sequelize.TEXT,
  menuItemPrice: Sequelize.DECIMAL
})

let menuNames = ['Breakfast', 'Lunch', 'Dinner'];

let menuCategoryNames = ['Appetizers', 'Mains', 'Sides', 'Beverages'];

let getRandomIntInclusive = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  //The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let getRandomPrice = function() {
  var int = getRandomIntInclusive(1, 25);
  int += .95;
  return int;
};

let capitalizeFirstLetter = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

sequelize
.sync({
  force: true
})
.then(function() {
  for (let i = 1; i <= 200; i++) {
    for (let j = 0; j < menuNames.length; j++) {
      for (let k = 0; k < menuCategoryNames.length; k++) {
        for (let l = 1; l <= getRandomIntInclusive(5,10); l++) {
          RestaurantMenuItems.create({
            restaurantId: i,
            menuName: menuNames[j],
            menuCategoryName: menuCategoryNames[k],
            menuItemName: capitalizeFirstLetter(faker.lorem.words()),
            menuItemDescription: faker.lorem.sentence().toLowerCase(),
            menuItemPrice: getRandomPrice()
          })
        }
      }
    }
  }
})
