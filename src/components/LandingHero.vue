<template>
  <div class="container-hero">
    <b-img class="d-none d-sm-none d-md-block" src="../assets/Desktop.png" fluid alt="Hero Covid19" max-width="100vw" max-height="100vh">
    </b-img>

    <b-img class="d-xl-none d-lg-none d-md-none" src="../assets/Mobile.png" fluid alt="Hero Covid19" max-width="100vw" max-height="100vh">
    </b-img>

    <div class="svg-border-waves text-white">
      <b-img src="../assets/whiteWave.svg" style="margin-top: -40px;"/>
    </div>
 
    <div class="textnya d-none d-sm-none d-md-block">
      <b-row align-v="center" align-h="center">
        <b-col cols="12" cols-md="4" cols-xl="2" class="d-sm-none d-none d-md-block">

        </b-col>

        <b-col cols="12" cols-md="8" cols-xl="10">
          <h2 class="text-color-nya robotofont" data-aos="zoom-in">Selamat Datang di Oviruz</h2>
          <h4 class="text-color-nya robotofont" data-aos="zoom-in">Situs Informasi Tentang Covid-19 di Indonesia</h4>
        </b-col>
      </b-row>
    </div>

    <div class="textnya-mobile d-xl-none d-lg-none d-md-none">
      <b-row align-v="center" align-h="center">
        <b-col cols="12" cols-md="4" cols-xl="2" class="d-none d-sm-none d-md-block">

        </b-col>

        <b-col cols="12" cols-md="8" cols-xl="10">
          <h2 class="text-color-nya robotofont">Selamat Datang <br> di Oviruz</h2>
          <h4 class="text-color-nya robotofont">Berita dan Info Covid-19</h4>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<style>
.container-hero {
  position: relative;
  z-index: -1;
}

.textnya {
  z-index: 1;
  position: absolute;
  top: 25vh;
  right: 6vw;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
  text-align: right;
}

.textnya-mobile {
  z-index: 1;
  position: absolute;
  top: 25vh;
  right: 2vw;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
  text-align: right;
}

.text-color-nya {
    color: #851de0;
}

.svg-border-waves .b-img {
  height: 3rem;
  width: 100%;
}
</style>



