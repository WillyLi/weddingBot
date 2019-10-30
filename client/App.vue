<template>
  <div id="app">
    <PlaceList />
  </div>
</template>

<script>
import PlaceList from "@/components/PlaceList";
import axios from "axios";
import vuex from "vuex";

export default {
  name: "App",
  components: { PlaceList },
  data: () => {
    return {};
  },
  beforeMount() {
    //  Request nearby places data from google place api
    let urlParams = new URLSearchParams(decodeURI(window.location.search));
    let location = urlParams.get("location").trim();
    let type = urlParams.get("types").trim();
    console.log(process.env.googleKey);
    let googleKey = process.env.googleKey;
    let uri =
      "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json";
    this.$store.commit("setLocation", location);
    axios
      .get(uri, {
        params: { location, rankby: "distance", types: type, key: googleKey }
      })
      .then(res => {
        this.$store.commit("setPlaces", res);
        if (process.env.NODE_ENV == "development") {
          console.log(res);
        }
      })
      .catch(error => {
        if (process.env.NODE_ENV == "development") {
          console.log(error);
        }
      });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
