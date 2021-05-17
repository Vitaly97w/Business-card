<template>
  <title>Твое портфолио</title>
  <div>
    <Navbar />
    <Welcome />
    <About />
    <Portfolio />
    <Contact />
    <Footer />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Navbar from '../components/Navbar.vue'
import Welcome from '../components/WelcomeComponents/Welcome.vue'
import About from '../components/About/About.vue'
import Portfolio from '../components/Portfolio/Portfolio.vue'
import Contact from '../components/Contacts/Contact.vue'
import Footer from '../components/Footer.vue'
@Options({
  components: { Navbar, Welcome, About, Portfolio, Contact, Footer },
})
export default class Enter extends Vue {}
</script>
