<template>
  <div class="bg-color-goto-statistic py-3">
    <b-row align-v="start" align-h="center" class="mx-0">
      <b-col cols="2">
        <b-img data-aos="zoom-in" src="../assets/datasource.png" fluid alt="Sumber Data Covid-19 Indonesia" class="pt-2 pb-3"></b-img>
      </b-col>
    </b-row>

    <b-row align-v="start" align-h="center" class="mx-0">
      <b-col cols="12" class="text-center">
        <h3 data-aos="zoom-in" class="text-center header-color mx-1 robotofont">Untuk Data Realtime Dan Langsung Dari Pemerintah, Klik Di Bawah Ini...</h3>
        <b-button data-aos="zoom-in" @click.prevent="goToData" pill class="button-redirect-statistic border-0 shadow robotofont mb-3 mt-2">Klik Disini Untuk Melihat!</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }, // end of data

  methods: {
    goToData: function() {
      window.open("https://covid19.go.id/peta-sebaran", "_blank"); 
    }
  }
}
</script>

<style>
.bg-color-goto-statistic {
  background: rgb(238,224,246);
  background: linear-gradient(317deg, rgba(238,224,246,1) 40%, rgba(185,135,246,1) 68%);
}

.header-color {
  color: #455a64;
}

.button-redirect-statistic {
  background-color: #455a64;
}
</style>

