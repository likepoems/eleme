<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus" scoped>
.child-view {
  position: absolute;
  width: 100%;
  transition: all .8s cubic-bezier(.55, 0, .1, 1);
}
 .slide-left-enter,.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(500px, 0);
  transform: translate(500px, 0);
}
.slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-500px, 0);
    transform: translate(-500px, 0);
}
</style>
