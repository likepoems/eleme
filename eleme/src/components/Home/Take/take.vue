<template>
  <div>
    <Top></Top>
    <Category></Category>
    <Ad></Ad>
    <Recommend></Recommend>
    <SellerList></SellerList>
  </div>
</template>

<script>
import Top from './Top'
import Ad from './Ad'
import Category from './Category'
import SellerList from './SellerList'
import Recommend from './Recommend'
export default {
  name: 'Take',
  components: {
    Top, Category, Ad, Recommend, SellerList
  }
}
</script>

<style>

</style>
