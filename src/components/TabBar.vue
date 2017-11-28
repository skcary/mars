<template>
    <div class="wrap">
        <div class="bar-item" @click="tabTo('home')">
            <text class="bar-ic iconfont" :class="curKey=='home'?'bar-active':''">&#xe660;</text>
            <text class="bar-txt" :class="curKey=='home'?'bar-active':''">首页</text>
        </div>
        <div class="bar-item" @click="tabTo('topic')">
            <text class="bar-ic iconfont" :class="curKey=='topic'?'bar-active':''">&#xe744;</text>
            <text class="bar-txt" :class="curKey=='topic'?'bar-active':''">专题</text>
        </div>
        <div class="bar-item active" @click="tabTo('class')">
            <text class="bar-ic iconfont" :class="curKey=='class'?'bar-active':''">&#xe605;</text>
            <text class="bar-txt" :class="curKey=='class'?'bar-active':''">分类</text>
        </div>
        <div class="bar-item" @click="tabTo('my')">
            <text class="bar-ic iconfont" :class="curKey=='my'?'bar-active':''">&#xe639;</text>
            <text class="bar-txt" :class="curKey=='my'?'bar-active':''">我的</text>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      curKey: "home"
    };
  },
  mounted() {},
  methods: {
    tabTo(k) {
      if (this.curKey == k) return;
      this.curKey = k;
      this.$emit("tabTo", {
        status: "tabTo",
        data: {
          key: k
        }
      });
    }
  }
};
</script>

<style scoped>
.iconfont {
  font-family: iconfont;
}
.wrap {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 90px;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-around;
  border-top-width: 1px;
  border-top-color: #d9d9d9;
  background-color: #fafafa;
}
.bar-item {
  flex: 1;
  height: 90px;
}
.bar-txt,
.bar-ic {
  color: #666;
  text-align: center;
}
.bar-active {
  color: #3ea5fc;
}
.bar-ic {
  padding-top: 12px;
  font-size: 38px;
}
.bar-txt {
  font-size: 22px;
  padding-top: 2px;
}
</style>