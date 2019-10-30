<template>
  <div class="placeList">
    <ul>
      <li v-for="place in places" :key="place.place_id">
        <Place :placeInfo="place" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex"
import Place from "@/components/Place"

export default {
  name: "placeList",
  components: { Place },
  data() {
    return {}; 
  },
  computed: mapState({
    places: state => state.places
  })
};
</script>

<style lang="scss" scoped>
.placeList {
  & > ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
}
</style>

