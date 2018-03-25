<template>
  <div id="app">
    <v-top-menu></v-top-menu>
    <v-header></v-header>
    <router-view/>
    <v-footer></v-footer>
  </div>
</template>

<script>
import TopMenu from '@/components/template/TopMenu'
import Header from '@/components/template/Header'
import Footer from '@/components/template/Footer'
export default {
  name: 'App',
  components: {
    'v-top-menu': TopMenu,
    'v-header': Header,
    'v-footer': Footer
    // TODO: Register Button component locally
  },
  methods: {
    // TODO: Create methods that will be sent into Button component
  }
}
</script>

<style>
</style>
