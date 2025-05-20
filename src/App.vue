<template>
  <div>
    <Navbar />
    <Home />
    <About />
    <Skills />
       <Experience />
    <Projects />
   
    <Education />   
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Skills from './views/Skills.vue'
import Projects from './views/Projects.vue'
import Contact from './views/Contact.vue'
import Education from './views/Education.vue'
import Experience from './views/Experience.vue'

export default {
  components: { Navbar, Footer, Home, About, Skills, Projects, Contact,Education,Experience }
}
</script>
