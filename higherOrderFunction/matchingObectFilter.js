function whatIsInAName(collection, source) {
  let sourceKeys = Object.keys(source); // Get the keys of the source object. Object.keys() returns an array of the keys in the source object, which will be used to compare against the objects in the collection.

  return collection.filter(obj => {// Filter the collection to find objects that match the source object
    return sourceKeys.every(key => obj[key] === source[key]);// Check if every key in the source object matches the corresponding key in the current object from the collection
  });
}