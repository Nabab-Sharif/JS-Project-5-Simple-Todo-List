
let input = document.querySelector('.input')
let ul = document.querySelector('.ul');
let add = document.querySelector('.add')

add.addEventListener('click', function () {

  if (input.value === "") {
    alert('please enter the value');
  } else {

    let li = document.createElement('li');
    li.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i>`;
    ul.append(li);

    let trash = li.querySelector('i');
    trash.addEventListener("click", function () {
      li.remove();
    })

    input.value = '';
  }



})


input.addEventListener('keypress', function (e) {

  if (e.key === "Enter") {
    let li = document.createElement('li');
    li.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i>`;
    ul.append(li);
    let trash = li.querySelector('i');
    trash.addEventListener("click", function () {
      li.remove();
    })

    input.value = '';
  }


})




