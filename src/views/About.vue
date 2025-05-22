<template>
  <section id="about" class="section-themable">
    <div class="container">
      <!-- Title and Divider -->
      <div class="section-header mb-5">
        <h2 class="section-title">About Me</h2>
        <hr class="section-divider" />
      </div>

      <div class="row align-items-center">
        <!-- Profile Image -->
        <div class="col-md-4 text-center mb-3 mb-md-0">
          <img
            src="/jaggu-26.jpg"
            class="img-fluid rounded-circle"
            alt="Jagadeesh Kuna"
          />
        </div>

        <!-- Description -->
        <div class="col-md-8">
          <p>
            I am a Frontend Developer with 2.5+ years of experience delivering clean, scalable,
            and responsive applications using Vue.js, Bootstrap, and cloud services.
            I specialize in building real-time features like messaging, collaborative tools,
            and dynamic interfaces.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

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
</style>
