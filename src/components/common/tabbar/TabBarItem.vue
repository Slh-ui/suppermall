<template>
    <div>
        <div class="tab-bar-item" @click="itemClick">
            <div v-if="!isActive"><slot name="item-icon"></slot></div>
            <div v-else><slot name="item-icon-active"></slot></div>
            <div :style="activeStyle"><slot name="item-text"></slot></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TabBarItem',
    props: {
      path: String,
      activeColor: {
        style: String,
        default: 'red'
      }
    },
    data() {
      return {
        // isActive: true
      }
    },
    computed: {
      isActive () {
        return this.$route.path.indexOf(this.path) != -1
      },
      activeStyle () {
        // 判断isActive是否处于活跃状态
        return this.isActive ? {color : this.activeColor} : {}
      }
    },
    methods: {
      itemClick () {
        this.$router.replace(this.path)
      }
    }
}
</script>

<style>
  .tab-bar-item {
      /* flex: 1; */
      margin-left: 40px;
      text-align: center;
      height: 49px;
      font-size: 10px;
      margin-top: 3px;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }
</style>
