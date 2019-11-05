<template>
  <div class="tab-control">
    <div v-for="(item,index) in title" class="tab-control-item" @click="click(index)">
      <span :class="{active: index == correntIndex}">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      title: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        correntIndex: 0
      }
    },
    methods: {
      click(index) {
        this.correntIndex = index
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
  }
  .tab-control-item{
    flex: 1;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
  }
  .active{
    color: var(--color-high-text);
    border-bottom: 2px var(--color-high-text) solid;
    padding: 5px;
  }
  .tab-control{
    background: #fff;
  }
</style>