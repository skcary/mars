<template>
  <div class="wrapper">
    <wxc-ep-slider :slider-id="autoSliderId"
      :card-length='list.length'
      ref="wxc-ep-slider"
      :card-s="cardSize"
      :auto-play="false"
      :select-index="2"
      :interval="3000"
      @wxcEpSliderCurrentIndexSelected="wxcEpSliderCurrentIndexSelected">
      <wxc-pan-item v-for="(v,index) in list"
        :key="index"
        :ext-id="index"
        class="slider"
        @wxcPanItemPan="wxcPanItemPan"
        @wxcPanItemClick="wxcPanItemClick"
        :slot="`card${index}_${autoSliderId}`"
        :accessible="true"
        :aria-label="`第${index + 1}个`">
        <image class="image" resize="cover" :src="v.pic"></image>
      </wxc-pan-item>
    </wxc-ep-slider>
  </div>
</template>

<script>
// import { WxcEpSlider, WxcPanItem, Utils } from "weex-ui";
import WxcEpSlider from "weex-ui/packages/wxc-ep-slider";
import WxcPanItem from "weex-ui/packages/wxc-pan-item";
import WxUtils from "weex-ui/packages/utils";
export default {
  components: { WxcEpSlider, WxcPanItem },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      sliderId: 1,
      autoSliderId: 2,
      cardSize: {
        width: 400,
        height: 300,
        spacing: 0,
        scale: 0.8
      }
    };
  },
  methods: {
    wxcEpSliderCurrentIndexSelected(e) {
      // const index = e.currentIndex;
      // console.log(index);
    },
    onClick() {
      // 手动切换到第2张
      // this.$refs["wxc-ep-slider"].manualSetPage(1);
    },
    wxcPanItemPan(e) {
      // Android点击滑动冲突
      if (WxUtils.env.supportsEBForAndroid()) {
        this.$refs["wxc-ep-slider"].clearAutoPlay();
        this.$refs["wxc-ep-slider"].bindExp(e.element);
      }
    },
    wxcPanItemClick(e) {
      // modal.toast({
      //   message: e.extId,
      //   duration: 1
      // });
    }
  }
};
</script>

<style scoped>
.wrapper {
  width: 750px;
  height: 300px;
}
.slider {
  width: 400px;
  height: 300px;
  background-color: #c3413d;
  align-items: center;
  justify-content: center;
}
.image {
  width: 400px;
  height: 300px;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
