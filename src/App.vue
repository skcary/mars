<template>
  <div @androidback="back" class="wrapper">
    <router-view style="flex:1"></router-view>
    <tab-bar @tabTo="onTabTo"></tab-bar>
  </div>
</template>

<script>
import util from "./utils";
import TabBar from "./components/TabBar.vue";

util.initIconFont();

export default {
  components: { TabBar },
  created() {
    const navigationBar = weex.requireModule("navigationBar");
    if (navigationBar && navigationBar.setTitle) {
      const NOOP = () => {};
      navigationBar.setTitle(
        {
          title: "Mars APP"
        },
        NOOP,
        NOOP
      );
    }
  },
  methods: {
    back() {
      this.$router.back();
    },
    onTabTo(r) {
      let k = r.data.key || "";
      this.$router && this.$router.push("/" + k);
    }
  }
};
</script>

<style scoped>
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f2f3f4;
}
</style>
