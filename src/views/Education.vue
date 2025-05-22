<template>
  <section id="education" class="section-themable">
    <div class="container">
      <div class="section-header mb-5">
        <h2 class="section-title">Education</h2>
        <hr class="section-divider" />
      </div>

      <!-- Card 1 -->
      <div class="edu-card mb-4 d-flex align-items-center">
        <div class="edu-logo">
          <img src="/Cleveland_State_University_logo.png" alt="Cleveland State University" class="img-fluid" />
        </div>
        <div class="edu-details">
          <h5 class="fw-bold text-highlight mb-1">Cleveland State University</h5>
          <p class="mb-1">Master of Science in Computer Science and Engineering</p>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="edu-card mb-4 d-flex align-items-center">
        <div class="edu-logo bg-dark">
          <img src="/bvc.webp" alt="JNTUK" class="img-fluid" />
        </div>
        <div class="edu-details">
          <h5 class="fw-bold text-highlight mb-1">
            BVCR COLLEGE OF ENGINEERING, Kakinada (JNTUK)
          </h5>
          <p class="mb-0">Bachelor of Technology in Computer Science and Engineering</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Education'
}
</script>

<style scoped>
.section-themable {
  background-color: var(--bg);
  color: var(--text);
  padding: 80px 0;
}

.section-header {
  margin-bottom: 2rem;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 0.5rem;
}

.section-divider {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
}

/* Card Styles + Transition */
.edu-card {
  background-color: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 10px;
  display: flex;
  gap: 20px;
  transition: all 0.3s ease;
  box-shadow: 0 0 0 transparent;
}

.edu-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 0.08);
}

.edu-logo {
  flex: 0 0 80px;
}

.edu-logo img {
  max-width: 80px;
  border-radius: 5px;
}

.edu-details {
  flex: 1;
}

.bg-dark {
  background-color: #1a1a1a;
  padding: 10px;
  border-radius: 8px;
}

.text-highlight {
  color: var(--accent);
}
</style>
