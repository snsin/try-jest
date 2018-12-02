const greet = (person, greeting) => `${greeting}, ${person}!`;

export default name => greet(name, 'Hello');

export const plusThree = (num = 0) => num + 3;
