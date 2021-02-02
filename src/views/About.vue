<template>
  <div id="app" class="container">
    <h2 class="heading">Breweries</h2>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Brewery_Type</th>
          <th>Street</th>
          <th>City</th>
          <th>State</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="number in breweries" :key="number.one">
          <td>{{ number.id }}</td>
          <td>{{ number.name }}</td>
          <td>{{ number.brewery_type }}</td>
          <td>{{ number.street }}</td>
          <td>{{ number.city }}</td>
          <td>{{ number.state }}</td>
          <td>{{ number.phone }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- </div> -->
</template>

<script>
import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      breweries: null
    };
  },

  mounted() {
    axios
      .get("https://api.openbrewerydb.org/breweries?per_page=50")
      .then(response => (this.breweries = response.data));
  }
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 30px;
}
.heading {
  margin-bottom: 20px;
}
</style>