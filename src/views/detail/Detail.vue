<template>
  <div id="detail">
    <detail-nav-bar class="nav-bar" @clickTitle="clickTitle" :title-index="titleIndex"></detail-nav-bar>
    <scroll class="scroll" ref="scroll" @scroll="detailScroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop :shop="shop"></detail-shop>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-params :params-info="paramsInfo" ref="detailParams"></detail-params>
      <detail-evaluate :rate="rate" ref="evaluate"></detail-evaluate>
      <goods-list :goods="recommends" ref="goodsList"></goods-list>
    </scroll>
    <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
    <back-top v-show="isDispalyNone" @click.native="backClick"></back-top>
  </div>
</template>

<script>
  import DetailNavBar from "views/detail/childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo"
  import DetailShop from "./childComps/DetailShop";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo"
  import DetailParams from "./childComps/DetailParams";
  import DetailEvaluate from "./childComps/DetailEvaluate";
  import DetailBottomBar from "./childComps/DetailBottomBar";

  import Scroll from "components/common/scroll/Scroll"
  /*import BackTop from "components/common/backtop/BackTop";*/
  import GoodsList from "components/content/goods/GoodsList";
  import {BackTopMixin} from 'common/mixin.js'

  import {getDetail,Goods,Shop,GoodsParams,getRecommend} from "network/detail"

  export default {
    name: "Detail",
    components: {
      DetailBottomBar,
      DetailParams,
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShop,
      DetailGoodsInfo,
      DetailEvaluate,
      GoodsList,
      Scroll,
      /*BackTop*/
    },
    mixins: [ BackTopMixin ],
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramsInfo: {},
        /*isDispalyNone: false,*/
        titleSet: 0,
        titleIndex: 0,
        rate: {},
        recommends: []
      }
    },
    created() {
      this.iid = this.$route.params.iid
      console.log(this.iid)
      getDetail(this.iid).then(res => {
        console.log(res)
        const data = res.result
        this.topImages = data.itemInfo.topImages
        this.goods = new Goods(data.itemInfo, data.columns , data.shopInfo)
        this.shop = new Shop(data.shopInfo)
        this.detailInfo = data.detailInfo
        this.paramsInfo = new GoodsParams(data.itemParams)
        this.rate = data.rate
        console.log(this.rate)
      })
      getRecommend().then(res => {
        this.recommends = res.data.list
      })
    },
    methods: {
      clickTitle(index) {
        switch (index) {
          case 0:
            this.titleSet = 0
            this.$refs.scroll.scrollTo(0,this.titleSet , 500)
            break
          case 1:
            this.titleSet = -this.$refs.detailParams.$el.offsetTop
            this.$refs.scroll.scrollTo(0,this.titleSet , 500)
            break
          case 2:
            this.titleSet = -this.$refs.evaluate.$el.offsetTop
            this.$refs.scroll.scrollTo(0,this.titleSet , 500)
            break
          case 3:
            this.titleSet = -this.$refs.goodsList.$el.offsetTop
            this.$refs.scroll.scrollTo(0,this.titleSet , 500)
            break
        }
      },
      imageLoad() {
        //console.log("图片加载完成收到")
        this.$refs.scroll.refresh()
      },
      /*backClick() {
        console.log("backClick")
        this.$refs.scroll.scrollTo(0,0,500)
      },*/
      detailScroll(position) {
        this.titleSet =  position.y
        this.isDispalyNone = -(position.y) > 1000
        if(-(this.titleSet) < this.$refs.detailParams.$el.offsetTop){
          this.titleIndex = 0
        }else if(-(this.titleSet) >= this.$refs.detailParams.$el.offsetTop && -(this.titleSet) < this.$refs.evaluate.$el.offsetTop ){
          this.titleIndex = 1
        }else if(-(this.titleSet) >= this.$refs.evaluate.$el.offsetTop && -(this.titleSet) < this.$refs.goodsList.$el.offsetTop ){
          this.titleIndex = 2
        }else if(-(this.titleSet) >= this.$refs.goodsList.$el.offsetTop ){
          this.titleIndex = 3
        }
      },
      addCart() {
        const product = {}
        product.image = this.topImages[0]
        product.desc = this.goods.desc
        product.price = this.goods.lowNowPrice
        product.title = this.goods.title
        product.iid = this.iid
        this.$store.commit("addCart",product)
      }
    }
  }
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 11;
    background: #fff;
    height: 100vh;
  }
  .scroll{
    margin-top: 44px;
    height:calc(100% - 93px);
    overflow: hidden;
  }
</style>