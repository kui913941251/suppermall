<template>
  <div class="cart-item">
      <div class="cart-line" v-for="item in $store.state.cartList">
        <div class="cart-left">
          <img class="cart-icon" src="~assets/img/cart/tick.svg" alt="">
        </div>
        <div class="cart-center">
          <img class="cart-image" :src="item.image" alt="">
        </div>
        <div class="cart-right">
          <div class="cart-title"><span>{{item.title}}</span></div>
          <div class="cart-desc"><span>{{item.desc}}</span></div>
          <div class="cart-price">
            <span class="price-color" >{{"￥"+item.price}}</span>
            <span>{{"x"+item.count}}</span>
          </div>
        </div>
      </div>

  </div>
</template>

<script>


  export default {
    name: "ShopCartItem",
    components: {

    },
    created() {
      console.log(this.$store.state.cartList)
    }
  }
</script>

<style scoped>
  .cart-icon{
    background-color: yellowgreen;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-top: 36px;
    margin-right: 5px;
  }
  .cart-image{
    height: 100px;
    border-radius: 8px;
  }
  .cart-line{
    padding: 10px 5px;
    display: flex;
    border-bottom: 2px #eee solid;
  }
  .cart-left{

  }
  .cart-right{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
  }
  .cart-title{
    padding: 0 5px;
    margin-bottom: -10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: bold;
  }
  .cart-desc{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 0 5px;
    color: rgb(171,170,171);
  }
  .cart-price{
    padding: 0 5px;
    display: flex;
    justify-content: space-between;
  }
  .price-color{
    color: var(--color-tint);
  }
</style>