<template>
  <div class="detail-params" v-if="Object.keys(paramsInfo).length !== 0">
    <table >
      <tr v-for="items in paramsInfo.rule.tables[0]">
        <td v-for="item in items" class="rule-item">{{item}}</td>
      </tr>
    </table>
    <table>
      <tr v-for="items in paramsInfo.info.set">
        <td class="rule-item">{{items.key}}</td>
        <td class="rule-item color-red">{{items.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "DetailParams",
    props: {
      paramsInfo: {
        type: Object
      }
    }
  }
</script>

<style scoped>
  .detail-params{
    border-bottom: 4px solid #eee;
  }
  table{
    text-align: center;
    padding: 0 5px;
    width:100%;
  }
  .rule-item{
    padding: 10px;
    border-bottom: 1px solid #eee ;
  }
  table:last-child{
    border-top: 4px solid #eee;
  }
  .color-red{
    color: var(--color-tint);
  }
</style>