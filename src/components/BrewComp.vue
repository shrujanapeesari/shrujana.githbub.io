<template>
  <div class="brew">
    <h1>{{ msg }}</h1>
    <p>
      For more information visit the page. Thank you
    </p>

    <!-- <div class="button">
      <button v-on:click="success">
        <router-link to="/form">Yes</router-link>
      </button>

      <input v-on:click="onClick" type="button" value="No" />
    </div> -->

    <div id="example">
      <button v-on:click="multiple">Click here</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BrewComp",
  props: {
    msg: String
  },

  data() {
    return {
      message: "click here"
    };
  },
  methods: {
    multiple: function() {
      this.first();
      this.second();
    },
    first: function() {
      alert(
        "If you are above 20, please fill the form, which is available on the home page. Thank you"
      );
    },
    second: function() {
      alert(
        "This site is only for 20 years and above. Thank you for visiting us"
      );
    }
  }
};
</script>



<style scoped lang="scss">
.button {
  display: inline-block;
  margin: 0 30px;
  margin-top: 30px;
}

.brew {
  margin-bottom: 70px;
}
</style>