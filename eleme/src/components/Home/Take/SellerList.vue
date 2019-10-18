<template>
  <div class="box">
    <div id="shoplist-title" class="shoplist-title">推荐商家</div>
    <ul class="seller-list">
      <li class="list-item" v-for="(seller) in seller" :key="seller.id">
        <div class="logo">
          <img :src="'/'+seller.logo" />
        </div>
        <div class="detail">
          <h3 class="name">{{seller.name}}</h3>
          <div class="rating">
            <Star :value="seller.rating"></Star>
            <span class="monthsell">月售{{seller.orderNo}}单</span>
          </div>
          <div class="fee">
            <span>&yen;{{seller.sendFee}}起步</span>
            <span>配送费&yen;{{seller.deliveryFee}}</span>
            <span>&yen;{{seller.avgFee}}/人</span>
          </div>
          <div class="activity">
            <span class="bao"></span>
            <span class="gift"></span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {SELLER} from '@/api'
import Star from '@/base/Star'
export default {
  name: 'SellerList',
  data () {
    return {
      seller: []
    }
  },
  created () {
    this.$http({
      url: SELLER
    }).then(res => {
      this.seller = res.data
    })
  },
  components: {
    Star
  }
}
</script>
<style lang="less" scoped>
.box {
  margin-top: 0.133333rem;
  .seller-list {
    background-color: #fff;
    position: relative;
    min-height: 300px;
    .list-item {
      display: flex;
      padding: 0.4rem 0;
      font-size: 0.293333rem;
      border-bottom: 0.013333rem solid #eee;
      a {
        display: flex;
        color: #333;
      }
      .logo {
        flex: none;
        width: 1.733333rem;
        height: 1.733333rem;
        padding: 0 0.266667rem;
        img {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 0.053333rem;
          border: 0.133333vw solid rgba(0, 0, 0, 0.08);
        }
      }
      .detail {
        flex: 1;
        padding-left: 0.266667rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .monthsell{
          display: block;
          height: 20px;
          float: left;
          margin-left: .26rem
        }
        .h3 {
          font-size: 0.4rem;
        }
        div {
          color: #666;
        }
      }
    }
  }
  .shoplist-title {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 0.96rem;
    font-size: 0.4rem;
    color: #000;
    &::before,
    &::after {
      display: block;
      content: "";
      width: 0.53333rem;
      height: 0.026667rem;
      background-color: #999;
    }
    &::before {
      margin-right: 0.346667rem;
    }
    &::after {
      margin-left: 0.346667rem;
    }
  }
}
</style>
