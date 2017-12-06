<template>
  <div class="header">
    <div class="top">
      <text class="left">上海</text>
      <text class="right iconfont">&#xe689;</text>
    </div>
    <wxc-searchbar ref="wxc-searchbar"
      @wxcSearchbarCancelClicked="wxcSearchbarCancelClicked"
      @wxcSearchbarInputReturned="wxcSearchbarInputReturned"
      @wxcSearchbarInputOnInput="wxcSearchbarInputOnInput"
      @wxcSearchbarCloseClicked="wxcSearchbarCloseClicked"
      @wxcSearchbarInputOnFocus="wxcSearchbarInputOnFocus"
      @wxcSearchbarInputOnBlur="wxcSearchbarInputOnBlur">
    </wxc-searchbar>
  </div>
</template>

<script>
const modal = weex.requireModule('modal');
import WxcSearchbar from "weex-ui/packages/wxc-searchbar";
export default {
  components: { WxcSearchbar },
  data() {
    return {
      inputValue: ''
    };
  },
  methods: {
    wxcSearchbarInputOnFocus() {
      // modal.toast({ message: "onfocus", duration: 1 });
    },
    wxcSearchbarInputOnBlur() {
      // modal.toast({ message: "onbulr", duration: 1 });
    },
    wxcSearchbarInputReturned() {
    },
    wxcSearchbarCloseClicked() {
      // modal.toast({ message: "close.click", duration: 1 });
    },
    wxcSearchbarInputOnInput(e) {
      // this.value = e.value;
    },
    wxcSearchbarCancelClicked() {
      // modal.toast({ message: "cancel.click", duration: 1 });
    },
    wxcSearchbarInputDisabledClicked() {
      // modal.toast({ message: "input.onclick", duration: 1 });
    },
    wxcSearchbarDepChooseClicked() {
      // modal.toast({ message: "dep.choose.click", duration: 1 });
    }
  }
};
</script>

<style scoped>
.iconfont {
  font-family: iconfont;
}
.header {
  height: 180px;
  width: 750px;
  z-index: 101;
  background-color: #3ea5fc;
}
.top {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height:80px;
}
.left{
  padding-left:28px;
  color: #fff;
}
.right{
  padding-right:28px;
  color: #fff;
}
.search {
  position: relative;
  height: 60px;
  font-size: 26px;
  padding-left: 28px;
  padding-right: 28px;
  background-color: #ededed;
  border-radius: 8px;
}
</style>
