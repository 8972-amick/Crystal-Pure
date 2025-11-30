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
        header.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
    } else {
        header.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    }
});

// Smooth scroll animations for cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.mission-card, .why-choose-card, .team-member, .contact-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    });

    cards.forEach(card => {
        observer.observe(card);
    });
});
