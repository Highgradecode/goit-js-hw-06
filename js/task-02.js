const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arrayOfListElements = ingredients.map(ingredient => {
  const listItemEl = document.createElement('li');
  listItemEl.classList.add('item');
  listItemEl.textContent = ingredient;
  return listItemEl;
});

document.querySelector('#ingredients').append(...arrayOfListElements);