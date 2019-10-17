<template>
  <div class="swiper">
    <mt-swipe :auto="6000">
      <mt-swipe-item v-for="(cate,index) in categories" :key="index" class="category">
        <a v-for="(type,i) in cate" :key="i" :href="type.url" class="cate">
          <img :src="type.icon"/>
          <p>{{type.name}}</p>
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import {CATEGORIES} from '@/api'
export default {
  name: 'Category',
  data () {
    return {
      categories: []
    }
  },
  created () {
    this.$http({
      url: CATEGORIES
    }).then(res => {
      this.categories = res.data
    })
  }
}
</script>

<style lang="stylus" scoped>
.swiper
  width 10rem
  height 6.2rem
.category
  .cate
    display block
    float left
    width 20%
    text-align center
    padding 20px
    box-sizing border-box
    color #333
    img
      max-width 100%
</style>
