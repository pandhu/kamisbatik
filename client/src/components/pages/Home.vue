<template>
  <div>
    <v-home-slider></v-home-slider>
    <h2 class="text-center">Mereka Yang Ikut #KamisBatik</h2>
    <v-blog></v-blog>
  </div>
</template>

<script>
import HomeSlider from '@/components/HomeSlider'
import ListPhoto from '@/components/ListPhoto'
import Blog from '@/components/Blog'

export default {
  name: 'home',
  data () {
    return {
      posts: []
    }
  },
  components: {
    'v-home-slider': HomeSlider,
    'v-list-photo': ListPhoto,
    'v-blog': Blog
  },
  methods: {
    // TODO: Create methods that will be sent into Button component
  }
}
</script>
