<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Star :max="max" :value="data"></Star>
    <Geo></Geo>
  </div>
</template>

<script>
import Star from '@/base/Star'
import Geo from '@/base/Geo'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'HelloWorld',
      data: 5,
      max: 6
    }
  },
  components: {
    Star, Geo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
    text-align: center
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
