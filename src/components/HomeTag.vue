<template>
  <div class="wrapper">
    <div v-for="(v,index) in list"
      :key="index"
      class="item">
      <image class="image" resize="cover" :src="v.pic"></image>
      <text class="text">{{v.tt}}</text>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.wrapper{
  height:260px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

}
.item{
  width: 187.5px;
  height: 130px;
  padding-top:22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.image{
  width: 90px;
  height:90px;
}
.text{
  color: #666;
  font-size:24px;
}
</style>
