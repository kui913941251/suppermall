<template>
  <div class="detail-goods-info" >
    <div v-for="item in detailInfo.detailImage">
      <div>{{item.key}}</div>
      <div v-for="imageUrl in item.list">
        <img :src="imageUrl" alt="" class="goods-image" @load="imageLoad">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props: {
      detailInfo: {
        type: Object
      }
    },
    methods: {
      imageLoad() {
        //console.log("图片加载完成发出")
        this.$emit("imageLoad")
      }
    }
  }
</script>

<style scoped>
  .goods-image{
    max-width: 100%;
  }
  .detail-goods-info{
    border-bottom: 4px solid #eee;
    padding-bottom: 20px;
  }
</style>