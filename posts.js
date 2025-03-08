// Toggle mobile menu
const menuBtn = document.querySelector('.menu-btn');
const navRight = document.querySelector('.nav-right');

menuBtn.addEventListener('click', () => {
    navRight.style.display = navRight.style.display === 'flex' ? 'none' : 'flex';
});

// Optional: Smooth scrolling (if adding more sections)
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});
