let burger = document.querySelector('.burger');
let bars1 = document.querySelector('.bars1');
let bars2 = document.querySelector('.bars2');
let bars3 = document.querySelector('.bars3');

let sidenav = document.querySelector('.sidenav');





burger.addEventListener('click', function(){
	sidenav.classList.toggle('active');
	bars1.classList.toggle('active');
	bars2.classList.toggle('active');
	bars3.classList.toggle('active');
})