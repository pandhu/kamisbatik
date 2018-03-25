<template>
<!-- ****** Welcome Post Area Start ****** -->
    <section class="welcome-post-sliders owl-carousel">
        <v-home-slider-item v-for="(content, index) in contents" :key="index" :content="content"></v-home-slider-item>
    </section>
    <!-- ****** Welcome Area End ****** -->
</template>
<script>
import Vue from 'vue'
import HomeSliderItem from '@/components/HomeSliderItem'

var $ = window.$ = window.jQuery = require('jquery')
require('owl.carousel/dist/assets/owl.carousel.css')
require('owl.carousel')

export default {
  name: 'HomeSlider',
  components: {
    'v-home-slider-item': HomeSliderItem
  },
  data () {
    return {
      contents: [
        {
          image: '/static/img/bg-img/slide-5.jpg',
          title: 'Motif Batik Mega Mendung (Cirebon)'
        },
        {
          image: '/static/img/bg-img/slide-8.jpg',
          title: 'Motif Batik Tujuh Rupa (Pekalongan)'
        },
        {
          image: '/static/img/bg-img/slide-9.jpg',
          title: 'Motif Kawung (Jawa Tengah)'
        },
        {
          image: '/static/img/bg-img/slide-10.jpg',
          title: 'Motif Parang (Pulau Jawa)'
        },
        {
          image: '/static/img/bg-img/slide-11.jpg',
          title: 'Motif Pring Sedapur (Magetan)'
        }
      ]
    }
  },
  methods: {
    // TODO: Create methods that will be sent into Button component
    installOwlCarousel: function () {
      $('.owl-carousel').owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        autoplay: 3000,
        autoplaySpeed: 3000,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          600: {
            items: 3,
            nav: false
          },
          1000: {
            items: 4,
            nav: true,
            loop: false,
            margin: 20
          }
        }
      })
    }
  },
  mounted: function () {
    Vue.nextTick(function () {
      this.installOwlCarousel()
    }.bind(this))
  }
}
</script>
