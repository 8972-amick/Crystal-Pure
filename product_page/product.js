// Navigation Function
function navigateTo(page) {
    const routes = {
        'home': '../home_page/home.html',
        'product': '../product_page/product.html',
        'research': '../research_page/research.html',
        'blog': '../blog_page/blog.html',
        'about': '../about_page/about.html'
    };
    
    if (routes[page]) {
        window.location.href = routes[page];
    } else {
        console.error("Page not found: " + page);
    }
}

// Bg color changer of navigation
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    if (scrollY > 0) {
        header.style.backgroundColor = "rgba(0, 0, 0, 0.98)";
    } else {
        header.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
    }
});

// Up down animation of navigation
let lastScrollY = window.scrollY;
let header1 = document.querySelector("header");

window.addEventListener("scroll", () => {
    let currentScrollY1 = window.scrollY;

    if (currentScrollY1 > lastScrollY) {
        header1.style.transform = "translateY(-100%)";
    } else {
        header1.style.transform = "translateY(0)";
    }

    lastScrollY = currentScrollY1;
});

// Heart icon toggle function
function changeColor(elem) {
    if (elem.classList.contains('fa-heart-o')) {
        elem.classList.remove('fa-heart-o');
        elem.classList.add('fa-heart');
        elem.style.color = '#FFD700';
    } else {
        elem.classList.remove('fa-heart');
        elem.classList.add('fa-heart-o');
        elem.style.color = '#D6B467';
    }
}

