<template>
  <div id="app">
    <div class="container">
      <div class="title">
        Table UI
      </div>
      <div class="border">
        <app-table-components />
      </div>
    </div>
  </div>
    
</template>

<script>

const AppTableComponents = () => import('./components/Table/index.vue')
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

  #app
    width: 100%
    display: flex

  .container
    min-width: 1366px
    min-height: 600px
    margin: 0 auto
    padding-top: 32px
    padding-left: 113px
    padding-right: 113px
  
  .title
    font-size: 32px
    font-family: 'Source Sans Pro SemiBold', sans-serif;
  
  .border
    height: 1px
    background-color: #EDEDED
    margin-top: 16px

</style>
