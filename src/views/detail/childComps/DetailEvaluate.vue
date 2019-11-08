<template>
  <div class="detail-evaluate" v-if="Object.keys(rate).length !== 0">
    <div class="user-evaluate">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="user-info" v-for="item in rate.list">
      <div>
        <img :src="item.user.avatar" alt="" class="user-image">
        <span class="user-name">{{item.user.uname}}</span>
      </div>
      <div class="user-content">
        {{item.content}}
      </div>
      <div class="goods-info">
        <span>{{item.created | FormateDate}}</span>
        <span>{{item.style}}</span>
      </div>
      <div class="biz-reply">
        {{item.explain }}
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from "components/common/formatdate/index.js"

  export default {
    name: "DetailEvaluate",
    props: {
      rate: {
        type: Object
      }
    },
    created() {
      console.log(this.rate)
    },
    filters: {
      FormateDate(time) {
        time = time * 1000
        let date = new Date(time)
        return  formatDate(date , "yyyy-MM-dd")
      }
    }
  }
</script>

<style scoped>
  .detail-evaluate{
    padding: 0 10px;
  }
  .user-evaluate{
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #eee;
  }
  .user-info > div:first-child{
    display: flex;
    align-items: center;
    padding: 20px 10px;
  }
  .user-image{
    width: 50px;
    border-radius: 50%;
  }
  .user-name{
    margin-left: 20px;
  }
  .user-content{
    padding: 0 20px;
  }
  .goods-info{
    padding: 0 20px;
    margin-top: 10px;
    color: rgb(176,175,177);
  }
  .goods-info > span:first-child{
    margin-right: 10px;
  }
  .biz-reply{
    padding: 0 20px;
    margin-top: 10px;
  }
</style>