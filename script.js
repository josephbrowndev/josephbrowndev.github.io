// Updated script.js with proper mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {

    // Video Modal and Enhanced Project Interactions
        initializeProjectInteractions();
    });
    
    function initializeProjectInteractions() {
        const projectItems = document.querySelectorAll('.project-grid-item[data-project-url]');
        const videoModal = document.getElementById('videoModal');
        const modalVideo = document.getElementById('modalVideo');
        const closeVideoModal = document.getElementById('closeVideoModal');
        const videoPlayBtns = document.querySelectorAll('.video-play-btn');
        
        // Only initialize if we have the required elements (projects page)
        if (!videoModal || !modalVideo || !closeVideoModal) {
            return;
        }
        
        console.log('Initializing project interactions...');
        
        // Make project cards clickable (excluding coming-soon)
        projectItems.forEach(item => {
            if (!item.classList.contains('coming-soon')) {
                item.style.cursor = 'pointer';
                item.setAttribute('tabindex', '0'); // Make keyboard accessible
                
                // Click handler for project navigation
                item.addEventListener('click', function(e) {
                    // Don't navigate if clicking on action buttons or video play button
                    if (e.target.closest('.project-actions') || e.target.closest('.video-play-btn')) {
                        return;
                    }
                    
                    const projectUrl = this.dataset.projectUrl;
                    if (projectUrl) {
                        console.log('Navigating to:', projectUrl);
                        window.location.href = projectUrl;
                    }
                });
                
                // Keyboard handler for accessibility
                item.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        if (!e.target.closest('.project-actions') && !e.target.closest('.video-play-btn')) {
                            const projectUrl = this.dataset.projectUrl;
                            if (projectUrl) {
                                window.location.href = projectUrl;
                            }
                        }
                    }
                });
                
                // Enhanced hover effects
                item.addEventListener('mouseenter', function() {
                    if (!this.querySelector('.thumbnail-overlay').matches(':hover')) {
                        this.style.transform = 'translateY(-5px)';
                        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                    }
                });
                
                item.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(-2px)';
                    setTimeout(() => {
                        if (!this.matches(':hover')) {
                            this.style.transform = '';
                        }
                    }, 200);
                });
            }
        });
        
        // Video popup functionality
        videoPlayBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                
                const videoId = this.dataset.videoId;
                const videoTitle = this.dataset.videoTitle || 'Project Demo Video';
                
                console.log('Opening video modal for:', videoId);
                
                if (videoId) {
                    openVideoModal(videoId, videoTitle);
                }
            });
        
        // Keyboard accessibility for video buttons
        btn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.stopPropagation();
                e.preventDefault();
                
                const videoId = this.dataset.videoId;
                const videoTitle = this.dataset.videoTitle || 'Project Demo Video';
                
                if (videoId)

    
    // Mobile menu functionality - FIXED VERSION
    const hamburger = document.querySelector('.hamburger');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;

    // Use either hamburger or mobile-menu-btn class
    const menuToggle = hamburger || mobileMenuBtn;

    if (menuToggle && mobileMenu) {
        console.log('Mobile menu elements found');
        
        // Toggle mobile menu
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Mobile menu clicked!');
            
            const isActive = mobileMenu.classList.contains('active');
            
            if (isActive) {
                // Close menu
                mobileMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                body.classList.remove('mobile-menu-open');
                body.style.overflow = '';
                body.style.position = '';
                body.style.width = '';
                console.log('Menu closed');
            } else {
                // Open menu
                mobileMenu.classList.add('active');
                menuToggle.classList.add('active');
                body.classList.add('mobile-menu-open');
                body.style.overflow = 'hidden';
                body.style.position = 'fixed';
                body.style.width = '100%';
                console.log('Menu opened');
            }
        });

        // Close menu when clicking on a link
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                body.classList.remove('mobile-menu-open');
                body.style.overflow = '';
                body.style.position = '';
                body.style.width = '';
                console.log('Menu closed via link click');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = menuToggle.contains(event.target) || mobileMenu.contains(event.target);
            
            if (!isClickInsideNav && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                body.classList.remove('mobile-menu-open');
                body.style.overflow = '';
                body.style.position = '';
                body.style.width = '';
                console.log('Menu closed via outside click');
            }
        });

        // Close menu when window is resized to desktop size
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                body.classList.remove('mobile-menu-open');
                body.style.overflow = '';
                body.style.position = '';
                body.style.width = '';
                console.log('Menu closed due to resize');
            }
        });
    } else {
        console.log('Mobile menu elements not found');
    }
    
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
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(10, 10, 10, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
            } else {
                navbar.style.background = 'rgba(10, 10, 10, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        });
    }

    // Tab functionality for project details
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('Tab clicked:', btn.dataset.tab);
            
            const tabId = btn.dataset.tab;
            
            // Remove active class from all buttons and content
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            btn.classList.add('active');
            const content = document.getElementById(tabId);
            if (content) {
                content.classList.add('active');
                console.log('Tab content activated:', tabId);
            } else {
                console.log('Tab content not found for:', tabId);
            }
        });
    });

    // Technical tabs functionality (for project detail pages)
    document.querySelectorAll('.tech-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('Tech tab clicked:', btn.dataset.tab);
            
            const tabId = btn.dataset.tab;
            
            // Remove active classes
            document.querySelectorAll('.tech-tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tech-tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active classes
            btn.classList.add('active');
            const content = document.getElementById(tabId);
            if (content) {
                content.classList.add('active');
                console.log('Tech tab content activated:', tabId);
            }
        });
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

    // Highlight active page - simplified approach
const currentPath = window.location.pathname;

document.querySelectorAll(".nav-link, .mobile-nav-link").forEach(link => {
    link.classList.remove("active");
    
    const linkHref = link.getAttribute("href");
    
    // Check if we're on the exact page this link points to
    if (currentPath.endsWith(linkHref) || 
        (currentPath === "/" && linkHref === "index.html") ||
        (currentPath.endsWith("/index.html") && linkHref === "index.html") ||
        (currentPath.includes("/projects/") && currentPath.endsWith("index.html") && linkHref === "index.html")) {
        link.classList.add("active");
    }
});

    // Enhanced hover video functionality for projects
    const projectItems = document.querySelectorAll('.project-grid-item');
    
    projectItems.forEach(item => {
        const videoContainer = item.querySelector('.project-video-container');
        const thumbnailImage = item.querySelector('.project-thumbnail-image');
        const videoWrapper = item.querySelector('.project-video-wrapper');
        const overlay = item.querySelector('.thumbnail-overlay');
        
        if (videoContainer && videoWrapper) {
            let hoverTimer;
            
            // Only enable video hover on desktop
            if (window.innerWidth > 768) {
                videoContainer.addEventListener('mouseenter', function() {
                    clearTimeout(hoverTimer);
                    
                    hoverTimer = setTimeout(() => {
                        if (thumbnailImage) thumbnailImage.style.opacity = '0';
                        videoWrapper.style.opacity = '1';
                        videoWrapper.style.transform = 'scale(1.05)';
                        if (overlay) overlay.style.opacity = '1';
                    }, 100);
                });
                
                videoContainer.addEventListener('mouseleave', function() {
                    clearTimeout(hoverTimer);
                    
                    if (thumbnailImage) thumbnailImage.style.opacity = '1';
                    videoWrapper.style.opacity = '0';
                    videoWrapper.style.transform = 'scale(1)';
                    if (overlay) overlay.style.opacity = '0';
                });
            }
        }
    });

    // Disable video hover on mobile resize
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            document.querySelectorAll('.project-video-wrapper').forEach(wrapper => {
                wrapper.style.display = 'none';
            });
            document.querySelectorAll('.project-thumbnail-image').forEach(img => {
                img.style.opacity = '1';
            });
        } else {
            document.querySelectorAll('.project-video-wrapper').forEach(wrapper => {
                wrapper.style.display = 'block';
            });
        }
    });

    console.log('JavaScript initialized successfully');
});
