const numberOfCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${numberOfCategories.length}`);


const itemElTitle = numberOfCategories.forEach(element => {
    const titleEl = element.firstElementChild.textContent;
    const categoryNumber = element.querySelectorAll('li').length;
    console.log(`Category: ${titleEl}`);
    console.log(`Elements: ${categoryNumber}`);
});
