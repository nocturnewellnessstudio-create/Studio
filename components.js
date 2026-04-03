(function () {
  const NAV_HTML = `
<nav class="nav">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <span class="nav-logo-main">Nocturne Wellness Studio</span>
    </a>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About Us</a></li>
      <li><a href="classes.html">Classes</a></li>
      <li><a href="packages.html">Packages</a></li>
      <li><a href="team.html">Team</a></li>
      <li><a href="blog.html">Blog</a></li>
      <li><a href="events.html">Events</a></li>
      <li><a href="contact.html">Contact Us</a></li>
    </ul>
    <button class="nav-hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<div class="nav-mobile">
  <a href="index.html">Home</a>
  <a href="about.html">About Us</a>
  <a href="classes.html">Classes</a>
  <a href="packages.html">Packages</a>
  <a href="team.html">Team</a>
  <a href="trainers.html">Trainers</a>
  <a href="blog.html">Blog</a>
  <a href="events.html">Events</a>
  <a href="gallery.html">Gallery</a>
  <a href="testimonials.html">Testimonials</a>
  <a href="faq.html">FAQ</a>
  <a href="pricing.html">Pricing</a>
  <a href="membership-benefits.html">Membership</a>
  <a href="location.html">Location</a>
  <a href="contact.html">Contact Us</a>
</div>`;

  const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="nav-logo">
          <span class="nav-logo-main">Nocturne Wellness Studio</span>
          <span class="nav-logo-sub">Wellness • Movement • Balance</span>
        </div>
        <p class="footer-tagline">
          A mindful space dedicated to movement, strength, and finding your better self — one session at a time.
        </p>
        <div class="footer-socials">
          <a href="https://www.facebook.com/chloe.manaloto.1" class="footer-social-btn" aria-label="Facebook">f</a>
          <a href="https://www.instagram.com/chloe_manaloto" class="footer-social-btn" aria-label="Instagram">ig</a>
        </div>
      </div>

      <div class="footer-col">
        <h5>Explore</h5>
        <ul class="footer-links">
          <li><a href="about.html">About Us</a></li>
          <li><a href="classes.html">Classes</a></li>
          <li><a href="packages.html">Packages</a></li>
          <li><a href="team.html">Team</a></li>
          <li><a href="blog.html">Blog</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h5>Support</h5>
        <ul class="footer-links">
          <li><a href="contact.html">Contact Us</a></li>
          <li><a href="faq.html">FAQ</a></li>
          <li><a href="location.html">Location</a></li>
          <li><a href="privacy-policy.html">Privacy Policy</a></li>
          <li><a href="terms.html">Terms &amp; Conditions</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2025 Nocturne Wellness Studio. All rights reserved.</p>
      <div class="footer-bottom-links">
        <a href="privacy-policy.html">Privacy</a>
        <a href="terms.html">Terms</a>
      </div>
    </div>
  </div>
</footer>`;

  const navWrapper = document.createElement('div');
  navWrapper.innerHTML = NAV_HTML;
  document.body.insertBefore(navWrapper, document.body.firstChild);

  const footerWrapper = document.createElement('div');
  footerWrapper.innerHTML = FOOTER_HTML;
  document.body.appendChild(footerWrapper);
})();