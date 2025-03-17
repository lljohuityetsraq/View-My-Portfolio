document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const header = document.querySelector('header');
    const hamburger = document.querySelector('.hamburger');
    const nav = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');
    const scrollTopBtn = document.getElementById('scroll-top');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const skillItems = document.querySelectorAll('.animate-progress');
    const contactForm = document.getElementById('contact-form');

    // Functions
    // Header scroll effect
    function scrollHeader() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // Scroll to top button
    function scrollTop() {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    }

    // Active nav link on scroll
    function activeNavLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // Project filter
    function filterProjects(e) {
        const filter = e.target.getAttribute('data-filter');
        
        // Update active button
        filterBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');
        
        // Filter projects
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 200);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 500);
            }
        });
    }

    // Animate skills on scroll
    function animateSkills() {
        skillItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (itemPosition < screenPosition) {
                item.classList.add('active');
            }
        });
    }

    // Event Listeners
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    // Scroll events
    window.addEventListener('scroll', () => {
        scrollHeader();
        scrollTop();
        activeNavLink();
        animateSkills();
    });

    // Scroll to top button click
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Project filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', filterProjects);
    });

    // Form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would normally send the form data to a server
            // For demonstration, we'll just show an alert
            alert(`Thank you ${name} for your message! I'll get back to you soon.`);
            
            // Reset form
            contactForm.reset();
        });
    }

    // Initialize
    scrollHeader();
    scrollTop();
    activeNavLink();
    
    // Add animation classes to elements when page loads
    setTimeout(() => {
        document.querySelectorAll('.animate-fade-in').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
        
        document.querySelectorAll('.animate-slide-in').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateX(0)';
        });
    }, 300);
});
