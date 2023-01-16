const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const createListItemEl = items => {
  return items.map(item => {
    const listItemEl = document.createElement('li');
    listItemEl.classList.add('item');
    listItemEl.textContent = (item);

    return listItemEl;
  });
}

const elements = createListItemEl(ingredients);

console.log(elements);

listEl.append(...elements);