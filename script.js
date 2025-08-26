// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar background change on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe project cards and skill categories for animation
    document.querySelectorAll('.project-card, .skill-category').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'all 0.8s ease';
        observer.observe(element);
    });

    // Add loading states to contact methods
    document.querySelectorAll('.contact-method').forEach(method => {
        method.addEventListener('click', function(e) {
            // Add visual feedback for clicks
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // Dynamic typing effect for hero title (optional)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }

    // Add hover effects to metrics
    document.querySelectorAll('.metric').forEach(metric => {
        metric.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(1deg)';
        });
        
        metric.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Mobile menu functionality (basic)
    const navLogo = document.querySelector('.nav-logo');
    const navMenu = document.querySelector('.nav-menu');
    
    if (window.innerWidth <= 768) {
        navLogo.addEventListener('click', () => {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    // Update copyright year automatically
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector('.footer p');
    if (footerText) {
        footerText.innerHTML = footerText.innerHTML.replace('2025', currentYear);
    }

    // Form validation for contact (if you add a form later)
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Add performance monitoring
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`Portfolio loaded in ${Math.round(loadTime)}ms`);
    });

    // Track scroll progress (optional feature)
    window.addEventListener('scroll', () => {
        const scrollProgress = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        // You can use this to show a progress bar if desired
        document.documentElement.style.setProperty('--scroll-progress', `${scrollProgress}%`);
    });

});
