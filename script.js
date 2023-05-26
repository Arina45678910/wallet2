let btn = document.querySelector('.addition__btn');
let input1 = document.querySelector('.addition__name1');
let name = document.querySelector('tbody .purcashes__name');
let price = document.querySelector('tbody .purcashes__price');
let input2 = document.querySelector('.addition__name2');
let category = document.querySelector('tbody .purcashes__category');
let select = document.querySelector('.select');

let tbody = document.querySelector('tbody');
let close = document.querySelector('close');


btn.addEventListener('click', () => {
    tbody.insertAdjacentHTML('beforeEnd',

        `<tr class="purcashes__row">
            <td class="purcashes__name">${input1.value}</td>
            <td class="purcashes__category">${input2.value}</td>
            <td class="purcashes__price">${select.value}</td>
            <td class="purcashes__del">
                <img src="img/close.png" class="close">
            </td>
    </tr>` )
    input1.value = ' ';
    input2.value = ' ';
})

tbody.addEventListener('click', (evt) => {
   let target = evt.target;
   
   target.closest('tr').remove();
   
   }
)



