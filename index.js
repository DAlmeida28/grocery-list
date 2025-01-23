// care an array called grocerylist
const groceryList = [
  { id: 1, name: "apple", price: 1.75, category: "fruit", quantity: 100 },
  { id: 2, name: "banana", price: 0.25, category: "fruit", quantity: 137 },
  { id: 3, name: "orange", price: 1.0, category: "fruit", quantity: 10 },
  { id: 4, name: "broccoli", price: 3.0, category: "vegetable", quantity: 67 },
  { id: 6, name: "milk", price: 5.75, category: "dairy", quantity: 90 },
  { id: 7, name: "cheddar", price: 4.0, category: "dairy", quantity: 63 },
  { id: 8, name: "sourdough", price: 5.5, category: "grains", quantity: 81 },
];


// logNames => Takes in an array of items and console.logs the name of each item in the given array.
// creating function to log items in a array. 
const logNames = (nameList) => {
 console.log(nameList.name);
}
groceryList.forEach(logNames);

// getUpperCaseNames => Takes in an array of items and returns an array of item names in all uppercase.
// create new array with map method to uppercase the items in the list. 
const upperCaseNames = groceryList.map((item) =>{
  return{
    name: item.name.toUpperCase()
  }
});
console.log(upperCaseNames);

// getItemById => Takes in an array of items and an id. Returns the item in the array with the given id. Hint: use .find
const getItemById = (list, id) => {
  foundItem = list.find((element) => element.id = id)
  return foundItem; 
}
console.log(getItemById(groceryList, 3));


// getItemPriceByName => Takes in an array of items and a name string. Returns the price of the item that matches the name that was passed in. Hint: use a loop
const getItemByName = (list, inputName) => {
  for (let i = 0; i < list.length; i++) {
    //checks if the index's name is equal to the input name
    if (list[i].name === inputName) {
      //if so, returns the price of the given index
      return list[i].price;
    }
  }
}
 console.log(getItemByName(groceryList, "orange"));

// getItemsByCategory => Takes in an array of items and a category string. Returns an array of items that belong to the given `category`. Hint: use .filter 
const getItemByCategory = (list, category) => {
  let emptyArray = [];
  emptyArray = list.filter((item) => item.category === category)
  return emptyArray;
}
console.log(getItemByCategory(groceryList, `fruit`));
// countItems => Takes in an array of items and returns the total quantity of all items. Hint: use .reduce

const countItems = (list) => {
let emptyArray = [];
for(i = 0; i < list.length; i ++){
emptyArray.push(list[i].quantity);
}
totalQuantity = emptyArray.reduce((accumalator, quantity) => {return accumalator + quantity;}, 0);
return totalQuantity;
}
console.log(countItems(groceryList));
// calculateTotalPrice => Takes in an array of items and returns the cost of all given items. Hint: use .reduce
const totalCalculatePrice = (list) => {
  let emptyArray = [];
  for(i = 0; i < list.length; i ++){
  emptyArray.push(list[i].price);
  }
  totalPrice = emptyArray.reduce((accumalator, price) => {return accumalator + price;}, 0);
  return totalPrice;
  }
  console.log(totalCalculatePrice(groceryList));