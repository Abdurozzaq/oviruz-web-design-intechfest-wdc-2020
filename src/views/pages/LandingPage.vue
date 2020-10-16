<template>
  <div>
    <hero/>
    <about/>
    <cegah/>
    <learn/>
    <work/>
    <goto-statistic/>
    <Footer/>
    <copyright/>
  </div>
</template>

<script>
import Hero from '../../components/LandingHero.vue'
import About from '../../components/LandingAbout.vue'
import Cegah from '../../components/LandingCegah.vue'
import Learn from '../../components/LandingLFH.vue'
import Work from '../../components/LandingWFH.vue'
import GotoStatistic from '../../components/LandingGoToStatistic.vue'
import Footer from '../../components/Footer.vue'
import Copyright from '../../components/Copyright.vue'
export default {
  components: {
    Hero,
    About,
    Cegah,
    Learn,
    Work,
    GotoStatistic,
    Footer,
    Copyright,
  }
}
</script>