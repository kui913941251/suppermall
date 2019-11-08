<template>
  <div class="goods-list-item" @click="clickItem">
    <img :src="showImage" alt="" @load="imageLoad">
    <div class="goods-info">
      <p class="goods-title">{{goodsItem.title}}</p>
      <span class="price">{{"￥"+goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      showImage() {
        return this.goodsItem.image || this.goodsItem.show.img
      }
    },
    methods: {
      imageLoad() {
        this.$bus.$emit("imgLoadFinish")
      },
      clickItem() {
        this.$router.push("/detail/"+ this.goodsItem.iid)
      }
    }
  }
</script>

<style scoped>
  .goods-list-item{
    position: relative;
    padding-bottom: 40px;
    width: 50%;
  }
  .goods-list-item img{
    width:100%;
    border-radius: 10px;
    padding: 5px;
  }
  .goods-title{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .price{
    color: var(--color-tint);
    margin-right: 20px;
  }
  .goods-info{
    position: absolute;
    bottom: 0px;
    width: 100%;
    text-align: center;
    padding: 0 5px 0;
  }
  .collect{
    position: relative;
  }
  .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 50%;
    transform: translateY(-50%);
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>