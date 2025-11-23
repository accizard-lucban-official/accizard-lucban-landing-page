// AcciZard Landing Page JavaScript
console.log('Script.js loaded successfully');

// Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing News Manager...');
    
    // Mobile navigation toggle for new nav-hero structure
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-hero-links');
    
    if (navToggle && navLinks) {
        console.log('NavToggle found:');
        console.log('▸', navToggle);
        console.log('NavLinks found:');
        console.log('▸', navLinks);
        
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        console.log('Mobile navigation elements found, setting up event listeners...');
        console.log('Mobile navigation setup complete! ✓');
    }
});

// Smooth scrolling for navigation links - removes hash from URL
document.addEventListener('DOMContentLoaded', function() {
    // Function to handle smooth scroll and remove hash from URL
    function handleSmoothScroll(e, link) {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Remove hash from URL after scrolling (without page reload)
            setTimeout(() => {
                if (window.history && window.history.replaceState) {
                    window.history.replaceState(null, null, window.location.pathname + window.location.search);
                }
            }, 100);
            
            // Close mobile menu if open
            const navLinksElement = document.querySelector('.nav-hero-links');
            const navToggle = document.getElementById('navToggle');
            if (navLinksElement && navToggle) {
                navLinksElement.classList.remove('active');
                navToggle.classList.remove('active');
            }
        }
    }
    
    // Handle all navigation links (mobile menu)
    const navLinks = document.querySelectorAll('.nav-hero-links a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            handleSmoothScroll(e, this);
        });
    });
    
    // Handle desktop navigation links
    const desktopNavLinks = document.querySelectorAll('.nav-hero-links-desktop a[href^="#"]');
    desktopNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            handleSmoothScroll(e, this);
        });
    });
    
    // Handle footer quick links
    const footerLinks = document.querySelectorAll('.footer a[href^="#"]');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            handleSmoothScroll(e, this);
        });
    });
    
    // Handle mobile navigation links
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link[href^="#"]');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            handleSmoothScroll(e, this);
        });
    });
    
    // Remove hash from URL on page load if it exists
    if (window.location.hash) {
        // Scroll to the section first
        const hash = window.location.hash;
        const targetSection = document.querySelector(hash);
        if (targetSection) {
            setTimeout(() => {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Remove hash from URL after scrolling
                setTimeout(() => {
                    if (window.history && window.history.replaceState) {
                        window.history.replaceState(null, null, window.location.pathname + window.location.search);
                    }
                }, 100);
            }, 100);
        } else {
            // If section not found, just remove the hash
            if (window.history && window.history.replaceState) {
                window.history.replaceState(null, null, window.location.pathname + window.location.search);
            }
        }
    }
});

// AOS Animation initialization
document.addEventListener('DOMContentLoaded', function() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }
});

// FAQ Toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const header = item.querySelector('.faq-header');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');
        
        if (header && answer && icon) {
            header.addEventListener('click', function() {
                const isActive = item.classList.contains('active');
                
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        const otherIcon = otherItem.querySelector('.faq-icon');
                        if (otherAnswer && otherIcon) {
                            otherAnswer.style.maxHeight = null;
                            otherIcon.textContent = '+';
                        }
                    }
                });
                
                // Toggle current item
                if (isActive) {
                    item.classList.remove('active');
                    answer.style.maxHeight = null;
                    icon.textContent = '+';
                } else {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    icon.textContent = '×';
                }
            });
        }
    });
});

// Video card functionality
document.addEventListener('DOMContentLoaded', function() {
    const videoCards = document.querySelectorAll('.video-card');
    
    videoCards.forEach(card => {
        card.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-video');
            const playBtn = this.querySelector('.play-btn');
            
            if (videoSrc && playBtn) {
                // Create modal for video
                const modal = document.createElement('div');
                modal.className = 'video-modal';
                modal.innerHTML = `
                    <div class="video-modal-content">
                        <span class="video-close">&times;</span>
                        <video controls autoplay>
                            <source src="${videoSrc}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                `;
                
                // Add modal styles
                const style = document.createElement('style');
                style.textContent = `
                    .video-modal {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.9);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        z-index: 1000;
                    }
                    .video-modal-content {
                        position: relative;
                        max-width: 90%;
                        max-height: 90%;
                    }
                    .video-close {
                        position: absolute;
                        top: -40px;
                        right: 0;
                        color: white;
                        font-size: 30px;
                        cursor: pointer;
                        z-index: 1001;
                    }
                    .video-modal video {
                        width: 100%;
                        height: auto;
                        max-height: 80vh;
                    }
                `;
                document.head.appendChild(style);
                document.body.appendChild(modal);
                
                // Close modal functionality
                const closeBtn = modal.querySelector('.video-close');
                closeBtn.addEventListener('click', function() {
                    document.body.removeChild(modal);
                    document.head.removeChild(style);
                });
                
                modal.addEventListener('click', function(e) {
                    if (e.target === modal) {
                        document.body.removeChild(modal);
                        document.head.removeChild(style);
                    }
                });
            }
        });
    });
});

console.log('Script.js initialization complete');

// Mobile Navigation Bar - Scroll Hide/Show and Hamburger Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileNavBar = document.getElementById('mobileNavBar');
    const mobileNavToggle = document.getElementById('mobileNavToggle');
    const mobileNavMenu = document.getElementById('mobileNavMenu');
    
    if (!mobileNavBar || !mobileNavToggle || !mobileNavMenu) {
        return;
    }
    
    let lastScrollTop = 0;
    let isScrolling = false;
    
    // Scroll hide/show functionality
    function handleScroll() {
        if (window.innerWidth > 768) return; // Only on mobile
        
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down - hide navbar
            mobileNavBar.classList.add('hidden');
        } else {
            // Scrolling up - show navbar
            mobileNavBar.classList.remove('hidden');
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }
    
    // Throttle scroll events for better performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function() {
                handleScroll();
                scrollTimeout = null;
            }, 10);
        }
    });
    
    // Hamburger toggle functionality
    mobileNavToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const isActive = mobileNavToggle.classList.toggle('active');
        mobileNavMenu.classList.toggle('active', isActive);
        
        console.log('Hamburger clicked, menu active:', isActive);
    });
    
    // Close menu when clicking on a link
    const navLinks = mobileNavMenu.querySelectorAll('.mobile-nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNavToggle.classList.remove('active');
            mobileNavMenu.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileNavBar.contains(e.target) && !mobileNavMenu.contains(e.target)) {
            mobileNavToggle.classList.remove('active');
            mobileNavMenu.classList.remove('active');
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            mobileNavToggle.classList.remove('active');
            mobileNavMenu.classList.remove('active');
        }
    });
});



