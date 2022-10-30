<template>
  <Header />
  <div class="container mt-5 bg-white" style="border-radius: 5px">
    <div class="row">
      <div class="h-100 d-flex align-items-center justify-content-center mb-5">
        <div class="text-center mt-5">
          <h2>
            Add Users
            <MDBBtn color="dark" @click="viewUsers()" rounded>View User</MDBBtn>
          </h2>
        </div>
      </div>
      <div class="col-md-8 mx-auto">
        <form>
          <MDBRow class="mb-4">
            <MDBCol>
              <MDBInput
                type="text"
                label="First Name"
                id="form6FirstName"
                wrapperClass="mb-4"
                v-model="form6FirstName"
              />
            </MDBCol>
            <MDBCol>
              <MDBInput
                type="text"
                label="Last Name"
                id="form6LastName"
                wrapperClass="mb-4"
                v-model="form6LastName"
              />
            </MDBCol>
          </MDBRow>

          <!-- Text input -->
          <MDBInput
            type="text"
            label="Company Name"
            id="form6CompanyName"
            v-model="form6CompanyName"
            wrapperClass="mb-4"
          />

          <!-- Text input -->
          <MDBInput
            type="text"
            label="Address"
            id="form6Address"
            v-model="form6Address"
            wrapperClass="mb-4"
          />

          <!-- Email input -->
          <MDBInput
            type="email"
            label="Email"
            id="form6Email"
            v-model="form6Email"
            wrapperClass="mb-4"
          />

          <!-- Number input -->
          <MDBInput
            type="tel"
            label="Phone"
            id="form6Phone"
            v-model="form6Phone"
            wrapperClass="mb-4"
          />

          <!-- Message input -->
          <MDBTextarea
            label="Additional information"
            id="form6Info"
            v-model="form6Info"
            wrapperClass="mb-4"
          />

          <!-- Checkbox -->
          <!-- <MDBCheckbox
            label="Create an account?"
            id="form6CreateCheckbox"
            v-model="form6CreateCheckbox"
            wrapperClass="d-flex justify-content-center mb-4"
          /> -->

          <!-- Submit button -->
          <MDBBtn color="primary" block class="mb-4"> Submit Details </MDBBtn>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { MDBInput, MDBCheckbox, MDBTextarea, MDBBtn } from "mdb-vue-ui-kit";
import { ref } from "vue";
import Header from "../components/Header.vue";

export default {
  components: {
    Header,
    MDBInput,
    MDBCheckbox,
    MDBTextarea,
    MDBBtn,
  },
  setup() {
    const form6FirstName = ref("");
    const form6LastName = ref("");
    const form6CompanyName = ref("");
    const form6Address = ref("");
    const form6Email = ref("");
    const form6Phone = ref("");
    const form6Info = ref("");
    const form6CreateCheckbox = ref(true);

    return {
      form6FirstName,
      form6LastName,
      form6CompanyName,
      form6Address,
      form6Email,
      form6Phone,
      form6Info,
      form6CreateCheckbox,
    };
  },

  methods:{
    viewUsers(){
        this.$router.push('users')
    }
  }
};
</script>