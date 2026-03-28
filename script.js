document.addEventListener('DOMContentLoaded', () => {
    // Reveal Observer
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, revealOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => revealObserver.observe(el));

    // Stagger delays for multiple reveals in one container
    document.querySelectorAll('.grid-3, .tier-list, .roadmap-grid, .philosophy-grid, .team-grid').forEach(grid => {
        const items = grid.querySelectorAll('.reveal');
        items.forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.15}s`;
        });
    });

    // Subtitle reveal effect 
    document.querySelectorAll('.section-subtitle').forEach(subtitle => {
        subtitle.classList.add('reveal');
        revealObserver.observe(subtitle);
    });

    // Theme Switcher for Nav
    const themeOptions = {
        threshold: 0.1,
        rootMargin: "-20% 0px -70% 0px"
    };

    const themeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.body.classList.add('theme-dark-nav');
            } else {
                document.body.classList.remove('theme-dark-nav');
            }
        });
    }, themeOptions);

    const darkSections = document.querySelectorAll('.section-dark');
    darkSections.forEach(section => themeObserver.observe(section));
});
