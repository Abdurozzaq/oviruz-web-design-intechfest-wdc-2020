<template>
  <div>
    <b-navbar toggleable="lg" class="navbar-gradient shadow-sm">
      <b-navbar-brand href="/"><p class="brand-statistic josefinfont my-auto">Oviruz</p></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" class="text-black"><i class="fas fa-bars"></i></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-button @click.prevent="goToHome" variant="link" class="btn-statistic-text robotofont">Home</b-button>
          <b-button @click.prevent="goToStatistic" pill class="btn-statistic border-0 shadow robotofont">Statistik</b-button>

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
  .btn-statistic {
    background-color:white;
    color: #851de0;
  }
  .btn-statistic-text {
    color: white;
  }
  .brand-statistic {
    color: white;
    font-size: 1.2em;
    font-weight: bold;
  }
  .navbar-gradient {
    background: rgb(150,104,230);
    background: linear-gradient(317deg, rgba(150,104,230,1) 21%, rgba(198,118,255,1) 61%);
  }
</style>