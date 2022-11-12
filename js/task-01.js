const categoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach(item => {
    const categoryTitle = item.querySelector('h2');
    console.log(`Category: ${categoryTitle.textContent}`);;
    
    const categoryListOfItems = item.querySelector('ul');

    const categoryItemAmount = categoryListOfItems.children;
    console.log(`Elements: ${categoryItemAmount.length}`);
})

