<template>
  <div class="place">
    <a :href="googleMapDeepLink">
      <div class="place_photo" :style="{'background-image':'url('+photoURI+')'}"></div>
    </a>
    {{placeInfo.name}}
  </div>
</template>

<script>
const googleKey = process.env.googleKey

export default {
  name: "place",
  components: {},
  props: ["placeInfo"],
  data() {
    return {};
  },
  computed: {
    photoURI() {
      if (this.placeInfo.photos) {
        return (
          "https://maps.googleapis.com/maps/api/place/photo?maxwidth=600&photoreference=" +
          this.placeInfo.photos[0].photo_reference +
          "&key=" +
          googleKey
        );
      } else {
        return process.env.imagePlaceholder;
      }
    },
    googleMapDeepLink() {
      return (
        "comgooglemaps://?q=" +
        this.placeInfo.name +
        "&center=" +
        this.$store.state.location +
        "&views=traffic&zoom=15"
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.place {
  &_photo {
    width: 100%;
    height: 200px;
    background-size: cover;
  }
}
</style>
