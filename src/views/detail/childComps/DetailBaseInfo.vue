<template>
  <div v-if="Object.keys(goods).length !== 0 " class="detail-base-info">
    <div class="title">{{goods.title}}</div>
    <div class="goods-price">
      <span class="new-price">{{goods.price}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span class="discount-desc" :style="{background:goods.discountBgColor}">{{goods.discountDesc}}</span>
    </div>
    <div class="columns">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="services">
      <span v-for="item in goods.services.length-1" class="services-span">
        <img :src="goods.services[item-1].icon"  class="services-image">
        <span>{{goods.services[item-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }

    }
  }
</script>

<style scoped>
  .detail-base-info{
    background: white;
    border-bottom: 4px solid #eee;
  }
  .title{
    padding: 10px 5px;
    font-size: 18px;
  }
  .goods-price{
    position: relative;
  }
  .new-price{
    color: var(--color-high-text);
    padding: 10px 5px;
    font-size: 20px;
    font-weight: bold;
  }
  .old-price{
    font-size: 13px;
    text-decoration: line-through;
  }
  .discount-desc{
    color: white;
    font-size: 13px;
    text-align: start;
    display: inline-block;
    border-radius: 8px;
    padding: 3px;
    position: absolute;
    top: -5px;
  }
  .columns{
    display: flex;
    justify-content: space-between;
    margin: 0 5px;
    padding: 10px 0 5px 0;
    color: rgb(176,175,176);
    font-size: 15px;
    border-bottom: #eeeeee 1px solid;
  }
  .services{
    display: flex;
    justify-content: space-between;
    margin: 0 5px;
    padding: 20px 0;
    font-size: 15px;
  }
  .services-image{
    width: 14px;
    vertical-align: middle;
    margin-top: -5px;
  }
</style>