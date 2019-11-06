<template>
    <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

      <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3" @pullingUp="pullingUp">
        <home-swiper :banners="banners"></home-swiper>
        <recommends-view :recommends="recommends"></recommends-view>
        <feature-view></feature-view>
        <tab-control class="tab-control" :title="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
        <goods-list :goods="goods[tabControlType].list"></goods-list>
      </scroll>
      <back-top @click.native="backTop" v-show="isShow"></back-top>
    </div>

</template>

<script>
  import HomeSwiper from "./childComps/HomeSwiper"
  import RecommendsView from "./childComps/RecommendsView"
  import FeatureView from "./childComps/FeatureView"
  import GoodsList from "components/content/goods/GoodsList"

  import TabControl from "components/content/tabControl/TabControl"
  import NavBar from "components/common/navbar/Navbar"
  import Scroll from "components/common/scroll/Scroll"
  import BackTop from "components/common/backtop/BackTop"

  import {getHomeMultidata,getHomeGoods} from "network/home"

  export default {
    name: "Home",
    components: {
      HomeSwiper,
      NavBar,
      RecommendsView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          pop: {page: 0, list: []},
          new: {page: 0, list: []},
          sell: {page: 0, list: []}
        },
        tabControlType: "pop",
        isShow:false
      }
    },
    created() {
      this.getHomeMultidata()
      this.getHomeGoods("pop")
      this.getHomeGoods("new")
      this.getHomeGoods("sell")
    },
    methods: {
      //监听方法
      tabClick(index) {
        switch (index) {
          case 0:
            this.tabControlType = "pop"
            break
          case 1:
            this.tabControlType = "new"
            break
          case 2:
            this.tabControlType = "sell"
            break
        }
      },
      backTop() {
        this.$refs.scroll.scrollTo(0,0,500)
      },
      contentScroll(position) {
        //console.log(position)
        this.isShow = -(position.y) > 1000
      },
      pullingUp() {
        console.log("主页上拉完成");
        this.getHomeGoods(this.tabControlType)
      },

      //网络请求方法
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },

      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res => {
          console.log(res)
          const list = res.data.list
          this.goods[type].list.push(...list)
          this.goods[type].page++
          this.$refs.scroll.scroll.finishPullUp()
        })
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background-color:var(--color-tint);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  /*.tab-control{
    position: sticky;
    top: 44px;
    z-index: 9;
  }*/
  /*.content{
    height: calc(100% - 93px);
    overflow: hidden;
  }*/
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
  }
</style>
