<template>
  <section id="home" class="section-themable text-center d-flex align-items-center justify-content-center" style="min-height: 100vh;">
    <div class="container">
    <h1 class="section-title">Hi, my name is</h1>
    <h2 class="section-highlight">Jagadeesh Kuna</h2>
    <p class="section-description">
      I'm a passionate front-end developer with 2.5+ years of experience in Vue.js,
      Bootstrap, and cloud-based systems. I build responsive and real-time apps with smooth UX and modular design.
    </p>

      <div class="d-flex justify-content-center gap-3 flex-wrap">
        <a href="https://www.linkedin.com/in/jagadeeshkuna/" target="_blank" class="btn btn-accent">Let's connect!</a>
        <a href="#contact" class="btn btn-outline-light">Contact Me</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.section-themable {
  background-color: var(--bg);
  color: var(--text);
  padding: 80px 0;
  transition: background-color 0.3s ease, color 0.3s ease;
}

h1 {
  color: var(--text);
}

.btn-accent {
  background-color: var(--accent);
  color: #000;
  border: none;
}
.btn-accent:hover {
  background-color: #22c1aa;
  color: #000;
}

.btn-outline-light {
  border: 1px solid var(--text);
  color: var(--text);
}
.btn-outline-light:hover {
  background-color: var(--accent);
  color: #000;
}
</style>
