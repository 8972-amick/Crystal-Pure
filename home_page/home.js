

// Navigation Function
function navigateTo(page) {
    const routes = {
        'home': '../home_page/home.html',
        'product': '../product_page/product.html',
        'research': '../research_page/research.html',
        'blog': '../blog_page/blog.html',  // You'll need to create this
        'about': '../about_page/about.html'  // You'll need to create this
    };
    
    if (routes[page]) {
        window.location.href = routes[page];
    } else {
        console.error("Page not found: " + page);
    }
}

// Bg color chager of navigationlet header = document.querySelector("header"); // Select the header

window.addEventListener("scroll", () => {
    let scrollY = window.scrollY; // Get current scroll position
  if (scrollY > 0) {
    // If scrolled down, add background color
    header.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  } else {
    // If at the top, make background transparent
    header.style.backgroundColor = "transparent";
  }
});




// Up down animation of navigation

let lastScrollY = window.scrollY; // Track last scroll position
let header1 = document.querySelector("header"); // Select the header

window.addEventListener("scroll", () => {
  let currentScrollY1 = window.scrollY; // Get current scroll position

  if (currentScrollY1 > lastScrollY) {
    // If scrolling down, hide the header
    header1.style.transform = "translateY(-100%)";
  } else {
    // If scrolling up, show the header
    header1.style.transform = "translateY(0)";
  }

  lastScrollY = currentScrollY1; // Update last scroll position
});



// Sign up pop up Open

let account_icon = document.querySelector('#nav_right i'); 
let signUpPopUp = document.querySelector('.sign_up_pop_up');

account_icon.addEventListener("click", function () {
    if (signUpPopUp) {
        signUpPopUp.style.display = "flex";
    } else {
        console.error("Sign-up pop-up element not found.");
    }
});


// Sign up pop up close

let close_icon = document.querySelector('.sign_up_right i'); 
let signUpPopUp1 = document.querySelector('.sign_up_pop_up');

close_icon.addEventListener("click", function () {
    if (signUpPopUp1) {
        signUpPopUp1.style.display = "none";
    } else {
        console.error("Sign-up pop-up element not found.");
    }
});


