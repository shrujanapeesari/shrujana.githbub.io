<template>
  <div class="Brew">
    <img alt="image" src="../assets/image.jpg" />
    <BrewComp msg="Breweries across the world" />
  </div>
</template>

<script>
// @ is an alias to /src
import BrewComp from "@/components/BrewComp.vue";

export default {
  name: "Brew",
  components: {
    BrewComp
  }
};
</script>

