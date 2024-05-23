<template>
  <div>
    <Header />

    <router-view />
  
    <Footer />
  </div>
</template>

<script>
import Footer from './Footer.vue';
import Header from './Header.vue';
export default {
  name: 'Layout',
  components: {
    Footer,
    Header
  },
}
</script>

<style>

</style>