<template>
  <div class="swiper">
    <mt-swipe :auto="10000" :showIndicators="false">
      <mt-swipe-item>
        <img src="/static/img/ad/ad.png"/>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="/static/img/ad/ad2.gif"/>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="/static/img/ad/ad3.jpg"/>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'Ad'
}
</script>

<style lang="stylus" scoped>
.swiper
  width 10rem
  height 3.5rem
  img
    width: 10rem
    height: 3.5rem
</style>
