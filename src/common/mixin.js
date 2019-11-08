import BackTop from "components/common/backtop/BackTop";

export const BackTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isDispalyNone: false
    }
  },
  methods: {
    backClick() {
      console.log("backClick")
      this.$refs.scroll.scrollTo(0,0,500)
    }
  }
}