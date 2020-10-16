<template>
  <div>
    <main-nav-bar/>

    <router-view/>
  </div>
</template>

<script>
import MainNavBar from '../../components/MainNavBar.vue'
export default {
  components: {
    MainNavBar,
  }
}
</script>

