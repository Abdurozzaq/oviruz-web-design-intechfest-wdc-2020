<template>
  <div>
    <landing-navbar/>

    <router-view/>
  </div>
</template>

<script>
import LandingNavbar from '../../components/LandingNavBar.vue'
export default {
  components: {
    LandingNavbar,
  }
}
</script>

