const main_down = document.querySelector('.main-down');
const main_up = document.querySelector('.main-up');
const nav = document.querySelector('.segunda-parte');
const menu_links = document.querySelectorAll('.nav a[href^="#"]')

main_down.addEventListener('click', ()=>{
    nav.classList.toggle('active');
    main_down.classList.toggle('down');
    main_up.classList.toggle('up');
})

main_up.addEventListener('click', ()=>{
    nav.classList.toggle('active');
    main_down.classList.toggle('down');
    main_up.classList.toggle('up');
})

menu_links.forEach(menu_link => {
    menu_link.addEventListener('click', function(){
        nav.classList.remove('active');
        main_down.classList.remove('down');
        main_up.classList.remove('up');
    })
})