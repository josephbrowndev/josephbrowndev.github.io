// Mobile Navigation JavaScript - ADD THIS TO YOUR script.js

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;

    if (mobileMenuBtn && mobileMenu) {
        // Toggle mobile menu
        mobileMenuBtn.addEventListener('click', function() {
            const isActive = mobileMenu.classList.contains('active');
            
            if (isActive) {
                // Close menu
                mobileMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                body.style.overflow = 'auto';
            } else {
                // Open menu
                mobileMenu.classList.add('active');
                mobileMenuBtn.classList.add('active');
                body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        });

        // Close menu when clicking on a link
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                body.style.overflow = 'auto';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = mobileMenuBtn.contains(event.target) || mobileMenu.contains(event.target);
            
            if (!isClickInsideNav && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                body.style.overflow = 'auto';
            }
        });

        // Close menu when window is resized to desktop size
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                mobileMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                body.style.overflow = 'auto';
            }
        });
    }

    // Existing JavaScript code for smooth scrolling, tabs, etc.
    // ... (keep all your existing script.js code)
    
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

    <!-- REPLACE YOUR CURRENT PROJECT CARDS WITH THESE -->

<!-- Blood and Sand Project -->
<div class="project-card featured">
    <div class="project-content">
        <h3>Blood and Sand - ARPG Combat System</h3>
        <p class="project-description">
            Comprehensive AI combat system featuring <strong>15+ enemy archetypes</strong> with adaptive difficulty scaling. 
            Achieved <strong>60+ FPS performance</strong> with 20+ concurrent intelligent agents in 3.5km interactive arena.
        </p>
        <div class="project-metrics">
            <span class="metric">60+ FPS</span>
            <span class="metric">15+ AI Archetypes</span>
            <span class="metric">3.5km Arena</span>
            <span class="metric">95% User Satisfaction</span>
        </div>
        <div class="project-features">
            <h4>Key Technical Achievements:</h4>
            <ul>
                <li>Scalable behavior tree system supporting rapid iteration</li>
                <li>Data-driven AI configuration for real-time balance tuning</li>
                <li>Custom debugging tools for AI behavior analysis</li>
                <li>Performance optimization achieving stable 60+ FPS</li>
                <li>Modular architecture enabling quick prototyping</li>
            </ul>
        </div>
        <div class="project-tech">
            <span class="tech-tag">Unreal Engine 5</span>
            <span class="tech-tag">C++ & Blueprints</span>
            <span class="tech-tag">Behavior Trees</span>
            <span class="tech-tag">Performance Optimization</span>
            <span class="tech-tag">AI Systems</span>
        </div>
        <div class="project-links">
            <a href="projects/blood-and-sand.html" class="btn btn-small btn-primary">View Details</a>
            <a href="projects/" class="btn btn-small btn-outline">All Projects</a>
        </div>
    </div>
    <div class="project-media">
        <div class="image-placeholder project-preview" data-project="blood-sand">
            <i class="fas fa-gamepad"></i>
            <p>Combat System Preview</p>
            <div class="hover-overlay">
                <i class="fas fa-play-circle"></i>
                <span>View Project Details</span>
            </div>
        </div>
    </div>
</div>

<!-- AR Project -->
<div class="project-card">
    <div class="project-content">
        <h3>AR-Enhanced Interactive Systems</h3>
        <p class="project-description">
            Led cross-functional team integration of augmented reality features with gameplay systems. 
            Optimized performance for mobile AR platforms while maintaining visual fidelity.
        </p>
        <div class="project-features">
            <h4>Leadership & Technical Highlights:</h4>
            <ul>
                <li>Managed distributed team across multiple time zones</li>
                <li>Integrated complex character customization systems</li>
                <li>Delivered project on schedule with comprehensive documentation</li>
                <li>Optimized asset pipelines for stable user experience</li>
            </ul>
        </div>
        <div class="project-tech">
            <span class="tech-tag">Unreal Engine</span>
            <span class="tech-tag">AR Development</span>
            <span class="tech-tag">Mobile Optimization</span>
            <span class="tech-tag">Team Leadership</span>
        </div>
        <div class="project-links">
            <a href="projects/ar-interactive.html" class="btn btn-small btn-primary">View Details</a>
            <a href="projects/" class="btn btn-small btn-outline">All Projects</a>
        </div>
    </div>
    <div class="project-media">
        <div class="image-placeholder project-preview" data-project="ar-systems">
            <i class="fas fa-mobile-alt"></i>
            <p>AR Demo Preview</p>
            <div class="hover-overlay">
                <i class="fas fa-play-circle"></i>
                <span>View Project Details</span>
            </div>
        </div>
    </div>
</div>

<!-- Backend Systems Project -->
<div class="project-card">
    <div class="project-content">
        <h3>Scalable Backend Systems Development</h3>
        <p class="project-description">
            Currently developing scalable backend systems with focus on real-time data processing 
            for interactive applications at Revature.
        </p>
        <div class="project-features">
            <h4>Current Focus Areas:</h4>
            <ul>
                <li>Scalable system architecture design</li>
                <li>Real-time data processing optimization</li>
                <li>Agile development methodologies</li>
                <li>Cross-team collaboration and documentation</li>
            </ul>
        </div>
        <div class="project-tech">
            <span class="tech-tag">Backend Development</span>
            <span class="tech-tag">Real-time Systems</span>
            <span class="tech-tag">Agile/Scrum</span>
            <span class="tech-tag">Team Collaboration</span>
        </div>
        <div class="project-links">
            <a href="projects/backend-systems.html" class="btn btn-small btn-primary">View Details</a>
            <a href="projects/" class="btn btn-small btn-outline">All Projects</a>
        </div>
    </div>
    <div class="project-media">
        <div class="image-placeholder project-preview" data-project="backend">
            <i class="fas fa-server"></i>
            <p>System Architecture</p>
            <div class="hover-overlay">
                <i class="fas fa-play-circle"></i>
                <span>View Project Details</span>
            </div>
        </div>
    </div>
</div>
    
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
});
