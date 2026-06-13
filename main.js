var pizza = {
    crustType: "deep dish",
    sauceType: "traditional",
    cheeses: ["mozzarella", "feta"],
    toppings: ["pepperoni", "sausage"]
};
console.log(pizza);

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza ={};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var pizza3 = pizzaOven("stuffed crust", "alfredo", ["parmesan"], ["spinach", "garlic", "mushrooms"]);
console.log(pizza3);

var pizza4 = pizzaOven("thin crust", "alfredo",["cheddar", "mozzarella"],["chicken", "red onions"])
console.log(pizza4);

function randomPizza() {
    var crusts = ["deep dish", "hand tossed", "thin crust"];
    var sauces = ["traditional", "marinara", "alfredo"];
    var cheeses = [["mozzarella"], ["mozzarella", "feta"], ["parmesan"]];
    var toppings = [["pepperoni"], ["mushrooms"], ["chicken"]];

    var randomCrust = crusts[Math.floor(Math.random() * crusts.length)];
    var randomSauce = sauces[Math.floor(Math.random() * sauces.length)];
    var randomCheese = cheeses[Math.floor(Math.random() * cheeses.length)];
    var randomToppings = toppings[Math.floor(Math.random() * toppings.length)];

    return pizzaOven(randomCrust, randomSauce, randomCheese, randomToppings);
}

console.log(randomPizza());