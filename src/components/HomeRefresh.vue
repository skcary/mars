<template>
  <refresh class="u-refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
    <image class="loading-bg" resize="contain" src="http://doc.zwwill.com/yanxuan/imgs/yxbox-bg.png?v5"></image>
    <div class="l-txt-box">
      <text ref="lTxt1" class="l-txt l-txt-1">天</text>
      <text ref="lTxt2" class="l-txt l-txt-2">空</text>
      <text ref="lTxt3" class="l-txt l-txt-3">飘</text>
      <text ref="lTxt4" class="l-txt l-txt-4">来</text>
      <text ref="lTxt5" class="l-txt l-txt-5">三</text>
      <text ref="lTxt6" class="l-txt l-txt-6">个</text>
      <text ref="lTxt7" class="l-txt l-txt-7">字</text>
      <text ref="lTxt8" class="l-txt l-txt-8">喜</text>
      <text ref="lTxt9" class="l-txt l-txt-9">刷</text>
      <text ref="lTxt10" class="l-txt l-txt-10">刷</text>
    </div>
  </refresh>
</template>
<script>
var animation = weex.requireModule("animation");
var modal = weex.requireModule("modal");
export default {
  props: [],
  data() {
    return {
      refreshing: false,
      loadingAR: [
        { ref: "lTxt1", p: [-87, -75], delay: 0 },
        { ref: "lTxt2", p: [-57, -81], delay: 50 },
        { ref: "lTxt3", p: [-25, -88], delay: 100 },
        { ref: "lTxt4", p: [2, -90], delay: 150 },
        { ref: "lTxt5", p: [29, -88], delay: 200 },
        { ref: "lTxt6", p: [61, -81], delay: 250 },
        { ref: "lTxt7", p: [91, -75], delay: 300 },
        { ref: "lTxt8", p: [-25, -49], delay: 350 },
        { ref: "lTxt9", p: [0, -49], delay: 400 },
        { ref: "lTxt10", p: [25, -49], delay: 450 }
      ]
    };
  },
  methods: {
    loadingAni() {
      for (var i = 0; i < this.loadingAR.length; i++) {
        this.shake(
          this.$refs[this.loadingAR[i].ref],
          this.loadingAR[i].p[0],
          this.loadingAR[i].p[1],
          3,
          1,
          200,
          this.loadingAR[i].delay
        );
      }
    },
    loadingAniDown() {
      for (var i = 0; i < this.loadingAR.length; i++) {
        this.shake(this.$refs[this.loadingAR[i].ref], 0, 0, 0, 0, 200);
      }
      this.$emit("loadingDown", {
        status: "loadingDown"
      });
    },
    shake(_ref, _x, _y, _k, _d, _duration, _delay) {
      animation.transition(
        _ref,
        {
          styles: {
            transform: "translate(" + (_x - 0) + "px," + (_y - _k * _d) + "px)"
          },
          duration: _duration | 500, //ms
          timingFunction: "ease-out",
          delay: _delay | 0 //ms
        },
        function() {
          this.refreshing && this.shake(_ref, _x, _y, _k, -1 * _d);
        }.bind(this)
      );
    },
    onrefresh(event) {
      //        console.log('is refreshing')
      modal.toast({ message: "refresh", duration: 1 });

      this.loadingAni();
      this.refreshing = true;
      setTimeout(() => {
        this.refreshing = false;
        this.loadingAniDown();
      }, 1300);
    },
    onpullingdown(event) {}
  }
};
</script>
<style scoped>
.u-refresh {
  height: 170px;
  width: 750px;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
}
.loading-bg {
  position: absolute;
  left: 250px;
  margin-top: 40px;
  width: 250px;
  height: 120px;
}
.l-txt-box {
  height: 106px;
  width: 200px;
  overflow: hidden;
}
.l-txt {
  height: 30px;
  width: 30px;
  font-size: 25px;
  position: absolute;
  top: 105px;
  left: 87px;
  color: #666;
}
</style>