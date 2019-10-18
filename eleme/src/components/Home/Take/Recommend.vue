<template>
  <div id="app" class="cl">
    <div class="title">
      <p class="p1">品质优选</p>
      <p class="p2">更多</p>
    </div>
    <ul class="list">
      <li class="list_con fl">
        <img src="static/img/categories/dapai.png" />
        <p class="name">叫个饭外卖</p>
        <p class="jx">大牌精选</p>
      </li>
      <li class="list_con fl">
        <img src="static/img/categories/difangcai.png" />
        <p class="name">德克士自助餐</p>
        <p class="jx">大牌精选</p>
      </li>
      <li class="list_con fl">
        <img src="static/img/categories/guoshu.png" />
        <p class="name">京东包外卖</p>
        <p class="jx">大牌精选</p>
      </li>
      <li class="list_con fl">
        <img src="static/img/categories/wucan.png" />
        <p class="name">大师兄烧烤</p>
        <p class="jx">大牌精选</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="less">
  .title{
    width: 100%;
    height: .6rem;
    line-height: .6rem;
    clear: both;
    p{
      padding: 0;
      margin: 0
    }
    .p1{
      float: left;
      font-size: .4rem;
      color: gold;
      font-weight: 500;
      margin-left: .2rem
    }
    .p2{
      float: right;
      font-size: .3rem;
      margin-right: .2rem
    }
  }
  .list{
    width: 100%;
    height: auto;
    margin: 0;
     .list_con{
            list-style: none;
            padding: 0 5%;
        img{
          width: 1.5rem;
          height: 1.5rem;
          text-align: center;
          vertical-align: middle
        }
        .name{
          width: 1.5rem;
          margin-top: 0;
          overflow: hidden;
          white-space: nowrap;
          text-overflow:ellipsis;
        }
        .jx{
           color: blue;
           font-size: .25rem;
           text-align: center;
           padding: .1rem .15rem;
           border: 1px solid blue;
         }
      }
  }

</style>
