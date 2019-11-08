<template>
  <div class="detail-shop">
    <div class="shop-name">
      <img :src="shop.shopLogo" alt="" class="shop-img">
      <span>{{shop.shopName}}</span>
    </div>
    <div class="others">
      <div class="about-goods">
        <div class="sell">
          <div>{{shop.cSells | toFixedTwo}}</div>
          <div class="small-size">总销量</div>
        </div>
        <div class="goods">
          <div>{{shop.cGoods}}</div>
          <div class="small-size">全部宝贝</div>
        </div>
      </div>
      <div class="border-line"></div>
      <div class="describe">
        <div>
          <div v-for="item in shop.score" class="describe-item small-size" >
          <span>{{item.name}}</span>
          <span class="color-green" :class="{becomeColorRed:item.isBetter}">{{item.score}}</span>
          <span class="bg-green color-white" :class="{becomeBgRed:item.isBetter}" >{{item.score>=4.8?"高":"低"}}</span>
          </div>
        </div>
      </div>
    </div>
    <a :href="shop.shopUrl"><div class="into-shop">进店逛逛</div></a>
  </div>
</template>

<script>
  export default {
    name: "DetailShop",
    props: {
      shop: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    filters: {
      toFixedTwo(index) {
        if(index > 10000){
          index = (index/10000).toFixed(2)
          return index + "万"
        }
      }
    }
  }
</script>

<style scoped>
  .detail-shop{
    border-bottom: #eee solid 4px;
  }
  .shop-name {
    display: flex;
    align-items: center;
    margin: 20px 0 20px 10px;
    font-size: 20px;
  }
  .shop-img{
    width: 50px;
    border-radius: 50%;
    border: #eee solid 1px;
    margin-right: 10px;
  }
  .others{
    display: flex;
  }
  .describe{
    flex: 1;
  }
  .border-line{
    display: inline-block;
    border: 1px solid #eee;
    height: 40px;
    margin-top: 20px;
  }
  .about-goods{
    display: flex;
    justify-content: space-around;
    text-align: center;
    flex: 1;
  }
  .color-green{
    color: yellowgreen;
  }
  .bg-green{
    background: yellowgreen;
  }
  .color-white{
    color: white;
  }
  .describe, .sell , .goods{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .describe > div > div:nth-child(2){
    margin: 10px 0;
  }
  .describe-item{
    display: flex;
    justify-content: space-between;
  }
  .describe-item > span:nth-child(2){
    margin: 0 5px;
  }
  .becomeColorRed{
    color: rgb(255,50,50);
  }
  .becomeBgRed{
    background: rgb(255,50,50) ;
  }
  .small-size{
    font-size: 15px;
  }
  .into-shop{
    width: 150px;
    background: rgb(244,244,252);
    padding: 5px 0;
    margin: 20px auto;
    text-align: center ;
  }
</style>