<template>
  <div>
    <navbar class="nav-bar">
      <div slot="left" @click="clickBack">
        <img src="~assets/img/common/back.svg" alt="" class="backicon">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in title"
             class="title-item"
             :class="{active:index == currentIndex}"
             @click="clickItem(index)"
        >{{item}}</div>
      </div>
    </navbar>
  </div>
</template>

<script>
  import Navbar from "components/common/navbar/Navbar";

  export default {
    name: "DetailNavBar",
    props: {
      titleIndex: {
        type: Number
      }
    },
    data() {
      return {
        title: ["商品", "参数" , "评论" , "推荐"],
        currentIndex: 0
      }
    },
    components: {
      Navbar
    },
    methods: {
      clickItem(index) {
        this.currentIndex = index
        this.$emit("clickTitle",index)
      },
      clickBack() {
        this.$router.back()
      }
    },
    watch: {
      titleIndex() {
        this.currentIndex = this.titleIndex
      }
    }
  }
</script>

<style scoped>
  .title{
    display: flex;
    font-size: 14px;
  }
  .title-item{
    flex: 1;
  }
  .active{
    color: var(--color-high-text);
  }
  .backicon{
    margin-top: 10px;
  }
  .nav-bar{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
    background: white;
  }
</style>