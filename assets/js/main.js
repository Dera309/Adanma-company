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
