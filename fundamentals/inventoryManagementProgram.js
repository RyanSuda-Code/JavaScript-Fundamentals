let inventory = [];

function findProductIndex(name) {// helper function to find the index of a product in the inventory by name
  for (let i = 0; i < inventory.length; i++) {// loop through the inventory array
    if (inventory[i].name === name.toLowerCase()) {// compare the product name with the input name (case-insensitive)
      return i;
    }
  }
  return -1;
}

function addProduct(product) {// function to add a product to the inventory
  let index = findProductIndex(product.name);// find the index of the product in the inventory
  if (index === -1) {// if the product is not found, add it to the inventory
    inventory.push({ name: product.name.toLowerCase(), quantity: product.quantity });// add the product with a lowercase name and its quantity to the inventory
    console.log(`${product.name.toLowerCase()} added to inventory`);// log a message indicating that the product has been added
  } else {
    inventory[index].quantity += product.quantity;// if the product is found, update its quantity
    console.log(`${product.name.toLowerCase()} quantity updated`);// log a message indicating that the product quantity has been updated
  }
}

function removeProduct(name, quantity) {// function to remove a specified quantity of a product from the inventory
  let index = findProductIndex(name);// find the index of the product in the inventory
  let lowerName = name.toLowerCase();// convert the input name to lowercase for consistent logging
  if (index === -1) {// if the product is not found, log a message indicating that it is not found
    console.log(`${lowerName} not found`);
  } else {
    if (inventory[index].quantity < quantity) {// if the available quantity is less than the requested quantity, log a message indicating that there is not enough stock
      console.log(`Not enough ${lowerName} available, remaining pieces: ${inventory[index].quantity}`);// log the remaining quantity of the product
    } else {
      inventory[index].quantity -= quantity;// if there is enough stock, reduce the quantity by the requested amount
      if (inventory[index].quantity === 0) {// if the quantity becomes zero, remove the product from the inventory
        inventory.splice(index, 1);// remove the product from the inventory array
      } else {
        console.log(`Remaining ${lowerName} pieces: ${inventory[index].quantity}`);// log the remaining quantity of the product after removal
      }
    }
  }
}