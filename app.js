function showsidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex'
}
const toggle_menu = document.getElementById('toggle-menu');
toggle_menu.onclick = showsidebar;

function hidesidebar(){
    const close_sidebar = document.querySelector('.sidebar');
    close_sidebar.style.display = 'none'
}
const close_button = document.getElementById('close-button');
close_button.onclick = hidesidebar;
// const nav_links = document.getElementById('nav-links');

// toggle_menu.addEventListener('click',() =>{
//     nav_links.classList.toggle('show');
// });

// window.addEventListener('resize',() => {
//     if (window.innerWidth >786){
//         nav_links.classList.remove('show');
//     }
// });