<template>
  <div id="app">
      <app-table-components />
  </div>
    
</template>

<script>

const AppTableComponents = () => import('./components/Table-Components/index.vue')
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    AppTableComponents
  }
}
</script>

<style lang="sass">
  @import "~normalize.css"
  @import "./assets/fonts/source-sans-pro.css"

  // #app
  //   width: 100%

</style>
