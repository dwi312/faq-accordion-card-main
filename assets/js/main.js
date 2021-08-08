// const itemShow = document.querySelector('.list-item');

document.querySelectorAll('.list-item').forEach(item => {
    item.addEventListener('click', event => {
        item.classList.toggle('show')
    })
})