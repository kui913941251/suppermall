<template>
  <div class="bottom-bar">
    <div class="service">
      <i class="service-img"></i>
      <div>客服</div>
    </div>
    <div class="bar-shop">
      <i class="shop-img"></i>
      <div>店铺</div>
    </div>
    <div class="collect">
      <i class="collect-img"></i>
      <div>收藏</div>
    </div>
    <div class="add-cart" @click="addCart">
      加入购物车
    </div>
    <div class="buy">
      购买
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods: {
      addCart() {
        this.$emit("addCart")
      }
    }
  }
</script>

<style scoped>
 .bottom-bar{
   height: 49px;
   display: flex;
   text-align: center;
   box-shadow: 0 -5px 10px 1px rgba(100,100,100,.2);
 }
 .service, .bar-shop , .collect{
   flex: 1;
   font-size: 14px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
 }
 .add-cart , .buy{
   flex: 2;
   line-height: 49px;
   color: white;
 }
 .add-cart{
   background: rgb(255,221,16);
 }
 .buy{
   background: rgb(254,119,154);
 }
 .service-img{
   display: inline-block;
   width: 25px;
   height: 25px;
   background: url("~assets/img/detail/detail_bottom.png") 0px -58px;
   background-size: cover;
   margin-bottom: 2px;
  }
  .shop-img{
    display: inline-block;
    width: 25px;
    height: 25px;
    background: url("~assets/img/detail/detail_bottom.png") 1px -110px;
    background-size: cover;
    margin-bottom: 2px;
  }
  .collect-img{
    display: inline-block;
    width: 25px;
    height: 25px;
    background: url("~assets/img/detail/detail_bottom.png") 2px 3px;
    background-size: cover;
      margin-bottom: 2px;
  }
</style>