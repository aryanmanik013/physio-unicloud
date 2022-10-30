<template>
  <div class="main-div">
    <div class="container">
      <Header />
      <div class="hide-on-mobile">
        <div>
          <div>
            <b-tabs content-class="mt-3" justified>
              <b-tab title="Dashboard" active>
                <div
                  class="container-fluid"
                  style="height: auto; background: #151521"
                >
                  <div class="conatiner-fluid">
                    <Dashboard />
                  </div>
                </div>
              </b-tab>
              <b-tab @click="aboutPage()" title="About Us"> </b-tab>
              <b-tab title="Users" @click="usersPage()"> </b-tab>
              <!-- <b-tab><p>I'm the second tab</p></b-tab> -->
            </b-tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Dashboard from "../components/Dashboard.vue";
import AboutUs from "./AboutView.vue";
import Users from "./Users.vue";
export default {
  name: "HomeView",
  components: {
    Header,
    Dashboard,
    AboutUs,
    Users,
  },
  data() {
    return {};
  },
  methods: {
    aboutPage() {
      this.$router.push("about");
    },
    usersPage() {
      this.$router.push("users");
    },
  },
};
</script>
<style scoped>
.link-color {
  font-size: 12px;
  color: #565674;
}

@media screen and (max-width: 767px) {
  /* .hide-on-mobile {
    display: none;
  } */
}
</style>
