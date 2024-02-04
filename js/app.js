let container = document.querySelector('.container');
let btn = document.querySelector('.btn');
let btn_icon = document.querySelector('.material-symbols-outlined');
let search_btn = document.querySelector('.search-btn');
let name_github = document.querySelector('.name-github');
let login_github = document.querySelector('.login-github');
let repos = document.querySelector('.repos');
let avatar_github = document.querySelector('.avatar-github');
let create_github = document.querySelector('.create-github');
let followers = document.querySelector('.followers');
let following = document.querySelector('.following');
let location_github = document.querySelector('.location');
let blog_twit = document.querySelector('.blog');
let company_github = document.querySelector('.company');
let github_blog = document.querySelector('.github-blog');
let test = document.querySelector('.test');
let search = document.querySelector('#search');

container.classList.add(localStorage.getItem('theme'));

btn.addEventListener('click', () => {
    if (container.classList.contains('dark')) {
        btn.textContent = 'Light';
        container.classList.remove('dark');
        localStorage.removeItem('theme');
    } else {
        container.classList.add('dark');
        btn.textContent = 'Dark';
        localStorage.setItem('theme', 'dark');
    }
});




search_btn.addEventListener('click', () => {
    let BASE_URL = `https://api.github.com/users/${search.value}`;
    fetch(BASE_URL)
        .then(res => res.json())
        .then((data) => {
            name_github.textContent = data.name
            login_github.textContent = data.login
            repos.textContent = data.public_repos
            avatar_github.setAttribute('src', data.avatar_url)
            create_github.textContent = data.created_at
            followers.textContent = data.followers
            following.textContent = data.following
            location_github.textContent = data.location
            company_github.textContent = data.company
            blog_twit.textContent = data.twitter_username
            github_blog.textContent = data.blog
            console.log(data);
        });
});
