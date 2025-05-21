<template>
  <section id="education" class="section-themable">
    <div class="container">
      <!-- Title -->
      <div class="section-header mb-5">
        <h2 class="section-title">Education</h2>
        <hr class="section-divider" />
      </div>

      <div class="row align-items-center">
        <!-- Left: Text -->
        <div class="col-lg-7">
          <div class="edu-entry mb-4 row">
            <div class="col-9">
              <h5 class="fw-bold  mb-1">Cleveland State University</h5>
              <p class="mb-0 ">
                Master of Science – <em>Computer Science and Engineering</em>
              </p>
            
            </div>
            <div class="col-3 text-end  fw-semibold">Ohio, USA</div>
          </div>

          <div class="edu-entry row">
            <div class="col-9">
             <h5 class="fw-bold mb-1" :style="{ color: 'var(--text-color)' }">
  Jawaharlal Nehru Technological University, Kakinada (JNTUK)
</h5>

<p class=" mb-0" :style="{ color: 'var(--text-color)' }">
 Bachelor of Technology – <em> - Computer Science and Engineering</em>
</p>

            </div>
            <div class="col-3 text-end  fw-semibold">Kakinada, India</div>
          </div>
        </div>

        <!-- Right: Image -->
        <div class="col-lg-5 text-center mt-5 mt-lg-0">
         <img
  src="/education-illustration.gif"
  alt="Education Illustration"
  class="img-fluid animate-fade-up"
  style="max-width: 300px; height: auto;"
/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Education',
};
</script>

<style scoped>
.section-themable {
  background-color: var(--bg);
  color: var(--text);
  padding: 80px 0;
}

.section-title {
  font-size: 28px;
  font-weight: 700;
  font-family: 'Segoe UI', sans-serif;
}

.section-divider {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  margin-bottom: 2rem;
}

.edu-entry {
  margin-bottom: 2rem;
}

/* Simple fade-up animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

.animate-fade-up {
  animation: fadeInUp 1s ease forwards;
}
</style>
