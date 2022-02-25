<template>
  <div class="home">
    <card-video
      v-for="video in videos"
      :key="video.id"
      :video="video">
    </card-video>
  </div>
</template>

<script>
import CardVideo from "../components/CardVideo"
import {mapGetters} from "vuex"
export default {
  name: 'Home',
  components: {
    CardVideo
  },
  computed: {
    ...mapGetters({ videos: "getVideos" })
  },
  created() {
    this.$store.dispatch("loadVideos")
  }
}
</script>