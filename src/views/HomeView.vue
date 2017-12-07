<template>
  <div class="wrapper">
    <!-- 头部 -->
    <home-header></home-header>
    <list style="flex:1">
      <home-refresh @loadingDown="loadingDown"></home-refresh>
      <!-- 轮播 -->
      <cell>
        <div class="space"></div>
        <home-banner :list="homeBannerList"></home-banner>
      </cell>
      <!-- tag -->
      <cell>
        <home-tag :list="homeTagList"></home-tag>
      </cell>
      <!-- 广告位 -->
      <cell v-if="adBannerList && adBannerList.length">
        <div class="space"></div>
        <ads-banner :list="adBannerList"></ads-banner>
      </cell>
      <cell>
        
      </cell>
      <loading class="loading" @loading="onloading" :display="showLoading">
          <text class="indicator">...</text>
      </loading>
    </list>
  </div>
</template>

<script>
import data from "../data";
import HomeHeader from "../components/HomeHeader.vue";
import HomeRefresh from "../components/HomeRefresh.vue";
import HomeBanner from "../components/HomeBanner.vue";
import HomeTag from "../components/HomeTag.vue";
import AdsBanner from "../components/AdsBanner.vue";
export default {
  components: { HomeHeader, HomeRefresh, HomeBanner, HomeTag, AdsBanner },
  data() {
    return {
      bannerList: null,
      showLoading: "hide"
    };
  },
  created() {
    this.homeBannerList = data.hb;
    this.homeTagList = data.ht;
    this.adBannerList = data.b;
  },
  mounted() {},
  methods: {
    loadingDown() {},
    onloading() {
      this.showLoading = "show";
      setTimeout(() => {
        this.showLoading = "hide";
      }, 600);
    }
  }
};
</script>

<style scoped>
.wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.space {
  height: 24px;
}
</style>
