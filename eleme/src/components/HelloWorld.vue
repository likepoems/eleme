<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Star :max="max" :value="data"></Star>
  </div>
</template>

<script>
import Star from '@/base/Star'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'HelloWorld',
      data: 5,
      max: 10
    }
  },
  components: {
    Star
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
