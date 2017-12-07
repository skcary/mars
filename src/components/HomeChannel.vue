<template>
  <wxc-tab-page ref="wxc-tab-page"
                :tab-titles="tabTitles"
                :tab-styles="tabStyles"
                title-type="icon"
                :needSlider="needSlider"
                :is-tab-view="isTabView"
                :tab-page-height="tabPageHeight"
                :spm-c="4307989"
                @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected">
    <list v-for="(v,index) in tabList"
          :key="index"
          class="item-container"
          :style="{ height: (tabPageHeight - tabStyles.height) + 'px' }">
      <cell class="border-cell"></cell>
      <cell v-for="(demo,key) in v"
            class="cell"
            :key="key"
            :accessible="true"
            aria-label="卡片测试｜四川成都出发到九寨沟牟尼沟 温泉3天2晚纯玩跟团旅游,价格219元">
        <wxc-pan-item :ext-id="'1-' + (v) + '-' + (key)"
                      url="https://h5.m.taobao.com/trip/ticket/detail/index.html?scenicId=2675"
                      @wxcPanItemPan="wxcPanItemPan">
          <wxc-item image="https://gw.alicdn.com/i1/2935198750/TB26GMgeOC9MuFjSZFoXXbUzFXa_!!2935198750.jpg"
                    :image-text="tabTitles[index].title"
                    title="卡片测试｜四川成都出发到九寨沟牟尼沟 温泉3天2晚纯玩跟团旅游"
                    :desc="desc"
                    :tags="tags"
                    price="666"
                    price-desc="月售58笔｜999+条评论"></wxc-item>
        </wxc-pan-item>
      </cell>
    </list>
  </wxc-tab-page>
</template>

<script>
const Config = {
  tabTitles: [
    {
      title: "热门跟团",
      icon: "https://gw.alicdn.com/tfs/TB1MWXdSpXXXXcmXXXXXXXXXXXX-72-72.png",
      activeIcon:
        "https://gw.alicdn.com/tfs/TB1kCk2SXXXXXXFXFXXXXXXXXXX-72-72.png"
    },
    {
      title: "云南跟团",
      icon: "https://gw.alicdn.com/tfs/TB1ARoKSXXXXXc9XVXXXXXXXXXX-72-72.png",
      activeIcon:
        "https://gw.alicdn.com/tfs/TB19Z72SXXXXXamXFXXXXXXXXXX-72-72.png"
    },
    {
      title: "四川跟团",
      icon: "https://gw.alicdn.com/tfs/TB1VKMISXXXXXbyaXXXXXXXXXXX-72-72.png",
      activeIcon:
        "https://gw.alicdn.com/tfs/TB1aTgZSXXXXXazXFXXXXXXXXXX-72-72.png"
    },
    {
      title: "海南跟团",
      icon: "https://gw.alicdn.com/tfs/TB1Do3tSXXXXXXMaFXXXXXXXXXX-72-72.png",
      activeIcon:
        "https://gw.alicdn.com/tfs/TB1LiNhSpXXXXaWXXXXXXXXXXXX-72-72.png"
    },
    {
      title: "北京跟团",
      icon: "https://gw.alicdn.com/tfs/TB1jFsLSXXXXXX_aXXXXXXXXXXX-72-72.png",
      activeIcon:
        "https://gw.alicdn.com/tfs/TB1_Kc.SXXXXXa8XpXXXXXXXXXX-72-72.png"
    },
    {
      title: "出境跟团",
      icon: "https://gw.alicdn.com/tfs/TB199sPSXXXXXb4XVXXXXXXXXXX-72-72.png",
      activeIcon:
        "https://gw.alicdn.com/tfs/TB1DR.3SXXXXXc2XpXXXXXXXXXX-72-72.png"
    },
    {
      title: "出境日游",
      icon: "https://gw.alicdn.com/tfs/TB1hedfSpXXXXchXXXXXXXXXXXX-72-72.png",
      activeIcon:
        "https://gw.alicdn.com/tfs/TB1mrXaSpXXXXaqXpXXXXXXXXXX-72-72.png"
    },
    {
      title: "邮轮",
      icon: "https://gw.alicdn.com/tfs/TB1twhkSpXXXXXLXXXXXXXXXXXX-72-72.png",
      activeIcon:
        "https://gw.alicdn.com/tfs/TB1dhlhSpXXXXa8XXXXXXXXXXXX-72-72.png"
    }
  ],
  tabStyles: {
    bgColor: "#FFFFFF",
    titleColor: "#666666",
    activeTitleColor: "#3D3D3D",
    activeBgColor: "#FFFFFF",
    isActiveTitleBold: true,
    iconWidth: 70,
    iconHeight: 70,
    width: 160,
    height: 120,
    fontSize: 24,
    hasActiveBottom: true,
    activeBottomColor: "#FFC900",
    activeBottomHeight: 6,
    activeBottomWidth: 120,
    textPaddingLeft: 10,
    textPaddingRight: 10
  }
};

const dom = weex.requireModule("dom");
import WxcTabPage from "weex-ui/packages/wxc-tab-page";
import WxcPanItem from "weex-ui/packages/wxc-pan-item";
import WxUtils from "weex-ui/packages/utils";
import WxcItem from "./HomeChannelItem.vue";
export default {
  components: { WxcTabPage, WxcPanItem, WxcItem },
  data: () => ({
    tabTitles: Config.tabTitles,
    tabStyles: Config.tabStyles,
    tabList: [],
    needSlider: true,
    demoList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    supportSlide: true,
    isTabView: true,
    tabPageHeight: 1334,
    desc: [
      {
        type: "text",
        value: "特价机票|班期:清明 3/27-4/2等",
        theme: "gray"
      }
    ],
    tags: [
      {
        type: "tag",
        value: "满100减20测试",
        theme: "yellow"
      }
    ]
  }),
  created() {
    this.tabPageHeight = WxUtils.env.getPageHeight();
    this.tabList = [...Array(this.tabTitles.length).keys()].map(i => []);
    Vue.set(this.tabList, 0, this.demoList);
  },
  methods: {
    wxcTabPageCurrentTabSelected(e) {
      const self = this;
      const index = e.page;
      /* 未加载tab模拟数据请求 */
      if (!WxUtils.isNonEmptyArray(self.tabList[index])) {
        setTimeout(() => {
          Vue.set(self.tabList, index, self.demoList);
        }, 100);
      }
    },
    wxcPanItemPan(e) {
      if (WxUtils.env.supportsEBForAndroid()) {
        this.$refs["wxc-tab-page"].bindExp(e.element);
      }
    }
  }
};
</script>

<style scoped>
.item-container {
  width: 750px;
  background-color: #f2f3f4;
}
.border-cell {
  background-color: #f2f3f4;
  width: 750px;
  height: 24px;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: #e0e0e0;
}
.cell {
  background-color: #ffffff;
}
</style>