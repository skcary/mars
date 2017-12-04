<template>
  <slider
    class="slider"
    :interval="3000"
    :auto-play="true">
    <div
      v-for="(item, index) in list"
      :key="index"
      :href="item.url">
      <image class="image" resize="cover" :src="item.pic"></image>
    </div>
    <indicator v-if="list.length > 1" class="indicator"></indicator>
  </slider>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
.slider {
  height: 150px;
}
.image {
  width: 750px;
  height: 150px;
}
.indicator {
  position: absolute;
  z-index: 1;
  bottom: 12px;
  width: 750px;
  height: 12px;
  item-color: #fff;
  item-selected-color: #ffc900;
  item-size: 12px;
  justify-content: center;
}
</style>
