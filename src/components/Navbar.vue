<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <router-link class="navbar-brand fw-bold" to="/">Jagadeesh Kuna</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#experience">Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#education">Education</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
        <a
          class="btn btn-outline-primary ms-3"
          href=" /portfolio/Jagadeesh_Kuna_Resume.pdf "
          target="_blank"
        >
          View Resume
        </a>
        
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  name: 'Navbar',
  data() {
    return {
      theme: 'dark'
    }
  },
  computed: {
    themeIcon() {
      return this.theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-fill'
    }
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark'
      document.body.className = this.theme + '-theme'
      localStorage.setItem('theme', this.theme)
    },
    collapseNavbar() {
      const navbar = document.querySelector('.navbar-collapse');
      if (navbar.classList.contains('show')) {
        new bootstrap.Collapse(navbar).hide();
      }
    }
  },
  mounted() {
    const saved = localStorage.getItem('theme') || 'dark'
    this.theme = saved
    document.body.className = this.theme + '-theme'
  }
}
</script>

<style scoped>
/* .custom-navbar {
  padding: 0.75rem 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.navbar-brand {
  font-size: 1.2rem;
  color: var(--accent) !important;
}

.nav-link {
  color: var(--text) !important;
  font-weight: 500;
}

.nav-link:hover {
  color: var(--accent) !important;
}

.btn-outline-primary {
  color: var(--accent);
  border-color: var(--accent);
}
.btn-outline-primary:hover {
  background-color: var(--accent);
  color: #000;
}

.btn-toggle {
  background: none;
  border: none;
  color: var(--accent);
  font-size: 1.2rem;
} */
 .custom-navbar {
  background-color: var(--bg);
  padding: 0.75rem 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.navbar-brand {
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--accent) !important;
}

.nav-link {
  color: var(--text) !important;
  font-weight: 500;
}

.nav-link:hover {
  color: var(--accent) !important;
}

.btn-outline-primary {
  color: var(--accent);
  border-color: var(--accent);
}

.btn-outline-primary:hover {
  background-color: var(--accent);
  color: #000;
  border-color: var(--accent);
}

</style>
