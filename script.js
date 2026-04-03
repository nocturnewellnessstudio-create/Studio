document.addEventListener('DOMContentLoaded', () => {

  // ── Mobile Nav ──────────────────────────────────────────
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileNav = document.querySelector('.nav-mobile');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      const spans = hamburger.querySelectorAll('span');
      if (mobileNav.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });
  }

  // ── Sticky Nav shadow ───────────────────────────────────
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        nav.style.boxShadow = '0 2px 30px rgba(58,46,40,0.08)';
      } else {
        nav.style.boxShadow = 'none';
      }
    });
  }

  // ── FAQ Accordion ───────────────────────────────────────
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // ── Intersection Observer — animate-in ──────────────────
  const animEls = document.querySelectorAll('.animate-in');
  if (animEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.animationPlayState = 'running';
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    animEls.forEach(el => {
      el.style.animationPlayState = 'paused';
      observer.observe(el);
    });
  }

  // ── Counter Animate ─────────────────────────────────────
  function animateCounter(el, target, duration = 1600) {
    let start = 0;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      el.textContent = Math.floor(progress * target).toLocaleString() + (el.dataset.suffix || '');
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  const counters = document.querySelectorAll('.stat-num[data-count]');
  if (counters.length) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateCounter(e.target, parseInt(e.target.dataset.count));
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => obs.observe(c));
  }

  // ── Pricing Toggle ──────────────────────────────────────
  const toggleSwitch = document.querySelector('.toggle-switch');
  if (toggleSwitch) {
    toggleSwitch.addEventListener('click', () => {
      toggleSwitch.classList.toggle('on');
      const isAnnual = toggleSwitch.classList.contains('on');
      document.querySelectorAll('.pricing-toggle .toggle-label').forEach((lbl, i) => {
        lbl.classList.toggle('active', isAnnual ? i === 1 : i === 0);
      });
      document.querySelectorAll('[data-monthly]').forEach(el => {
        if (isAnnual) {
          el.textContent = el.dataset.annual;
        } else {
          el.textContent = el.dataset.monthly;
        }
      });
    });
  }

  // ── Gallery Lightbox ────────────────────────────────────
  const galleryItems = document.querySelectorAll('.gallery-item');
  if (galleryItems.length) {
    const lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML = `
      <div class="lightbox-overlay"></div>
      <div class="lightbox-content">
        <button class="lightbox-close">✕</button>
        <img src="" alt="">
      </div>`;
    document.body.appendChild(lb);
    const lbImg = lb.querySelector('img');
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        lbImg.src = item.querySelector('img').src;
        lb.style.cssText = 'position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;';
        lb.querySelector('.lightbox-overlay').style.cssText = 'position:absolute;inset:0;background:rgba(30,26,23,0.92);';
        lb.querySelector('.lightbox-content').style.cssText = 'position:relative;z-index:1;max-width:90vw;max-height:90vh;';
        lbImg.style.cssText = 'max-width:100%;max-height:85vh;object-fit:contain;';
        lb.querySelector('.lightbox-close').style.cssText = 'position:absolute;top:-40px;right:0;color:#fff;font-size:1.5rem;background:none;border:none;cursor:pointer;font-family:inherit;';
      });
    });
    lb.querySelector('.lightbox-close').addEventListener('click', () => lb.style.display = 'none');
    lb.querySelector('.lightbox-overlay').addEventListener('click', () => lb.style.display = 'none');
  }

// ── Contact Form ────────────────────────────────────────
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const btn = contactForm.querySelector('[type="submit"]');
    const orig = btn.textContent;

    btn.textContent = 'Sending...';
    btn.disabled = true;

    try {
      const response = await fetch(contactForm.action, {
        method: contactForm.method,
        body: new FormData(contactForm),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        btn.textContent = 'Sent Successfully ✓';
        btn.style.background = 'var(--green)';
        contactForm.reset();

        setTimeout(() => {
          btn.textContent = orig;
          btn.disabled = false;
          btn.style.background = '';
        }, 3000);
      } else {
        btn.textContent = 'Failed to Send';
        btn.style.background = '#c0392b';

        setTimeout(() => {
          btn.textContent = orig;
          btn.disabled = false;
          btn.style.background = '';
        }, 3000);
      }
    } catch (error) {
      btn.textContent = 'Failed to Send';
      btn.style.background = '#c0392b';

      setTimeout(() => {
        btn.textContent = orig;
        btn.disabled = false;
        btn.style.background = '';
      }, 3000);
    }
  });
}

  // ── Auth Forms ──────────────────────────────────────────
  const authForm = document.querySelector('.auth-form');
  if (authForm) {
    authForm.addEventListener('submit', e => {
      e.preventDefault();
      const btn = authForm.querySelector('[type="submit"]');
      btn.textContent = 'Processing…';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = btn.dataset.success || 'Done ✓';
      }, 1200);
    });
  }

  // ── Active nav link ─────────────────────────────────────
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) link.classList.add('active');
  });

  // ── Smooth reveal sections ───────────────────────────────
  const sections = document.querySelectorAll('.section, .section-sm');
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  sections.forEach(sec => {
    sec.style.opacity = '0';
    sec.style.transform = 'translateY(20px)';
    sec.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    revealObs.observe(sec);
  });

});
