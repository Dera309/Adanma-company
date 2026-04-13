// Adanma Engineering — Main JS

// Scroll-reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => revealObserver.observe(el));

// Navbar scroll shadow
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('shadow-[0_4px_24px_-4px_rgba(24,28,32,0.08)]');
    } else {
      navbar.classList.remove('shadow-[0_4px_24px_-4px_rgba(24,28,32,0.08)]');
    }
  });
}

// Mobile hamburger menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const icon = menuToggle.querySelector('.material-symbols-outlined');
    icon.textContent = mobileMenu.classList.contains('open') ? 'close' : 'menu';
  });
  // Close menu when a link is clicked
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuToggle.querySelector('.material-symbols-outlined').textContent = 'menu';
    });
  });
}

// Contact form submission (WhatsApp redirect)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.querySelector('[name="name"]')?.value || '';
    const message = contactForm.querySelector('[name="message"]')?.value || '';
    const text = encodeURIComponent(`Hello Adanma, my name is ${name}. ${message}`);
    window.open(`https://wa.me/2348153127309?text=${text}`, '_blank');
  });
}
