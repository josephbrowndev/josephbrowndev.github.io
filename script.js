// ========================================
// JOSEPH BROWN PORTFOLIO - ENHANCED JAVASCRIPT
// ========================================
// Professional JavaScript implementation with conflict resolution
// for hover, video, navigation, and project detail interactions
// ========================================

 // ========================================
    // MODULAR NAVBAR AND FOOTER LOADING
    // ========================================

/**
 * Load navbar and footer dynamically from external HTML files
 */
function loadModularComponents() {
    // Determine if we're in a subfolder
    const isInSubfolder = window.location.pathname.includes('/projects/');
    
    // Load Navbar
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        const navbarPath = isInSubfolder ? 'navbar-subfolder.html' : 'navbar.html';
        fetch(navbarPath)
            .then(response => {
                if (!response.ok) throw new Error('Navbar not found');
                return response.text();
            })
            .then(data => {
                navbarPlaceholder.innerHTML = data;
                console.log('Navbar loaded successfully');
                // Re-initialize mobile menu after navbar loads
                initializeMobileMenuAfterLoad();
            })
            .catch(error => {
                console.warn('Navbar loading skipped:', error.message);
                // If navbar files don't exist yet, initialize existing navbar
                initializeMobileMenuAfterLoad();
            });
    } else {
        // No placeholder found, use existing navbar
        console.log('Using inline navbar');
    }
    
    // Load Footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        const footerPath = isInSubfolder ? '../footer.html' : 'footer.html';
        fetch(footerPath)
            .then(response => {
                if (!response.ok) throw new Error('Footer not found');
                return response.text();
            })
            .then(data => {
                footerPlaceholder.innerHTML = data;
                console.log('Footer loaded successfully');
            })
            .catch(error => {
                console.warn('Footer loading skipped:', error.message);
            });
    } else {
        console.log('Using inline footer');
    }
}

/**
 * Initialize mobile menu after navbar is dynamically loaded
 * This is separated so it can be called after fetch completes
 */
function initializeMobileMenuAfterLoad() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;

    // Use either hamburger or mobile-menu-btn class
    const menuToggle = hamburger || mobileMenuBtn;

    if (menuToggle && mobileMenu) {
        console.log('Mobile menu elements found and initializing');
        
        // Remove any existing event listeners by cloning
        const newMenuToggle = menuToggle.cloneNode(true);
        menuToggle.parentNode.replaceChild(newMenuToggle, menuToggle);
        
        // Toggle mobile menu
        newMenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Mobile menu clicked!');
            
            const isActive = mobileMenu.classList.contains('active');
            
            if (isActive) {
                // Close menu
                mobileMenu.classList.remove('active');
                newMenuToggle.classList.remove('active');
                body.classList.remove('mobile-menu-open');
                body.style.overflow = '';
                body.style.position = '';
                body.style.width = '';
                console.log('Menu closed');
            } else {
                // Open menu
                mobileMenu.classList.add('active');
                newMenuToggle.classList.add('active');
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
                newMenuToggle.classList.remove('active');
                body.classList.remove('mobile-menu-open');
                body.style.overflow = '';
                body.style.position = '';
                body.style.width = '';
                console.log('Menu closed via link click');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = newMenuToggle.contains(event.target) || mobileMenu.contains(event.target);
            
            if (!isClickInsideNav && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                newMenuToggle.classList.remove('active');
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
                newMenuToggle.classList.remove('active');
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
}

// Conflict resolution on hover, video, and nav bar selection fixed
document.addEventListener('DOMContentLoaded', function() {

    // ========================================
    // LOAD MODULAR NAVBAR AND FOOTER
    // ========================================
    
    loadModularComponents();  // ← ADD THIS LINE!
    
    // ========================================
    // MOBILE MENU FUNCTIONALITY
    // ========================================
   /** 
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
    **/
    // ========================================
    // SMOOTH SCROLLING FOR NAVIGATION LINKS
    // ========================================
    
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

    // ========================================
    // NAVBAR BACKGROUND CHANGE ON SCROLL
    // ========================================
    
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

    // ========================================
    // NAVIGATION ACTIVE STATE MANAGEMENT
    // ========================================
    
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

    // ========================================
    // TAB FUNCTIONALITY FOR PROJECT DETAILS
    // ========================================
    
    // Standard tab functionality
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

    // ========================================
    // PROJECT DETAIL PAGE FUNCTIONALITY
    // ========================================
    
    // Gallery thumbnail interactions for project detail pages
    document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            const mainImage = document.querySelector('.gallery-item.main img');
            const thumbImage = thumb.querySelector('img');
            if (mainImage && thumbImage) {
                const tempSrc = mainImage.src;
                const tempAlt = mainImage.alt;
                mainImage.src = thumbImage.src;
                mainImage.alt = thumbImage.alt;
                thumbImage.src = tempSrc;
                thumbImage.alt = tempAlt;
            }
        });
        
        // Keyboard accessibility for thumbnails
        thumb.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                thumb.click();
            }
        });
    });

    // ========================================
    // ENEMY ARCHETYPE CARD INTERACTIONS
    // ========================================
    
    // Add hover effects to archetype cards
    document.querySelectorAll('.archetype-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // ========================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ========================================
    
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

    // Observe project cards, skill categories, and archetype cards for animation
    document.querySelectorAll('.project-card, .skill-category, .archetype-card, .aspect-card, .insight-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'all 0.8s ease';
        observer.observe(element);
    });

    // ========================================
    // INITIALIZE MAIN FUNCTIONALITY
    // ========================================
    
    // Initialize video hovers and project interactions
    initializeVideoHovers();
    initializeProjectInteractions();

    console.log('JavaScript initialized successfully');
});

// ========================================
// VIDEO MODAL AND PROJECT INTERACTIONS
// ========================================

/**
 * Initialize enhanced project interactions including video modals
 * and clickable project cards with proper event handling
 */
function initializeProjectInteractions() {
    const projectItems = document.querySelectorAll('.project-grid-item[data-project-url]');
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const closeVideoModal = document.getElementById('closeVideoModal');
    const videoPlayBtns = document.querySelectorAll('.video-play-btn');
    
    // Only initialize if we have the required elements (projects page)
    if (!videoModal || !modalVideo || !closeVideoModal) {
        console.log('Video modal elements not found - skipping project interactions');
        return;
    }
    
    console.log('Initializing project interactions...');
    
    // ========================================
    // CLICKABLE PROJECT CARDS
    // ========================================
    
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
    
    // ========================================
    // VIDEO POPUP FUNCTIONALITY
    // ========================================
    
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
                
                if (videoId) {
                    openVideoModal(videoId, videoTitle);
                }
            }
        });
    });
    
    // ========================================
    // VIDEO MODAL FUNCTIONS
    // ========================================
    
    /**
     * Open video modal with proper loading states and theming
     * @param {string} videoId - YouTube video ID
     * @param {string} videoTitle - Video title for accessibility
     */
    function openVideoModal(videoId, videoTitle) {
        // Show loading state
        videoModal.classList.add('loading');

        // Check if it's Limitless Runner video
        if (videoId === 'YsxuayGGE3Q') {
            videoModal.classList.add('limitless-video');
        } else {
            videoModal.classList.remove('limitless-video');
        }
        
        // Set video source with autoplay and other parameters
        const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0`;
        modalVideo.src = embedUrl;
        modalVideo.title = videoTitle;
        
        // Show modal
        videoModal.style.display = 'flex';
        document.body.classList.add('modal-open');
        
        // Remove loading state after a short delay
        setTimeout(() => {
            videoModal.classList.remove('loading');
        }, 500);
        
        // Fade in animation
        setTimeout(() => {
            videoModal.classList.add('active');
        }, 10);
        
        console.log('Video modal opened:', videoTitle);
    }
    
    /**
     * Close video modal with proper cleanup
     */
    function closeVideoModalFunc() {
        console.log('Closing video modal...');
        
        videoModal.classList.add('closing');
        videoModal.classList.remove('active');
        
        setTimeout(() => {
            videoModal.style.display = 'none';
            videoModal.classList.remove('closing', 'loading', 'limitless-video');
            modalVideo.src = '';
            document.body.classList.remove('modal-open');
        }, 300);
    }
    
    // ========================================
    // VIDEO MODAL EVENT LISTENERS
    // ========================================
    
    // Close video modal event listeners
    closeVideoModal.addEventListener('click', function(e) {
        e.preventDefault();
        closeVideoModalFunc();
    });
    
    // Close on overlay click
    videoModal.querySelector('.video-modal-overlay').addEventListener('click', function() {
        closeVideoModalFunc();
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            closeVideoModalFunc();
        }
    });
    
    // Prevent modal close when clicking on video content
    videoModal.querySelector('.video-modal-content').addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // Focus management for accessibility
    videoModal.addEventListener('transitionend', function() {
        if (videoModal.classList.contains('active')) {
            // Focus the close button when modal opens
            closeVideoModal.focus();
        }
    });
    
    // Trap focus within modal when open
    videoModal.addEventListener('keydown', function(e) {
        if (e.key === 'Tab' && videoModal.classList.contains('active')) {
            // Simple focus trap - keep focus on close button
            e.preventDefault();
            closeVideoModal.focus();
        }
    });
    
    console.log('Project interactions initialized successfully');
}

// ========================================
// ENHANCED HOVER VIDEO FUNCTIONALITY
// ========================================

/**
 * Initialize video hover functionality for project cards
 * Only enables on desktop to avoid mobile performance issues
 */
function initializeVideoHovers() {
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
}

// ========================================
// WINDOW RESIZE HANDLER
// ========================================

/**
 * Handle window resize events for responsive behavior
 */
window.addEventListener('resize', function() {
    // Close mobile menu on resize
    if (window.innerWidth > 768) {
        const mobileMenu = document.querySelector('.mobile-menu');
        const menuToggle = document.querySelector('.hamburger') || document.querySelector('.mobile-menu-btn');
        const body = document.body;
        
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            if (menuToggle) menuToggle.classList.remove('active');
            body.classList.remove('mobile-menu-open');
            body.style.overflow = '';
            body.style.position = '';
            body.style.width = '';
            console.log('Menu closed due to resize');
        }
    }
    
    // Close video modal on resize to prevent layout issues
    const videoModal = document.getElementById('videoModal');
    if (videoModal && videoModal.classList.contains('active')) {
        const closeBtn = document.getElementById('closeVideoModal');
        if (closeBtn) {
            closeBtn.click();
        }
    }
    
    // Handle video hover on resize
    if (window.innerWidth <= 768) {
        document.querySelectorAll('.project-video-wrapper').forEach(wrapper => {
            if (wrapper) wrapper.style.display = 'none';
        });
        document.querySelectorAll('.project-thumbnail-image').forEach(img => {
            if (img) img.style.opacity = '1';
        });
    } else {
        document.querySelectorAll('.project-video-wrapper').forEach(wrapper => {
            if (wrapper) wrapper.style.display = 'block';
        });
        
        // Re-initialize video hovers for desktop
        initializeVideoHovers();
    }
});

// ========================================
// ERROR HANDLING AND PERFORMANCE
// ========================================

/**
 * Error handling for video loading
 */
window.addEventListener('error', function(e) {
    if (e.target && e.target.tagName === 'IFRAME') {
        console.warn('Video failed to load:', e.target.src);
        
        const videoModal = document.getElementById('videoModal');
        if (videoModal) {
            videoModal.classList.remove('loading');
        }
    }
});

/**
 * Performance optimization: Throttle resize events
 * @param {Function} func - Function to throttle
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Throttled function
 */
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to additional resize logic if needed
const throttledResize = throttle(function() {
    console.log('Window resized - checking mobile/desktop state');
}, 250);

window.addEventListener('resize', throttledResize);

// ========================================
// PROJECT DETAIL PAGE SPECIFIC FUNCTIONS
// ========================================

/**
 * Initialize Blood and Sand project page specific functionality
 * This runs when the DOM is loaded and adds enhanced interactions
 */
function initializeBloodSandProject() {
    console.log('Initializing Blood and Sand project functionality...');
    
    // Enhanced archetype card interactions
    document.querySelectorAll('.archetype-card').forEach(card => {
        // Add ripple effect on click
        card.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.width = '10px';
            ripple.style.height = '10px';
            ripple.style.background = 'rgba(220, 38, 38, 0.5)';
            ripple.style.borderRadius = '50%';
            ripple.style.transform = 'translate(-50%, -50%)';
            ripple.style.left = e.clientX - card.getBoundingClientRect().left + 'px';
            ripple.style.top = e.clientY - card.getBoundingClientRect().top + 'px';
            ripple.style.pointerEvents = 'none';
            ripple.style.animation = 'ripple 0.6s ease-out';
            
            card.style.position = 'relative';
            card.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Smooth reveal animations for insights
    const insightCards = document.querySelectorAll('.insight-card');
    insightCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
    
    console.log('Blood and Sand project functionality initialized');
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Utility function to add CSS animation keyframes dynamically
 */
function addRippleAnimation() {
    if (!document.querySelector('#ripple-animation')) {
        const style = document.createElement('style');
        style.id = 'ripple-animation';
        style.textContent = `
            @keyframes ripple {
                0% {
                    transform: translate(-50%, -50%) scale(0);
                    opacity: 1;
                }
                100% {
                    transform: translate(-50%, -50%) scale(20);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

/**
 * Initialize page-specific functionality based on current page
 */
function initializePageSpecificFunctionality() {
    const currentPath = window.location.pathname;
    
    if (currentPath.includes('blood-and-sand')) {
        initializeBloodSandProject();
        addRippleAnimation();
    }
    
    // Add other project-specific initializations here as needed
    // if (currentPath.includes('limitless-runner')) {
    //     initializeLimitlessRunnerProject();
    // }
}

// Initialize page-specific functionality when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initializePageSpecificFunctionality, 100);
});

// ========================================
// ACCESSIBILITY ENHANCEMENTS
// ========================================

/**
 * Enhanced keyboard navigation for project cards
 */
document.addEventListener('keydown', function(e) {
    // Handle arrow key navigation between project cards
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        const focusedElement = document.activeElement;
        if (focusedElement.classList.contains('project-grid-item')) {
            const projectCards = Array.from(document.querySelectorAll('.project-grid-item[tabindex="0"]'));
            const currentIndex = projectCards.indexOf(focusedElement);
            
            if (currentIndex !== -1) {
                let nextIndex;
                if (e.key === 'ArrowRight') {
                    nextIndex = (currentIndex + 1) % projectCards.length;
                } else {
                    nextIndex = (currentIndex - 1 + projectCards.length) % projectCards.length;
                }
                
                projectCards[nextIndex].focus();
                e.preventDefault();
            }
        }
    }
});

/**
 * Screen reader announcements for dynamic content
 */
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.style.position = 'absolute';
    announcement.style.left = '-10000px';
    announcement.style.width = '1px';
    announcement.style.height = '1px';
    announcement.style.overflow = 'hidden';
    
    document.body.appendChild(announcement);
    announcement.textContent = message;
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}
// ========================================
// LIMITLESS RUNNER TECHNICAL PAGE FUNCTIONALITY
// ========================================

/**
 * Initialize Limitless Runner specific functionality
 */
function initializeLimitlessRunnerTechnical() {
    console.log('Initializing Limitless Runner technical page functionality...');
    
    // Enhanced image placeholder interactions
    initializeImagePlaceholders();
    
    // UI thumbnail gallery functionality
    initializeUIGallery();
    
    // Step animation on scroll
    initializeStepAnimations();
    
    // Metric counting animation
    initializeMetricAnimations();
    
    // Enhanced tab switching with smooth transitions
    enhanceTabSwitching();
    
    console.log('Limitless Runner technical functionality initialized');
}

/**
 * Initialize image placeholder interactions with asset references
 */
function initializeImagePlaceholders() {
    const placeholders = document.querySelectorAll('.image-placeholder');
    
    placeholders.forEach(placeholder => {
        const noteElement = placeholder.querySelector('.placeholder-note');
        if (noteElement) {
            const assetName = noteElement.textContent;
            
            // Add click handler to show asset information
            placeholder.addEventListener('click', function() {
                showAssetInfo(assetName, placeholder);
            });
            
            // Add hover effect for interactive placeholders
            placeholder.style.cursor = 'pointer';
            placeholder.addEventListener('mouseenter', function() {
                noteElement.style.transform = 'scale(1.1)';
                noteElement.style.transition = 'transform 0.3s ease';
            });
            
            placeholder.addEventListener('mouseleave', function() {
                noteElement.style.transform = 'scale(1)';
            });
        }
    });
}

/**
 * Show asset information modal or tooltip
 */
function showAssetInfo(assetName, element) {
    const assetInfo = getAssetInfo(assetName);
    
    // Create tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'asset-tooltip';
    tooltip.innerHTML = `
        <h4>${assetInfo.title}</h4>
        <p>${assetInfo.description}</p>
        <span class="asset-path">${assetInfo.path}</span>
    `;
    
    // Position tooltip
    const rect = element.getBoundingClientRect();
    tooltip.style.position = 'fixed';
    tooltip.style.top = `${rect.top - 10}px`;
    tooltip.style.left = `${rect.right + 10}px`;
    tooltip.style.zIndex = '10000';
    
    document.body.appendChild(tooltip);
    
    // Remove tooltip after 3 seconds or on click
    setTimeout(() => {
        if (tooltip.parentNode) {
            tooltip.parentNode.removeChild(tooltip);
        }
    }, 3000);
    
    tooltip.addEventListener('click', () => {
        if (tooltip.parentNode) {
            tooltip.parentNode.removeChild(tooltip);
        }
    });
}

/**
 * Get asset information based on filename
 */
function getAssetInfo(assetName) {
    const assetDatabase = {
        'CleanCoding.png': {
            title: 'Clean Coding Architecture',
            description: 'Visual representation of the level generation system architecture and code organization',
            path: 'assets/images/limitless-runner/CleanCoding.png'
        },
        'animationlocomotion.png': {
            title: 'Animation Locomotion System',
            description: 'Blueprint showing the character movement and animation state machine',
            path: 'assets/images/limitless-runner/animationlocomotion.png'
        },
        'animationlocomotion2.png': {
            title: 'Advanced Animation System',
            description: 'Detailed view of the animation blueprint with state transitions',
            path: 'assets/images/limitless-runner/animationlocomotion2.png'
        },
        'animationmontage.png': {
            title: 'Animation Montage Code',
            description: 'Code implementation for animation montage system',
            path: 'assets/images/limitless-runner/animationmontage.png'
        },
        'UI1.png': {
            title: 'Main Menu Interface',
            description: 'Clean main menu design with navigation hierarchy',
            path: 'assets/images/limitless-runner/UI1.png'
        },
        'UI2.png': {
            title: 'HUD Design',
            description: 'In-game heads-up display with score and power-up indicators',
            path: 'assets/images/limitless-runner/UI2.png'
        },
        'UI3.png': {
            title: 'Settings Menu',
            description: 'Comprehensive settings interface with visual feedback',
            path: 'assets/images/limitless-runner/UI3.png'
        },
        'UI4.png': {
            title: 'Pause Interface',
            description: 'Non-intrusive pause menu overlay design',
            path: 'assets/images/limitless-runner/UI4.png'
        },
        'UICleanCoding.png': {
            title: 'UI Clean Coding',
            description: 'Code structure and organization for UI components',
            path: 'assets/images/limitless-runner/UICleanCoding.png'
        },
        'MouseTinkering.jpg': {
            title: 'Mouse Character Development',
            description: 'Character design and development process',
            path: 'assets/images/limitless-runner/MouseTinkering.jpg'
        }
    };
    
    return assetDatabase[assetName] || {
        title: 'Development Asset',
        description: 'Technical implementation asset from Limitless Runner development',
        path: `assets/images/limitless-runner/${assetName}`
    };
}

/**
 * Initialize UI gallery thumbnail switching
 */
function initializeUIGallery() {
    const mainImage = document.querySelector('.ui-main-image');
    const thumbnails = document.querySelectorAll('.ui-thumb');
    
    if (!mainImage || thumbnails.length === 0) return;
    
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            const thumbImg = thumb.querySelector('.ui-thumb-image');
            const newSrc = thumb.dataset.image;
            const newAlt = thumb.dataset.alt;
            
            if (thumbImg && newSrc) {
                // Update main image
                mainImage.src = newSrc;
                mainImage.alt = newAlt;
                
                // Add selection feedback
                thumbnails.forEach(t => t.classList.remove('selected'));
                thumb.classList.add('selected');
                
                // Animate transition
                mainImage.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    mainImage.style.transform = 'scale(1)';
                }, 150);
            }
        });
    });
    
    // Set first thumbnail as selected by default
    if (thumbnails.length > 0) {
        thumbnails[0].classList.add('selected');
    }
}

/**
 * Initialize step animations on scroll
 */
function initializeStepAnimations() {
    const steps = document.querySelectorAll('.step-item');
    
    const stepObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 200);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });
    
    steps.forEach(step => {
        step.style.opacity = '0';
        step.style.transform = 'translateX(-30px)';
        step.style.transition = 'all 0.6s ease';
        stepObserver.observe(step);
    });
}

/**
 * Initialize metric counting animations
 */
function initializeMetricAnimations() {
    const metrics = document.querySelectorAll('.metric-value');
    
    const metricObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateMetric(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    metrics.forEach(metric => {
        metricObserver.observe(metric);
    });
}

/**
 * Animate individual metric counting
 */
function animateMetric(element) {
    const finalValue = element.textContent;
    
    // Only animate numeric values
    if (finalValue.match(/^\d+$/)) {
        const numValue = parseInt(finalValue);
        const duration = 1000;
        const startTime = Date.now();
        
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(easeOut * numValue);
            
            element.textContent = currentValue;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                element.textContent = finalValue; // Ensure final value is exact
            }
        };
        
        animate();
    }
}

/**
 * Enhance tab switching with smooth transitions
 */
function enhanceTabSwitching() {
    const tabButtons = document.querySelectorAll('.tech-tab-btn');
    const tabContents = document.querySelectorAll('.tech-tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;
            const targetContent = document.getElementById(targetTab);
            
            if (targetContent) {
                // Add loading state
                button.style.opacity = '0.7';
                
                // Fade out current content
                tabContents.forEach(content => {
                    if (content.classList.contains('active')) {
                        content.style.opacity = '0';
                        content.style.transform = 'translateY(20px)';
                    }
                });
                
                setTimeout(() => {
                    // Switch active states
                    tabContents.forEach(content => content.classList.remove('active'));
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    
                    targetContent.classList.add('active');
                    button.classList.add('active');
                    
                    // Fade in new content
                    targetContent.style.opacity = '1';
                    targetContent.style.transform = 'translateY(0)';
                    
                    // Remove loading state
                    button.style.opacity = '1';
                }, 200);
            }
        });
    });
    
    // Initialize transition styles
    tabContents.forEach(content => {
        content.style.transition = 'all 0.3s ease';
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the Limitless Runner technical page
    if (window.location.pathname.includes('limitless-runner') || 
        document.querySelector('.limitless-hero')) {
        setTimeout(initializeLimitlessRunnerTechnical, 100);
    }

   
});


// ========================================
// END OF ENHANCED JAVASCRIPT
// ========================================

console.log('Blood and Sand enhanced JavaScript loaded successfully');
