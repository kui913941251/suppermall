<template>
  <div class="wrapper" ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll"

  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.scroll,{
        click:true,
        probeType: this.probeType,
        pullUpLoad:true
      })
      this.scroll.on("scroll",position => {
        this.$emit("scroll",position)
      })
      this.scroll.on("pullingUp",() => {
        this.$emit("pullingUp")
      })
    },
    methods: {
      scrollTo(x,y,time) {
        this.scroll.scrollTo(x,y,time)
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>

</style>