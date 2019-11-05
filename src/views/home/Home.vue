<template>
    <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <home-swiper :banners="banners"></home-swiper>
      <recommends-view :recommends="recommends"></recommends-view>
      <feature-view></feature-view>
      <tab-control class="tab-control" :title="['流行','新款','精选']"></tab-control>
      <goods-list :goods="goods['pop'].list"></goods-list>
    </div>
</template>

<script>
  import HomeSwiper from "./childComps/HomeSwiper"
  import RecommendsView from "./childComps/RecommendsView"
  import FeatureView from "./childComps/FeatureView"
  import GoodsList from "components/content/goods/GoodsList";

  import TabControl from "components/content/tabControl/TabControl";
  import NavBar from "components/common/navbar/Navbar"

  import {getHomeMultidata,getHomeGoods} from "network/home"

  export default {
    name: "Home",
    components: {
      HomeSwiper,
      NavBar,
      RecommendsView,
      FeatureView,
      TabControl,
      GoodsList
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          pop: {page: 0, list: []},
          new: {page: 0, list: []},
          sell: {page: 0, list: []}
        }
      }
    },
    created() {
      this.getHomeMultidata()
      this.getHomeGoods("pop")
      this.getHomeGoods("new")
      this.getHomeGoods("sell")
    },
    methods: {
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },

      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res => {
          const list = res.data.list
          this.goods[type].list.push(...list)
          this.goods[type].page++
        })
      }
    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
    margin-bottom: 600px;
  }
  .home-nav{
    background-color:var(--color-tint);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
  }
  .tab-control{
    position: sticky;
    top: 44px;
  }
</style>
