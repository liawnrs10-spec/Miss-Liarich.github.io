// ========================================
// Navigation & Mobile Menu Toggle
// ========================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ========================================
// Active Nav Link on Scroll
// ========================================

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ========================================
// Download CV Button
// ========================================

const downloadCvBtn = document.getElementById('downloadCvBtn');

downloadCvBtn.addEventListener('click', () => {
    const cvContent = `
CURRICULUM VITAE
Lia Winarso
Educator, Journalist & Community Leader
Banyuwangi, Indonesia

PROFESSIONAL SUMMARY
A dedicated educator with a strong background in both primary education and public administration. 
Passionate about empowering communities through language and education. Fluent in Indonesian, Javanese, English, and Malaysian.

PROFESSIONAL EXPERIENCE

Primary Teacher
SDN 2 Penganjuran
August 2022 - Present
- Educating and nurturing young minds in a dynamic primary education environment
- Developing innovative teaching methods and fostering a supportive learning atmosphere

English Tutor
PKBM Bintang
September 2022 - Present
- Instructing over 100 students in verbal and written English skills
- Specializing in communicative language teaching and student-centered learning approaches

Podcast Anchor & Journalist
Seblang.com
2022 - Present
- Creating engaging multimedia content and conducting interviews
- Reporting on community stories and amplifying underrepresented voices

Secretary for the Leader
Indonesian National Youth Committee (KNPI), Jakarta
May 2018 - October 2019
- Supporting organizational leadership and coordinating youth initiatives
- Facilitating national programs to empower young citizens

EDUCATION

Bachelor of Elementary Education (S.Pd)
Universitas Terbuka
Graduated: May 2024

Bachelor of Public Administration (S.Ap)
University 17 Agustus 1945
Graduated: August 2019

COMMUNITY INITIATIVES

Mrs. Layla Course
2018 - Present
Founder of a non-profit community initiative providing free English education to underprivileged children.
Reached 100+ students, operating for 6+ years.

LANGUAGE PROFICIENCIES
- Indonesian (Native)
- Javanese (Native)
- English (Fluent)
- Malaysian (Fluent)

SKILLS
Teaching, English Language, Journalism, Community Leadership, Public Speaking, Project Management
    `;

    // Create blob and download
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Lia_Winarso_CV.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);

    // Show feedback
    showNotification('CV downloaded successfully!', 'success');
});

// ========================================
// Contact Form Handling
// ========================================

const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate inputs
    if (!nameInput.value.trim()) {
        showNotification('Please enter your name', 'error');
        return;
    }

    if (!validateEmail(emailInput.value)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }

    if (!messageInput.value.trim()) {
        showNotification('Please enter your message', 'error');
        return;
    }

    // Simulate form submission
    showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');

    // Clear form
    contactForm.reset();
});

// ========================================
// Utility Functions
// ========================================

// Email validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show notification message
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        border-radius: 8px;
        font-weight: 600;
        z-index: 2000;
        animation: slideIn 0.3s ease;
        backdrop-filter: blur(10px);
        ${type === 'success' ? 
            'background: rgba(39, 174, 96, 0.95); color: white;' : 
            'background: rgba(231, 76, 60, 0.95); color: white;'
        }
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// ========================================
// Scroll Animations (Intersection Observer)
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

// Observe all cards and sections
const cards = document.querySelectorAll(
    '.experience-card, .education-card, .project-card, .skill-tag'
);

cards.forEach((card, index) => {
    card.style.animation = 'none';
    card.style.opacity = '0';
    observer.observe(card);
});

// ========================================
// CSS Animations (added via JavaScript)
// ========================================

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .notification-success {
        border-left: 4px solid #27AE60;
    }

    .notification-error {
        border-left: 4px solid #E74C3C;
    }
`;
document.head.appendChild(style);

// ========================================
// Smooth Scroll Offset for Sticky Nav
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ========================================
// Initialize on Page Load
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website loaded successfully!');
});