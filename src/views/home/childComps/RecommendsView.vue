<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendsView",
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend{
    display: flex;
  }
  .recommend-item{
    flex: 1;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 10px #eee solid;
  }
  .recommend-item img{
    width: 65px;
    height: 65px;
    margin-bottom: 5px;
  }
</style>