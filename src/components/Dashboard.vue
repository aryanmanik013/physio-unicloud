<template>
  <div class="row">
    <MDBNavbar
      expand="md"
      style="background: #1e1e2d !important"
      light
      bg="light"
      container
      class="header-hide"
    >
      <MDBNavbarBrand href="#" class="text-white">View User </MDBNavbarBrand>
      <MDBNavbarToggler target="#navbarText"></MDBNavbarToggler>
      <MDBNavbarNav collapse="navbarText">
        <!-- <MDBNavbarItem href="#"> Home </MDBNavbarItem> -->
        <MDBNavbarItem @click="aboutPage()" style="margin-right: 8px"
          >About Us</MDBNavbarItem
        >
        <MDBNavbarItem @click="usersPage()">Users</MDBNavbarItem>
        <template v-slot:contentRight>
          <span class="navbar-text"> Navbar text with an inline element </span>
        </template>
      </MDBNavbarNav>
    </MDBNavbar>

    <div class="col-md-4 text-white mt-2">
      <MDBCard style="background: #1e1e2d">
        <MDBCardImg
          top
          src="https://mdbootstrap.com/img/new/standard/city/062.webp"
          style="
            width: 100px;
            margin: 0px auto;
            margin-top: 10%;
            border: 50px;
            border-radius: 50px;
            height: 100px;
          "
        />
        <MDBCardBody>
          <MDBCardTitle class="text-center"
            >Sukhdeep Singh
            <br />
            <MDBBadge color="primary" class="mt-2">Admin</MDBBadge>
          </MDBCardTitle>
          <h5></h5>
          <div class="row text-center mt-2">
            <b class="text-center mb-2">Assigned Tickets</b>
            <b-container class="bv-example-row">
              <b-row>
                <b-col v-for="item in items" :key="item">
                  <div class="col-styling">
                    <div class="total">
                      <b></b>
                    </div>
                    <div class="solved">
                      <b></b>
                    </div>
                    <div class="open">
                      <b></b>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </b-container>
          </div>

          <MDBAccordion
            v-model="activeItem"
            class="mt-3"
            style="background: #1e1e2d"
          >
            <MDBAccordionItem headerTitle="Details" collapseId="collapseOne">
              <MDBListGroup light small>
                <MDBListGroupItem class="noBorder">
                  <b>Account ID</b>
                  <p class="text-muted">ID-45453423</p>
                </MDBListGroupItem>
                <MDBListGroupItem class="noBorder">
                  <b>Email</b>
                  <p class="text-muted">info@keenthemes.com</p>
                </MDBListGroupItem>
                <MDBListGroupItem class="noBorder">
                  <b>Address</b>
                  <p class="text-muted">
                    101 Collin Street, Melbourne 3000 VIC Australia
                  </p>
                </MDBListGroupItem>
                <MDBListGroupItem class="noBorder">
                  <b>Language</b>
                  <p class="text-muted">English</p>
                </MDBListGroupItem>
                <MDBListGroupItem class="noBorder">
                  <b>Last Login</b>
                  <p class="text-muted">22 Sep 2022, 9:23 pm</p>
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBAccordionItem>
          </MDBAccordion>
        </MDBCardBody>
      </MDBCard>
    </div>
    <div class="col-md-8 col-sm-12">
      <!-- <div class="row"> -->
      <b-tabs content-class="mt-3" justified>
        <b-tab title="Overview" active>
          <MDBContainer fluid class="text-white" style="background: #1e1e2d">
            <h5>User's Schedule</h5>
            <p class="sub-heading">2 upcoming meetings</p>
            <v-calendar is-expanded sm />

            <MDBRow class="g-2">
              <MDBCol col="12">
                <div class="p-3 mb-3">
                  <div v-for="data in datas" :key="data">
                    <div style="font-size: 12px" class="mobile-size-date">
                      12:00 - 13:00 PM
                      <div class="mr-auto">
                        <MDBBtn style="float: right" color="dark">View</MDBBtn>
                      </div>
                    </div>
                    <div class="hoverMe mobile-size">Sales Pitch Proposal</div>
                    <div style="font-size: 13px" class="mobile-size-title">
                      Lead by
                      <span style="color: #009ef7">Sean Bean</span>
                    </div>
                  </div>
                </div>
              </MDBCol>
              <MDBCol col="12">
                <MDBRow>
                  <MDBCol col="6">
                    <h5>User's Tasks</h5>
                    <p class="sub-heading">Total 25 tasks in backlog</p>
                  </MDBCol>
                  <MDBCol col="6">
                    <b-button
                      v-b-modal.modalPopover
                      style="float: right"
                      variant="outline-primary"
                      >Add Task</b-button
                    >
                  </MDBCol>
                </MDBRow>
                <b-modal
                  id="modalPopover"
                  hide-footer
                  title="Add a Task"
                  ok-only
                >
                  <div>
                    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                      <b-form-group
                        id="input-group-1"
                        label="Task Name:"
                        label-for="input-1"
                      >
                        <b-form-input
                          id="input-1"
                          v-model="form.email"
                          type="text"
                          placeholder="Task Name"
                          required
                        ></b-form-input>
                      </b-form-group>
                      <b-form-group
                        id="input-group-1"
                        label="Task Due Date :"
                        label-for="input-1"
                      >
                        <b-form-input
                          id="input-1"
                          v-model="form.email"
                          type="date"
                          required
                        ></b-form-input>
                      </b-form-group>
                      <b-form-group
                        id="input-group-1"
                        label="Task Description:"
                        label-for="input-1"
                      >
                        <b-form-textarea
                          id="textarea"
                          v-model="text"
                          placeholder="Enter something..."
                          rows="3"
                          max-rows="6"
                        ></b-form-textarea>
                      </b-form-group>
                      <div class="text-center">
                        <button type="button" class="btn btn-primary">
                          Submit
                        </button>
                        <button type="button" class="btn btn-danger">
                          Discard
                        </button>
                      </div>
                    </b-form>
                  </div>
                </b-modal>
                <MDBListGroup light>
                  <MDBListGroupItem
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <div class="fw-bold">Create FureStibe branding logo</div>
                      <div class="text-muted">Due in 1 day Karina Clark</div>
                    </div>
                    <MDBBadge
                      v-b-modal.modal-2
                      class="badge-success rounded-pill"
                      >Status</MDBBadge
                    >
                  </MDBListGroupItem>
                  <MDBListGroupItem
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <div class="fw-bold">Create FureStibe branding logo</div>
                      <div class="text-muted">Due in 1 day Karina Clark</div>
                    </div>
                    <MDBBadge
                      v-b-modal.modal-2
                      class="badge-success rounded-pill"
                      >Status</MDBBadge
                    >
                  </MDBListGroupItem>
                  <MDBListGroupItem
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <div class="fw-bold">Create FureStibe branding logo</div>
                      <div class="text-muted">Due in 1 day Karina Clark</div>
                    </div>
                    <MDBBadge
                      v-b-modal.modal-2
                      class="badge-success rounded-pill"
                      >Status</MDBBadge
                    >
                  </MDBListGroupItem>
                </MDBListGroup>

                <b-modal id="modal-2" hide-footer title="BootstrapVue">
                  <p class="my-4">Hello from modal!</p>
                </b-modal>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </b-tab>
        <b-tab title="Security">
          <h1>Coming Soon</h1>
        </b-tab>
        <b-tab title="Events & Logs">
          <h1>Coming Soon</h1>
        </b-tab>
      </b-tabs>

      <!-- </div> -->
    </div>

    <div class="col-md-8 col-sm-12"></div>
  </div>
</template>

<script>
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBCardImg,
  MDBCardGroup,
  MDBBadge,
  MDBAccordion,
  MDBAccordionItem,
  MDBListGroup,
  MDBListGroupItem,
  MDBTabs,
  MDBTabNav,
  MDBTabContent,
  MDBTabItem,
  MDBTabPane,
  MDBContainer,
  MDBCol,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBTable,
  MDBBtn,
  MDBRow,
} from "mdb-vue-ui-kit";

export default {
  components: {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCardText,
    MDBCardLink,
    MDBCardImg,
    MDBCardGroup,
    MDBBadge,
    MDBCol,
    MDBRow,
    MDBAccordion,
    MDBAccordionItem,
    MDBListGroup,
    MDBTable,
    MDBBtn,
    MDBBadge,
    MDBListGroupItem,
    MDBTabs,
    MDBTabNav,
    MDBTabContent,
    MDBTabItem,
    MDBTabPane,
    MDBContainer,
    MDBBtn,
  },

  data() {
    return {
      value: "",
      items: 3,
      datas: 5,
      fields: ["first_name", "last_name", "show_details"],
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
      items: [
        {
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald",
        },
        { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
        {
          age: 89,
          first_name: "Geneva",
          last_name: "Wilson",
          _showDetails: true,
        },
      ],
    };
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
.col-styling {
  width: 70px;
  border: 1px solid;
  height: 70px;
  border-radius: 6px;
}
.noBorder {
  border: inherit;
  background: #1e1e2d;
  color: white;
}
.sub-heading {
  color: #565674;
  font-size: 13px;
}
.hoverMe:hover {
  color: #009ef7;
  cursor: pointer;
}
/deep/.nav-item {
  color: white;
}
/deep/.accordion-item {
  background: #1e1e2d;
}

/deep/.accordion-button {
  background: #1e1e2d;
  color: white;
}
/deep/.nav-link {
  color: white;
  cursor: pointer;
}
@media screen and (max-width: 767px) {
  .header-hide {
    display: none;
  }

  .mobile-size {
    font-size: 12px;
  }
  .mobile-size-date {
    font-size: 10px;
  }
  .mobile-size-title {
    font-size: 10px;
  }
  .fw-bold {
    font-size: 12px;
  }
  .text-muted {
    font-size: 10px;
  }
  /* .hide-on-mobile{
    display: none;
  } */
}
</style>