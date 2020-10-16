<template>
  <div>
    <b-navbar toggleable="lg" class="navbar-trans navbarnya">
      <b-navbar-brand href="/"><p class="brand-landing josefinfont my-auto">Oviruz</p></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" class="text-black"><i class="fas fa-bars"></i></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-button @click.prevent="goToHome" variant="link" class="btn-landing-text robotofont">Home</b-button>
          <b-button @click.prevent="goToStatistic" pill class="btn-landing border-0 shadow robotofont">Statistik</b-button>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }, // end of data

  methods: {
    goToHome: function() {
      let currentObj = this

      currentObj.$router.push('/')
    },
    goToStatistic: function() {
      let currentObj = this

      currentObj.$router.push('/pages/statistic')
    }
  }
}
</script>


<style>
  .btn-landing {
    background-color: #851de0;
  }
  .btn-landing-text {
    color: #851de0;
  }
  .brand-landing {
    color: #851de0;
    font-size: 1.2em;
    font-weight: bold;
  }
  .navbar-trans {
    background: transparent;
  }
  .navbarnya {
    position: absolute;
    top: 0px;
    width: 100%;
  }
</style>