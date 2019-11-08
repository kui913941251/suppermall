<template>
    <div class="shop-cart">
      <navbar class="color-pink">
        <div slot="center" class="shopping-cart">购物车</div>
      </navbar>
      <div class="scroll-height">
        <scroll class="scroll">
          <shop-cart-item></shop-cart-item>
        </scroll>
      </div>

    </div>
</template>

<script>
  import Navbar from "components/common/navbar/Navbar";
  import ShopCartItem from "./childComps/ShopCartItem"
  import Scroll from "components/common/scroll/Scroll";

    export default {
        name: "Shopcart",
      components: {
        Navbar,
        ShopCartItem,
        Scroll
      },
      data() {
          return {
            cartList: []
          }
      },
      created() {

      }
    }
</script>

<style scoped>
  .color-pink{
    background-color: var(--color-tint);
  }
  .shopping-cart{
    color: white;
  }
  .scroll-height{
    margin-top: 44px;
    height: 100vh;
  }
  .scroll{
    height: calc(100% - 93px);
    overflow: hidden ;
  }
</style>
