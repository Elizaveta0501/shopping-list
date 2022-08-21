/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */


const userInput = document.querySelector('#input');
const listElements = document.querySelector('#items');

userInput.addEventListener('keydown', function(event) {

    if (event.key == 'Enter') {
        addItem();
    }
});

function addItem() {
    const item = document.createElement('h2')
    item.textContent = `🙂 ${input.value}`;


    if (input.value != '') {
        listElements.appendChild(item);
    }


    item.addEventListener('click', function() {

        item.classList.toggle('done');
    });

    input.value = '';
}