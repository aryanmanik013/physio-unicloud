<template>
  <Header />
  <div class="container mt-5 bg-white" style="border-radius: 5px">
    <div class="row">
      <div class="col-md-2 mt-4">
        <MDBBtn color="info" class="back-mobile" @click="goBack" rounded>Go Back</MDBBtn>
      </div>
      <div class="h-100 d-flex align-items-center justify-content-center mb-5">
        <div class="text-center mt-5">
          <h2>About Us</h2>
          <p>
            Architecto nobis eos vel nam quidem vitae temporibus voluptates qui
            hic deserunt iusto omnis nam voluptas asperiores sequi tenetur
            dolores incidunt enim voluptatem magnam cumque fuga.
          </p>
        </div>
      </div>

      <div class="col-md-4 m-5 col-sm-12 d-block mx-auto mx-md-0">
        <b-img
          class="d-block mx-auto mx-md-0 img-fluid mobile-view-image"
          :src="logo"
          alt="Image 1"
        ></b-img>
      </div>
      <div class="col-md-6 m-5 mobile-view-1">
        <h2>
          Neque officiis dolore maiores et exercitationem quae est seda lidera
          pat claero
        </h2>
        <i>
          Consequuntur inventore voluptates consequatur aut vel et. Eos
          doloribus expedita. Sapiente atque consequatur minima nihil quae
          aspernatur quo suscipit voluptatem.
        </i>

        <b-tabs content-class="mt-3" justified>
          <b-tab title="Corrupti" active>
            <div v-for="list in 3" :key="list">
              <br />
              <b>
                <i
                  class="fa fa-check"
                  style="color: #0ea2bd"
                  aria-hidden="true"
                ></i>
                Repudiandae rerum velit modi et officia quasi facilis
              </b>
              <p>
                Laborum omnis voluptates voluptas qui sit aliquam blanditiis.
                Sapiente minima commodi dolorum non eveniet magni quaerat nemo
                et.
              </p>
            </div>
          </b-tab>
          <b-tab title="Saepe fuga">
            <div v-for="list2 in 3" :key="list2">
              <br />
              <b>
                <i
                  class="fa fa-check"
                  style="color: #0ea2bd"
                  aria-hidden="true"
                ></i>
                Repudiandae rerum velit modi et officia quasi facilis
              </b>
              <p>
                Laborum omnis voluptates voluptas qui sit aliquam blanditiis.
                Sapiente minima commodi dolorum non eveniet magni quaerat nemo
                et.
              </p>
            </div>
          </b-tab>
          <b-tab title="Voluptates">
            <div v-for="list3 in 3" :key="list3">
              <br />
              <b>
                <i
                  class="fa fa-check"
                  style="color: #0ea2bd"
                  aria-hidden="true"
                ></i>
                Repudiandae rerum velit modi et officia quasi facilis
              </b>
              <p>
                Laborum omnis voluptates voluptas qui sit aliquam blanditiis.
                Sapiente minima commodi dolorum non eveniet magni quaerat nemo
                et.
              </p>
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import colImage from "../assets/about.jpg";
import { MDBBtn } from "mdb-vue-ui-kit";

import Header from "../components/Header.vue";
export default {
  components: {
    Header,
    MDBBtn,
  },
  data() {
    return {
      logo: colImage,
    };
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
@media screen and (max-device-width: 480px) and (orientation: portrait) {
  .mobile-view-image {
    height: auto !important;
    width: auto !important;
  }
  .mobile-view-1 {
    margin: 0px !important;
  }
  .back-mobile {
    margin: 0px auto;
    display: flex;
  }
}

</style>