<template>
  <div class="bg-color-cegah py-5">
    <b-container>
      <b-row align-v="start" align-h="center" class="mx-0">
        <b-col cols="4">
          <b-img data-aos="zoom-in" src="../assets/defensecovid.png" fluid alt="Cegah Covid-19" class="pt-2 pb-3 pr-0"></b-img>
        </b-col>
      </b-row>

      <b-row align-v="start" align-h="center" class="mx-0">
        <b-col cols="12">
          <h3 data-aos="zoom-in" class="text-center header-color">Lalu, Bagaimana Cara Mencegahnya?</h3>
        </b-col>
      </b-row>

      <b-row class="mx-0">
        <b-col cols="12" sm="12" md="4" lg="4">
          <b-card data-aos="zoom-in" class="my-3 mx-3 shadow text-center">
            <b-card-text>

              <i class="fas fa-head-side-mask font-icon grey-color-font mb-3"></i>

              <h5 class="grey-color-font">Pakai Masker</h5>

              <h6 class="grey-color-font">
                Meski sebelumnya hanya disarankan untuk orang yang sakit saja, 
                tapi kini masyarakat juga diimbau untuk menggunakannya.
              </h6>

            </b-card-text>
          </b-card>
        </b-col>
        <b-col cols="12" sm="12" md="4" lg="4">
          <b-card data-aos="zoom-in" class="my-3 mx-3 shadow text-center">
            <b-card-text>

              <i class="fas fa-hands-wash font-icon grey-color-font mb-3"></i>

              <h5 class="grey-color-font">Cuci Tangan</h5>

              <h6 class="grey-color-font">
                Beberapa kasus penularan diprediksi terjadi ketika tangan 
                yang menyentuh permukaan terkontaminasi oleh virus lalu tak sengaja memegang wajah.
              </h6>

            </b-card-text>
          </b-card>
        </b-col>
        <b-col cols="12" sm="12" md="4" lg="4">
          <b-card data-aos="zoom-in" class="my-3 mx-3 shadow text-center">
            <b-card-text>

              <i class="fas fa-people-arrows font-icon grey-color-font mb-3"></i>

              <h5 class="grey-color-font">Social Distancing</h5>

              <h6 class="grey-color-font">
                Social distancing adalah jarak jarak dengan yang lainnya. 
                Social distancing yang disarankan setidaknya 1 meter antara kamu dan orang lain.
              </h6>

            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<style>
.bg-color-cegah {
  background: rgb(238,224,246);
  background: linear-gradient(317deg, rgba(238,224,246,1) 40%, rgba(185,135,246,1) 68%);
}

.header-color {
  color: #455a64;
}

.font-icon {
  font-size: 45px;
  color: #bc5eff;
}
</style>

