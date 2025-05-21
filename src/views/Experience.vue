<template>
  <section id="experience" class="section-themable">
    <div class="container">
      <!-- Section Title with Horizontal Line -->
      <div class="section-header mb-5">
        <h2 class="section-title">Experience</h2>
        <hr class="section-divider" />
      </div>

      <!-- Experience Content -->
      <div>
        <h5 class="fw-bold" style="color: var(--accent)">
          Front-End Developer – Mantra technologies                                                                                                               
        </h5>
        <ul>
          <li>
            Experienced Front-end Developer with 2.5+ years of expertise in responsive web development using HTML, CSS, JavaScript, TypeScript, Vue.js, and front-end frameworks.
          </li>
          <li>
            Developed and maintained responsive web apps using <strong>HTML5, CSS, Vue.js, and JavaScript</strong>.
          </li>
          <li>
            Built a <strong>Dynamic Kanban board application</strong> using Vue Draggable and NPM modules.
          </li>
          <li>
            Implemented Bootstrap 4 for consistent UI across platforms.
          </li>
          <li>
            Integrated real-time collaboration, reusable components, cloud features, and advanced UI functionality.
          </li>
          <li>
           Audio and Video recording, create short audio and video messages to provide better narrative while assigning
work, giving a work update, product demo or step-by-step instructions.
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Experience'
}
</script>

<style scoped>
.section-themable {
  background-color: var(--bg);
  color: var(--text);
  padding: 80px 0;
}

/* Header styling like your screenshot */
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

ul {
  padding-left: 1.2rem;
}
li {
  margin-bottom: 10px;
}
</style>
