function destroyer(arr, ...rest) {//...rest is used to gather all the additional arguments passed to the function into an array called rest, which allows the function to accept an indeterminate number of arguments representing the values to remove from the initial array
  return arr.filter(item => !rest.includes(item));//filtering the first argument array to find items that are not included in the rest of the arguments and returning a new array that excludes all elements from the first argument that match any of the subsequent arguments
}

/**
 * Implement a Value Remover Function
In this lab, you will create a function that takes an initial array as its first argument, followed by one or more additional arguments representing the values to remove.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a destroyer function that accepts an array and one or more additional arguments.
The destroyer function should return a new array excluding all elements from the first argument that match any of the subsequent arguments.
The function must accept an indeterminate number of arguments.


destroyer([1, 2, 3, 1, 2, 3], 2, 3)

rest = [2, 3]

item = 1 → !rest.includes(1) → !false → true  ✅ keep
item = 2 → !rest.includes(2) → !true  → false ❌ remove
item = 3 → !rest.includes(3) → !true  → false ❌ remove
item = 1 → !rest.includes(1) → !false → true  ✅ keep
item = 2 → !rest.includes(2) → !true  → false ❌ remove
item = 3 → !rest.includes(3) → !true  → false ❌ remove

result = [1, 1] ✅
 */