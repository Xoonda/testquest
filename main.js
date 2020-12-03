const overflow = () => {
    document.querySelector('.menu-list').classList.toggle('active');
    document.body.classList.toggle('block');
} 
document.querySelector('.header-burger').addEventListener('click', () => {
    overflow();
})
