const list = document.querySelectorAll('.list');
function activeLink () {
  list.forEach((element) =>
    element.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) => 
item.addEventListener('click', activeLink));