/* ==========================================================================
   HARIHARAN G - PERSONAL PORTFOLIO SCRIPT
   Handles theme switching, mobile menu toggle, animations, and contact form
   ========================================================================== */

(function () {
  'use strict';

  const body = document.body;
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  // --- Theme Toggle Logic ---
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme === 'light') {
    body.classList.add('light');
  }

  function updateThemeIcon() {
    if (!themeIcon || !themeToggle) return;
    const isLight = body.classList.contains('light');
    themeIcon.textContent = isLight ? '☀' : '☾';
    themeToggle.title = isLight ? 'Switch to dark theme' : 'Switch to bright theme';
    themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to bright theme');
  }

  updateThemeIcon();

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('light');
      const isLight = body.classList.contains('light');
      localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
      updateThemeIcon();
    });
  }

  // --- Mobile Navigation Menu ---
  function openMenu() {
    if (!navLinks || !menuToggle) return;
    navLinks.classList.add('open');
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Close menu');
  }

  function closeMenu() {
    if (!navLinks || !menuToggle) return;
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
  }

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navLinks.classList.contains('open');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close menu when clicking any nav link
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => closeMenu());
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('open') && !navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        closeMenu();
      }
    });

    // Close menu on Escape key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        closeMenu();
      }
    });
  }

  // --- Scroll Reveal Animations ---
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  } else {
    // Fallback for older browsers
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
  }

  // --- Contact Form AJAX Submission ---
  const form = document.getElementById('contactForm');
  if (form) {
    const formStatus = document.getElementById('formStatus');
    const submitBtn = document.getElementById('contactSubmit');
    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const messageInput = document.getElementById('contactMessage');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const nameVal = nameInput ? nameInput.value.trim() : '';
      const emailVal = emailInput ? emailInput.value.trim() : '';
      const messageVal = messageInput ? messageInput.value.trim() : '';

      if (!nameVal) {
        showStatus('Please enter your name.', 'error');
        if (nameInput) nameInput.focus();
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailVal || !emailRegex.test(emailVal)) {
        showStatus('Please enter a valid email address.', 'error');
        if (emailInput) emailInput.focus();
        return;
      }

      if (!messageVal) {
        showStatus('Please enter your message.', 'error');
        if (messageInput) messageInput.focus();
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
      }
      showStatus('Sending your message...', 'info');

      try {
        const response = await fetch('https://formsubmit.co/ajax/hariharang.cse@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: nameVal,
            email: emailVal,
            message: messageVal,
            _subject: 'New Portfolio Contact Message',
            _replyto: emailVal,
            _template: 'table',
            _captcha: 'false'
          })
        });

        const data = await response.json().catch(() => ({}));

        if (response.ok && (data.success === 'true' || data.success === true || data.message)) {
          showStatus('✓ Thank you! Your message has been sent successfully.', 'success');
          form.reset();
        } else {
          const errMsg = data.message || 'Submission could not be completed. Please try again or email directly.';
          showStatus('Error: ' + errMsg, 'error');
        }
      } catch (err) {
        showStatus('Network error occurred. Please check your connection or email directly at hariharang.cse@gmail.com', 'error');
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Message';
        }
      }
    });

    function showStatus(msg, type) {
      if (!formStatus) return;
      formStatus.textContent = msg;
      formStatus.className = 'form-status ' + type;
      formStatus.style.display = 'block';
    }
  }
})();
