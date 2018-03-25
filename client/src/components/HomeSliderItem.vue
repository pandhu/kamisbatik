<template>
<!-- Single Slide -->
  <div class="welcome-single-slide">
      <!-- Post Thumb -->
      <img v-if="content.image" :src="content.image" alt="">
      <!-- Overlay Text -->
      <div class="project_title">
          <div class="post-date-commnents d-flex">
          </div>
          <a href="#">
              <h5>{{content.title}}</h5>
          </a>
      </div>
  </div>
</template>
<script>
export default {
  props: ['content'],
  name: 'HomeSlider',
  data () {
    return {
    }
  },
  methods: {
    // TODO: Create methods that will be sent into Button component
  },
  mounted: function () {
  }
}
</script>
