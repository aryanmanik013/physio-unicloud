<template>
  <div class="main-div">
    <div class="container">
      <Header />
      <div class="">
        <div class="" style="height: auto; background: #151521">
          <div>
            <div>
              <b-navbar toggleable="lg" type="dark" class="text-white">
                <b-navbar-brand href="#" style="visibility: hidden"
                  >NavBar</b-navbar-brand
                >

                <b-navbar-toggle target="nav-collapse1"></b-navbar-toggle>

                <b-collapse id="nav-collapse1" is-nav>
                  <b-row style="width: 100%; text-align: center">
                    <b-col>
                      <nav>
                        <li class="hov">
                          Dashboard
                          <ul class="main hide-on-mobile">
                            <li>
                              <div class="container-fluid">
                                <div class="row">
                                  <div class="col-md-4">
                                    <MDBListGroup light>
                                      <MDBListGroupItem
                                        tag="button"
                                        noBorder
                                        spacing
                                        action
                                        active
                                        class="text-white"
                                      >
                                        <div class="ms-3">
                                          <p class="fw-bold mb-0">Default</p>
                                          <p class="text-muted mb-0">
                                            Reports & statistics
                                          </p>
                                        </div>
                                      </MDBListGroupItem>
                                      <MDBListGroupItem
                                        tag="button"
                                        noBorder
                                        spacing
                                        action
                                        active
                                        class="text-white"
                                      >
                                        <div class="ms-3">
                                          <p class="fw-bold mb-0">Projects</p>
                                          <p class="text-muted mb-0">
                                            Campaings & conversions
                                          </p>
                                        </div>
                                      </MDBListGroupItem>
                                      <MDBListGroupItem
                                        tag="button"
                                        noBorder
                                        spacing
                                        action
                                        active
                                        class="text-white"
                                      >
                                        <div class="ms-3">
                                          <p class="fw-bold mb-0">Marketing</p>
                                          <p class="text-muted mb-0">
                                            Campaings & conversions
                                          </p>
                                        </div>
                                      </MDBListGroupItem>
                                      <MDBListGroupItem
                                        tag="button"
                                        noBorder
                                        spacing
                                        action
                                        active
                                        class="text-white"
                                      >
                                        <div class="ms-3">
                                          <p class="fw-bold mb-0">POS System</p>
                                          <p class="text-muted mb-0">
                                            Campaings & conversions
                                          </p>
                                        </div>
                                      </MDBListGroupItem>
                                    </MDBListGroup>
                                  </div>
                                  <div class="col-md-4">
                                    <MDBListGroup light>
                                      <MDBListGroupItem
                                        tag="button"
                                        noBorder
                                        spacing
                                        action
                                        active
                                        class="text-white"
                                      >
                                        <div class="ms-3">
                                          <p class="fw-bold mb-0">eCommerce</p>
                                          <p class="text-muted mb-0">
                                            Sales reports
                                          </p>
                                        </div>
                                      </MDBListGroupItem>
                                      <MDBListGroupItem
                                        tag="button"
                                        noBorder
                                        spacing
                                        action
                                        active
                                        class="text-white"
                                      >
                                        <div class="ms-3">
                                          <p class="fw-bold mb-0">POS System</p>
                                          <p class="text-muted mb-0">
                                            Campaings & conversions
                                          </p>
                                        </div>
                                      </MDBListGroupItem>
                                      <MDBListGroupItem
                                        tag="button"
                                        noBorder
                                        spacing
                                        action
                                        active
                                        class="text-white"
                                      >
                                        <div class="ms-3">
                                          <p class="fw-bold mb-0">
                                            Online Courses
                                          </p>
                                          <p class="text-muted mb-0">
                                            Student progress
                                          </p>
                                        </div>
                                      </MDBListGroupItem>
                                      <MDBListGroupItem
                                        tag="button"
                                        noBorder
                                        spacing
                                        action
                                        active
                                        class="text-white"
                                      >
                                        <div class="ms-3">
                                          <p class="fw-bold mb-0">Bidding</p>
                                          <p class="text-muted mb-0">
                                            Campaings & conversions
                                          </p>
                                        </div>
                                      </MDBListGroupItem>
                                    </MDBListGroup>
                                  </div>
                                  <div
                                    class="col-md-4 third-div"
                                    style="background: #2b2b40"
                                  >
                                    <MDBListGroup class="mt-3" light>
                                      <h6>More Dashboard</h6>
                                      <div>Logistics</div>
                                      <div>Website Analytics</div>
                                      <div>Finance Performance</div>
                                      <div>Store Analytics</div>
                                      <div>Social</div>
                                      <div>Crypto</div>
                                      <div>School</div>
                                      <div>Podcast</div>
                                    </MDBListGroup>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </nav></b-col
                    >
                    <b-col>
                      <li style="line-height: 40px">
                        <nav @click="aboutPage" style="">About Us</nav>
                      </li>
                    </b-col>
                    <b-col>
                      <li style="line-height: 40px">
                        <nav @click="usersPage">Users</nav>
                      </li>
                    </b-col>
                  </b-row>
                </b-collapse>
              </b-navbar>
            </div>
          </div>
          <div class="conatiner-fluid">
            <Dashboard />
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
import { MDBListGroup, MDBListGroupItem } from "mdb-vue-ui-kit";

export default {
  name: "HomeView",
  components: {
    Header,
    Dashboard,
    AboutUs,
    Users,
    MDBListGroup,
    MDBListGroupItem,
  },
  data() {
    return {
      dropdownContent: false,
    };
  },
  methods: {
    showDropdown() {
      this.dropdownContent = true;
    },
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
.dropdownContent {
  display: none;
}
@media screen and (max-width: 767px) {
  .hide-on-mobile {
    display: none;
  }
}
@media screen and (max-width: 767px) {
  .main li {
    list-style: none;
    background: #1e1e2d;
    width: auto;
    -webkit-transition: all 0.5s ease-in-out;
  }
  .hov {
    width: auto;
  }
}
/deep/.list-group {
  background: #1e1e2d;
}
/deep/.list-group-item.active {
  background: #1e1e2d;
  border-color: #1e1e2d;
}
/deep/.list-group-item {
  background: #1e1e2d;
}
nav {
}

ul,
li {
  margin: 0;
  padding: 0;
}
.main {
  position: absolute;
  z-index: 1;
}
.main li {
  list-style: none;
  background: #1e1e2d;
  width: 850px;
  padding: 0 5px;
  -webkit-transition: all 0.5s ease-in-out;
}

.main li:nth-child(odd) {
  -webkit-transform-origin: top;
  -webkit-transform: perspective(350px) rotateX(-90deg);
}

.main li:nth-child(even) {
  margin-top: -65px;
  -webkit-transform-origin: bottom;
  -webkit-transform: perspective(350px) rotateX(90deg);
}

.main {
  -webkit-transition: all 0.5s ease-in-out;
  -webkit-transform-origin: 50% 0%;
  -webkit-transform: perspective(350px) rotateX(-90deg);
}

.hov:hover .main {
  -webkit-transform-origin: top;
  -webkit-transform: perspective(350px) rotateX(0deg);
}

.hov:hover li:nth-child(odd) {
  -webkit-transform-origin: top;
  -webkit-transform: perspective(350px) rotateX(0deg);
  margin-top: 0;
}

.hov:hover li:nth-child(even) {
  -webkit-transform-origin: bottom;
  -webkit-transform: perspective(350px) rotateX(0deg);
  margin-top: 0;
}

.main li:first-child {
  margin-top: 0;
}

.hov {
  position: relative;
  height: 40px;
  color: white;
  line-height: 40px;
  list-style: none;
  z-index: 2;
}
.list-group {
  text-align: left;
}

.list-group p {
  font-size: 13px;
}
.third-div .list-group {
  background: #2b2b40;
}
li {
  list-style: none;
}
li nav {
  cursor: pointer;
}
</style>
