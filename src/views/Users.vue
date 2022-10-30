  <template>
  <Header />
  <div class="container mt-5 bg-white" style="border-radius: 5px">
    <div class="row">
      <div class="col-md-12 mt-4">
        <MDBBtn color="info" class="back-mobile" @click="goBack" rounded
          >Go Back</MDBBtn
        >
      </div>
      <div class="h-100 d-flex align-items-center justify-content-center mb-5">
        <div class="text-center mt-5">
          <h2>
            View Users
            <MDBBtn color="dark" @click="addUsers()" rounded>Add User</MDBBtn>
          </h2>
        </div>
      </div>
      <div class="table-responsive">
        <b-table small :fields="fields" :items="items" responsive="md">
          <!-- A virtual column -->
          <template #cell(index)="data">
            {{ data.index + 1 }}
          </template>

          <!-- A custom formatted column -->
          <template #cell(name)="data">
            <b class="text-info">{{ data.value.last.toUpperCase() }}</b
            >, <b>{{ data.value.first }}</b>
          </template>

          <!-- A virtual composite column -->
          <template #cell(nameage)="data">
            {{ data.item.name.first }} is {{ data.item.age }} years old
          </template>

          <!-- Optional default data cell scoped slot -->
          <template #cell()="data">
            <i>{{ data.value }}</i>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
import { MDBBtn } from "mdb-vue-ui-kit";
import Header from "../components/Header.vue";
export default {
  components: {
    Header,
    MDBBtn,
  },
  data() {
    return {
      fields: [
        // A virtual column that doesn't exist in items
        "index",
        // A column that needs custom formatting
        { key: "name", label: "Full Name" },
        // A regular column
        "age",
        // A regular column
        "sex",
        // A virtual column made up from two fields
        { key: "nameage", label: "First name and age" },
      ],
      items: [
        { name: { first: "John", last: "Doe" }, sex: "Male", age: 42 },
        { name: { first: "John", last: "Doe" }, sex: "Male", age: 42 },
        { name: { first: "John", last: "Doe" }, sex: "Male", age: 42 },
        { name: { first: "John", last: "Doe" }, sex: "Male", age: 42 },
        { name: { first: "John", last: "Doe" }, sex: "Male", age: 42 },
        { name: { first: "John", last: "Doe" }, sex: "Male", age: 42 },
        { name: { first: "John", last: "Doe" }, sex: "Male", age: 42 },
        { name: { first: "John", last: "Doe" }, sex: "Male", age: 42 },
        { name: { first: "Jane", last: "Doe" }, sex: "Female", age: 36 },
        { name: { first: "Rubin", last: "Kincade" }, sex: "Male", age: 73 },
        {
          name: { first: "Shirley", last: "Partridge" },
          sex: "Female",
          age: 62,
        },
      ],
    };
  },

  methods: {
    addUsers() {
      this.$router.push("/adduser");
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
@media screen and (max-device-width: 480px) and (orientation: portrait) {
  .back-mobile {
    margin: 0px auto;
    display: flex;
  }
}
</style>