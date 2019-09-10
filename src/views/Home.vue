<template>
  <div class="home">
    <Navtitle/>
    <img alt="Vue logo" src="../assets/imgs/logo.png">
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import Navtitle from '@/components/Navtitle.vue'

export default {
  name: 'home',
  components: {
    Footer,Navtitle
  }
}
</script>
