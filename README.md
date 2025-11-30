Project reorganization to industry-standard layout

What I created:

- `src/pages/home/index.html`  — wrapper that embeds `../.. /home_page/home.html` via iframe
- `src/pages/product/index.html` — wrapper that embeds `../../product_page/product.html`
- `src/pages/research/index.html` — wrapper that embeds `../../research_page/research.html`
- `src/pages/blog/index.html` — wrapper that embeds `../../blog_page/blog.html`
- `src/pages/about/index.html` — wrapper that embeds `../../about_page/about.html`
- `src/styles/` and `src/scripts/` directories created (placeholders for centralization)
- `src/assets/{images,videos}` directories created (placeholders)

Why iframe wrappers?
- Fast, non-destructive: keeps all original assets and pages working immediately.
- Gives you a clean `src/pages/*` structure to migrate into incrementally.

Next recommended steps:
1. Move each page's HTML/CSS/JS into `src/pages/<name>/index.html`, `src/styles/<name>.css`, and `src/scripts/<name>.js`.
2. Update asset paths (images/videos) to `src/assets/...` and physically copy assets into that folder.
3. Update navigation `navigateTo()` to use relative paths to `src/pages/<name>/index.html`.

Quick local preview:
- You can open `src/pages/home/index.html` in a browser to view the wrapped homepage, or simply open original pages in their current folders.

If you want, I can now:
- Move the full HTML/CSS/JS into `src/*` (non-destructive: I will copy files and update links), or
- Copy all image/video assets into `src/assets/` so pages can be fully served from the new `src/` tree.

Which of the two next steps would you like me to do now (or both)?
