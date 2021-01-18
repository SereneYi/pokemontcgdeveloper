<template>
  <div id="app">
    <Header />

    <router-view />

    <Footer />
  </div>
</template>

<script>
import Header from './components/templates/header.vue'
import Footer from './components/templates/footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
