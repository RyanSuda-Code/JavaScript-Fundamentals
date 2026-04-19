let inventory = [];

function findProductIndex(name) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === name.toLowerCase()) {
      return i;
    }
  }
  return -1;
}

function addProduct(product) {
  let index = findProductIndex(product.name);
  if (index === -1) {
    inventory.push({ name: product.name.toLowerCase(), quantity: product.quantity });
    console.log(`${product.name.toLowerCase()} added to inventory`);
  } else {
    inventory[index].quantity += product.quantity;
    console.log(`${product.name.toLowerCase()} quantity updated`);
  }
}

function removeProduct(name, quantity) {
  let index = findProductIndex(name);
  let lowerName = name.toLowerCase();
  if (index === -1) {
    console.log(`${lowerName} not found`);
  } else {
    if (inventory[index].quantity < quantity) {
      console.log(`Not enough ${lowerName} available, remaining pieces: ${inventory[index].quantity}`);
    } else {
      inventory[index].quantity -= quantity;
      if (inventory[index].quantity === 0) {
        inventory.splice(index, 1);
      } else {
        console.log(`Remaining ${lowerName} pieces: ${inventory[index].quantity}`);
      }
    }
  }
}