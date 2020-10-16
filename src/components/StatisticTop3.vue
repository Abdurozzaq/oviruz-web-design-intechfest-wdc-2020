<template>
  <div class="bg-color-cegah py-5">
    <b-container>
      <b-row align-v="start" align-h="center" class="mx-0">
        <b-col cols="3">
          <b-img data-aos="zoom-in" src="../assets/profmap.png" fluid alt="Cegah Covid-19" class="pt-2 pb-3 pr-0"></b-img>
        </b-col>
      </b-row>

      <b-row align-v="start" align-h="center" class="mx-0">
        <b-col cols="12">
          <h3 data-aos="zoom-in" class="text-center header-color">Provinsi di Indonesia Dengan Kasus Paling Tinggi?</h3>
        </b-col>
      </b-row>

      <b-row class="mx-0">
        <b-col cols="12" sm="12" md="4" lg="4">
          <b-card data-aos="zoom-in" class="my-3 mx-3 shadow text-center">
            <b-card-text>

              <h1 class="font-weight-bold grey-color-font">1</h1>

              <h5 class="grey-color-font">Jakarta</h5>

              <h6 class="grey-color-font">
                Kasus : 88.174,
                <br>
                Sembuh : 72.540,
                <br>
                Kematian : 1.914
              </h6>

            </b-card-text>
          </b-card>
        </b-col>
        <b-col cols="12" sm="12" md="4" lg="4">
          <b-card data-aos="zoom-in" class="my-3 mx-3 shadow text-center">
            <b-card-text>

              <h1 class="font-weight-bold grey-color-font">2</h1>

              <h5 class="grey-color-font">Jawa Timur</h5>

              <h6 class="grey-color-font">
                Kasus : 47.280,
                <br>
                Sembuh : 40.793,
                <br>
                Kematian : 3.447
              </h6>

            </b-card-text>
          </b-card>
        </b-col>
        <b-col cols="12" sm="12" md="4" lg="4">
          <b-card data-aos="zoom-in" class="my-3 mx-3 shadow text-center">
            <b-card-text>

              <h1 class="font-weight-bold grey-color-font">3</h1>

              <h5 class="grey-color-font">Jawa Barat</h5>

              <h6 class="grey-color-font">
                Kasus : 27.522,
                <br>
                Sembuh : 17.700,
                <br>
                Kematian : 539
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

