
let input = document.querySelector('.input')
let ul = document.querySelector('.ul');
let addItem = document.querySelector('.addItem');



addItem.addEventListener('submit', function (e) {
  e.preventDefault();


  if (input.value) {
    let li = document.createElement('li');
    li.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i>`;
    ul.append(li);

    let trash = li.querySelector('i');
    trash.addEventListener("click", function () {
      li.remove();
    })

    input.value = '';
  } else {
    alert('Please enter the value')
  }



})






