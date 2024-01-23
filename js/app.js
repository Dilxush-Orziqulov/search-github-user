let dark = document.querySelector('.dark');
let light = document.querySelector('.light');
let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    if (dark.classList.contains('dark')) {
        dark.classList.remove('dark');
        dark.classList.add('light');
        btn.textContent = 'Dark';
    } else {
        dark.classList.remove('light');
        dark.classList.add('dark');
        btn.textContent = 'Light';
    }
})
