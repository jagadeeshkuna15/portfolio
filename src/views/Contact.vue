<template>
  <section id="contact" class="section-themable">
    <div class="container">
     <h2 class="mb-4 fw-bold" style="color: var(--text)">Contact</h2>
      <hr />

      <div class="row align-items-center">
        <!-- Left Column -->
        <div class="col-md-6 text-md-start text-center mb-4 mb-md-0">
        <h4 class="fw-bold mb-3 text-center" style="color: var(--text)">
  Let's stay in touch!
</h4>
          <p class="mb-4" style="color: var(--text)">
            Interested in software development and web development? Feel free
            to get in touch with me today!
          </p>

          <div class="d-flex justify-content-md-start justify-content-center gap-4 mb-3 fs-3">
            <a href="https://www.linkedin.com/in/jagadeeshkuna" target="_blank" class="icon-link">
              <i class="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com/yourgithub" target="_blank" class="icon-link">
              <i class="bi bi-github"></i>
            </a>
            <a href="mailto:jkuna.jagadeesh@gmail.com" class="icon-link">
              <i class="bi bi-envelope-fill"></i>
            </a>
            <a href="tel:+18047509882" class="icon-link">
              <i class="bi bi-telephone-fill"></i>
            </a>
          </div>

          <p class="email-text">jkuna.jagadeesh@gmail.com</p>
        </div>

        <!-- Right Column -->
        <div class="col-md-6 text-center">
          <img
          src="/email-illustration.png"
            alt="contact illustration"
            class="img-fluid contact-image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
.section-themable {
  background-color: var(--bg);
  color: var(--text);
  padding: 80px 0;
}

.icon-link {
  color: var(--text);
  transition: 0.3s;
  font-size: 1.8rem;
}
.icon-link:hover {
  color: var(--accent);
}

.email-text {
  font-weight: 500;
  font-size: 1.1rem;
  color: var(--text);
}

.contact-image {
  max-height: 360px; /* increased from 260px */
  width: 100%;
  object-fit: contain;
  filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.2));
}
hr {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1); /* subtle in dark */
  margin-bottom: 2rem;
}
body.light-theme hr {
  border-top: 1px solid rgba(0, 0, 0, 0.1); /* subtle in light */
}
</style>
