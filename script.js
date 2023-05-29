let purcasheArray = [];
let btn = form.addBtn;
let tbody = document.querySelector('#tbody');
let categories = document.querySelectorAll('.legend__category');
let prices = document.querySelectorAll('.legend__price');

btn.addEventListener('click', (evt) => {
    let purcashe = {};
    evt.preventDefault();

    purcashe.name = form.name.value;
    purcashe.price = form.price.value;


    purcashe.category = form.selectCategory.options[form.selectCategory.selectedIndex].innerText;
    for (category of categories) {

        if (purcashe.category == category.innerText) {
            category.nextElementSibling.textContent = Number(category.nextElementSibling.innerText) + Number(purcashe.price);
        }
    }

    purcasheArray.push(purcashe);
    console.log(purcasheArray);

    tbody.insertAdjacentHTML('beforeEnd',
        `        
            <tr class="purcashes__item purcashes__row" data-category="product">
                <td class="purcashes__td">${purcashe.name}</td>
                <td class="purcashes__td category__td">${purcashe.category}</td>
                <td class="purcashes__td price__td">${purcashe.price}</td>
                <td class="purcashes__td"><i class="purcashes__item-del fa-solid fa-xmark"></i></td>
            </tr>
        `
    )
    form.reset();

    diagram(prices);
});

tbody.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('purcashes__item-del')) {
        evt.target.closest('tr').remove();

        for (category of categories) {
            if (evt.target.closest('tr').children[1].innerText == category.innerText) {

                category.nextElementSibling.textContent = Number(category.nextElementSibling.innerText) - Number(evt.target.closest('tr').children[2].innerText);
            }
        }
    }


    diagram(prices);
})





function diagram(prices) {

    let priceArray = [];
    for (let price of prices) {
        priceArray.push(+price.innerText);
    }

    let units = document.querySelectorAll('.unit');

    console.log(units[1].getAttribute('stroke-dasharray'));


    console.log(units[1].getAttribute('stroke-dasharray'));

    let spending = {
        product: priceArray[0],
        fastFood: priceArray[1],
        sport: priceArray[2],
        drink: priceArray[3],
    }

    let sum = 0;

    for (key in spending) {
        console.log(spending[key]);
        sum = sum + spending[key];
    }

    console.log('Сумма ', sum);

    let percentArr = [];

    for (let key in spending) {
        percentArr.push(spending[key] / sum * 100);
    }

    console.log(percentArr);

    let percentAccumulator = 0;

    for (let i = 0; i < units.length; i++) {
        units[i].setAttribute('stroke-dasharray', `${percentArr[i]} 100`);
        if (percentArr[i - 1]) {
            percentAccumulator += percentArr[i - 1];
        }
        console.log('накопитель ', percentAccumulator);
        units[i].setAttribute('stroke-dashoffset', -percentAccumulator);
    }
}
