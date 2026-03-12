/**
 * Main JavaScript File for Ambition Tutorials
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
            offset: 50,
            duration: 800,
            easing: 'ease-in-out',
        });
    }

    // 2. Custom ScrollSpy for exact Active Link Tracking
    const sections = document.querySelectorAll('section[id], header[id]'); // target sections and hero
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    const updateActiveLink = () => {
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 100; // offset for the fixed navbar

        // Find the section currently in view
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        // Special case for top of page (hero section)
        if (window.scrollY < 50) {
            currentSectionId = 'home';
        }

        // Apply active class to corresponding nav link
        navLinks.forEach(link => {
            link.classList.remove('active');
            // Check if the link's href matches the current section ID
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    };

    // Attach scroll event listener and call once on load
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();

    // 3. Navbar Shrink / Glassmorphism strictly on scroll
    const navbar = document.getElementById('mainNav');
    if (navbar) {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Call once on load in case user is already scrolled
        handleScroll();
    }

    // 4. Number Counters Animation
    const counters = document.querySelectorAll('.counter');
    let counted = false;

    const animateCounters = () => {
        if (counted) return;
        counted = true;

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = target / 50; // Adjust for speed

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 30);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    const statsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsContainer = document.querySelector('.stats-container');
    if (statsContainer) {
        statsObserver.observe(statsContainer);
    }

    // 5. Smooth scrolling for internal anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            // Allow default for empty or just "#"
            if (targetId === '#') return;
            
            // Check if it's pointing to element on same page
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();

                // Close mobile navbar if open
                const navCollapse = document.getElementById('navbarNav');
                if (navCollapse && navCollapse.classList.contains('show')) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
                    if (bsCollapse) {
                        bsCollapse.hide();
                    }
                }

                // Scroll to target
                const offset = 80; // Height of the fixed navbar
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = targetElement.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// 4. Mock Form Submission (Handling Google Forms logic locally for UI)
function submitGoogleForm(formType) {
    if (formType === 'registration') {
        const btn = document.querySelector('#registrationForm button[type="submit"]');
        const successMsg = document.getElementById('regSuccess');
        
        // Mock loading state
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin me-2"></i> Submitting...';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
            successMsg.classList.remove('d-none');
            document.getElementById('registrationForm').reset();
            
            // Hide message after 5 seconds
            setTimeout(() => {
                successMsg.classList.add('d-none');
            }, 5000);
        }, 1500);
        
    } else if (formType === 'enquiry') {
        const btn = document.querySelector('#enquiryForm button[type="submit"]');
        const successMsg = document.getElementById('enqSuccess');
        
        // Mock loading state
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin me-2"></i> Submitting...';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
            successMsg.classList.remove('d-none');
            document.getElementById('enquiryForm').reset();

            // Hide message after 5 seconds
            setTimeout(() => {
                successMsg.classList.add('d-none');
            }, 5000);
        }, 1500);
    }
}
