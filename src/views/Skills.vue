<template>
  <section id="skills" class="section-themable">
    <div class="container">
      <!-- Section Title with Line -->
      <div class="section-header mb-5">
        <h2 class="section-title">Skills</h2>
        <hr class="section-divider" />
      </div>

      <div class="row align-items-center">
        <!-- Skills Grid -->
        <div class="col-lg-8">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div
              v-for="(skill, index) in flatSkills"
              :key="index"
              class="d-flex align-items-center"
            >
              <i
                class="bi bi-check-circle-fill me-2"
                style="color: var(--accent); font-size: 1rem"
              ></i>
              <span>{{ skill }}</span>
            </div>
          </div>
        </div>

        <!-- Illustration Image -->
        <div class="col-lg-4 text-center d-none d-lg-block">
          <img
            src="/skills-illustration.gif"
            alt="skills illustration"
            class="img-fluid"
            style="max-height: 300px"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      flatSkills: [
        'HTML & CSS', 'JavaScript', 'Vue.js', 'Bootstrap', 'AWS',
        'React', 'Nuxt.js', 'SQL', 'Node.js', 'Linux',
        'GitHub', 'VS Code', 'REST API', 'Responsive Design',
        'Microsoft SQL Server', 'Python', 'JIRA', 'UNIX', 'Vuex',
        'Firebase', 'Agile', 'Unit Testing', 'Tailwind CSS', 'WordPress'
      ]
    };
  }
};
</script>

<style scoped>
.section-themable {
  background-color: var(--bg);
  color: var(--text);
  padding: 80px 0;
}

/* Title and Divider same as Experience.vue */
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

img {
  filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.3));
}
</style>
