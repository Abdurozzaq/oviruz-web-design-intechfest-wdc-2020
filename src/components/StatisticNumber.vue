<template>
  <div class="bg-color-number">
    <b-container>
      <b-row class="mx-0" align-h="center" align-v="center">
        <b-col cols="12" sm="12" md="4" lg="4">
          <b-card data-aos="zoom-in" class="mx-3 my-5 roundednya bg-color-positif border-0 shadow card-kanan">
            <b-card-text>
              <h4 class="text-center text-white">Jumlah Positif Covid-19 Nasional</h4>
              <h3 class="text-center text-white font-weight-bold">340.622</h3>
            </b-card-text>
          </b-card>
        </b-col>

        <b-col cols="12" sm="12" md="4" lg="4">
          <b-card data-aos="zoom-in" class="mx-3 my-5 roundednya bg-color-sembuh border-0 shadow card-kanan">
            <b-card-text>
              <h4 class="text-center text-white">Jumlah Sembuh Covid-19 Nasional</h4>
              <h3 class="text-center text-white font-weight-bold">258.519</h3>
            </b-card-text>
          </b-card>
        </b-col>

        <b-col cols="12" sm="12" md="4" lg="4">

          <b-card data-aos="zoom-in" class="mx-3 my-5 roundednya bg-color-dead border-0 shadow card-kanan">
            <b-card-text>
              <h4 class="text-center text-white">Jumlah Kematian Covid-19 Nasional</h4>
              <h3 class="text-center text-white font-weight-bold">258.519</h3>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    
    
  </div>
</template>

<style>
.roundednya {
  border-radius: 25px;
}

.bg-color-positif {
  background: rgb(150,104,230);
  background: linear-gradient(317deg, rgba(198,118,255,1) 21%, rgba(150,104,230,1)61%)
}

.bg-color-sembuh {
  background: rgb(99,237,173);
  background: linear-gradient(132deg, rgba(99,237,173,1) 24%, rgba(164,232,153,1) 78%);
}

.bg-color-dead {
  background: rgb(255,164,131);
  background: linear-gradient(132deg, rgba(255,164,131,1) 24%, rgba(255,197,120,1) 78%);
}

.bg-color-number {
 background: #f6f0ff;
}

.card-kanan {
  height: 100%;
}
</style>