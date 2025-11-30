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

// Toggling the visibility of the detailed analysis section
document.addEventListener("DOMContentLoaded", function() {
    // Find the analysis section and toggle button
    const analysisSection = document.querySelector('.analysis');
    const toggleButton = document.createElement('button');
    toggleButton.textContent = "Show/Hide Detailed Analysis";
    analysisSection.before(toggleButton);

    // Event listener for the toggle button
    toggleButton.addEventListener('click', function() {
        // Toggle the visibility of the analysis section
        analysisSection.classList.toggle('hidden');
        toggleButton.textContent = analysisSection.classList.contains('hidden') ? "Show Detailed Analysis" : "Hide Detailed Analysis";
    });
});