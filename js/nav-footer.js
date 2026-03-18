document.addEventListener('DOMContentLoaded', () => {
    const header = `
    <nav class="navbar navbar-expand-lg fixed-top glass-nav" id="mainNav">
        <div class="container container-custom">
            <a class="navbar-brand d-flex align-items-center gap-2" href="index.html">
                <img src="assets/ambition_logo.png" alt="Ambition Tutorials" height="50">
                <span class="text-white fw-bold d-none d-sm-inline">Ambition Tutorials</span>
            </a>
            <button class="navbar-toggler border-0 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon" style="filter: invert(1);"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto align-items-center">
                    <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="courses.html">Courses</a></li>
                    <li class="nav-item"><a class="nav-link" href="faculty.html">Faculty</a></li>
                    <li class="nav-item"><a class="nav-link" href="results.html">Results</a></li>
                    <li class="nav-item"><a class="nav-link" href="enquiry.html">Enquiry</a></li>
                    <li class="nav-item ms-lg-3 mt-3 mt-lg-0">
                        <a class="btn-gold-custom py-2 px-4 shadow-sm" href="registration.html">Enroll Now</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>`;

    const footer = `
    <footer class="footer bg-navy text-white pt-5 pb-3">
        <div class="container container-custom">
            <div class="row g-4 mb-4">
                <div class="col-lg-4 pe-lg-4">
                    <a class="navbar-brand d-flex align-items-center gap-2 text-white mb-3" href="index.html">
                        <img src="assets/ambition_logo.png" alt="Ambition Tutorials" height="70" class="bg-white rounded p-1">
                        <span class="fw-bold">Ambition Tutorials</span>
                    </a>
                    <p class="opacity-75">Ambition Tutorials has been a beacon of academic success in Pune for over a decade. We specialize in School, Science, and Commerce streams.</p>
                    <div class="social-links d-flex gap-2 mt-3">
                        <a href="#" class="btn btn-outline-light btn-sm rounded-circle"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="btn btn-outline-light btn-sm rounded-circle"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="btn btn-outline-light btn-sm rounded-circle"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div class="col-lg-2 col-md-4">
                    <h5 class="text-gold mb-3">Quick Links</h5>
                    <ul class="list-unstyled footer-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="courses.html">Courses</a></li>
                        <li><a href="faculty.html">Faculty</a></li>
                        <li><a href="results.html">Results</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-4">
                    <h5 class="text-gold mb-3">Programs</h5>
                    <ul class="list-unstyled footer-links">
                        <li><a href="courses.html">Class 5th - 10th</a></li>
                        <li><a href="courses.html">Science (11th-12th)</a></li>
                        <li><a href="courses.html">Commerce</a></li>
                        <li><a href="courses.html">Competitive Prep</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-4">
                    <h5 class="text-gold mb-3">Contact Us</h5>
                    <ul class="list-unstyled opacity-75">
                        <li class="mb-2"><i class="fas fa-map-marker-alt me-2 text-gold"></i> Pune, Maharashtra, India</li>
                        <li class="mb-2"><i class="fas fa-phone-alt me-2 text-gold"></i> +91 98765 43210</li>
                        <li class="mb-2"><i class="fas fa-envelope me-2 text-gold"></i> info@ambitiontutorials.com</li>
                    </ul>
                </div>
            </div>
            <hr class="border-secondary">
            <div class="text-center opacity-50 mt-4">
                <p class="mb-0">&copy; 2026 Ambition Tutorials. All rights reserved.</p>
            </div>
        </div>
    </footer>`;

    // Inject header and footer
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (headerPlaceholder) headerPlaceholder.outerHTML = header;
    if (footerPlaceholder) footerPlaceholder.outerHTML = footer;

    // Active Link Highlighting
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});
