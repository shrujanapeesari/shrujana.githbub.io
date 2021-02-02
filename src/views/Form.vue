 <template>
  <div>
    <b-form v-on:click="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Brewery:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.brewery"
          :options="brewery"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-checkbox value="me">Check me out</b-form-checkbox>

      <b-button type="submit" variant="primary">Submit</b-button>
      <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

 <script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        brewery: null,
        checked: []
      },
      brewery: [
        { text: "Select One", value: null },
        "Alabama",
        "Alaska",
        "Arizona",
        "California"
      ],
      show: true
    };
  },

  message: "",

  methods: {
    onSubmit: function() {}
  }
  // onReset: function() {
  //   event();
  // }
};
</script>

<style scoped lang="scss">
button {
  display: inline-block;
  margin: 0 30px;
  margin-top: 30px;
}
</style>