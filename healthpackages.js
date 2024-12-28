const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown =>{
    const select=dropdown.querySelector('.select');
    const caret=dropdown.querySelector('.caret');
    const menu=dropdown.querySelector('.menu');
    const option=dropdown.querySelectorAll('.menuli');
    const selected=dropdown.querySelector('.selected');

    select.addEventListener('click',() =>{
        select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
menu.classList.toggle('menu-open');    
});
option.forEach(option =>{
    option.addEventListener('click',() =>{
        selected.innerText=option.innerText;
        select.classList.remove('select-clicked');
        caret.classList.remove('caret-rotate');
        menu.classList.remove('menu-open');
        option.forEach(option =>{
            option.classlist.remove('active');
        });
        option.classList.add('active');
    });

    });
});

