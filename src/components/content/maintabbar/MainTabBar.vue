<template>
    <div>
        <tab-bar>
            <tab-bar-item path="/home" activeColor="red">
                <template  v-slot:item-icon>
                    <img src="~assets/img/tabs/home.png" alt="">
                </template>
                <template  v-slot:item-icon-active>
                <img src="~assets/img/tabs/home-active.png" alt="" />
                </template>
                <template  v-slot:item-text>首页</template >
            </tab-bar-item>
            <tab-bar-item path="/category">
                <template  v-slot:item-icon>
                    <img src="~assets/img/tabs/news.png" alt=""/>
                </template>
                <template  v-slot:item-icon-active>
                    <img src="~assets/img/tabs/news-active.png" alt=""/>
                </template>
                <template  v-slot:item-text>分类</template >
            </tab-bar-item>
            <tab-bar-item path="/cart">
                <template  v-slot:item-icon>
                    <img src="~assets/img/tabs/cart.png" alt=""/>
                </template>
                <template  v-slot:item-icon-active>
                    <img src="~assets/img/tabs/cart-active.png" alt=""/>
                </template>
                <template  v-slot:item-text>购物车</template >
            </tab-bar-item>
            <tab-bar-item path="/profile">
                <template  v-slot:item-icon>
                    <img src="~assets/img/tabs/member.png" alt=""/>
                </template>
                <template  v-slot:item-icon-active>
                    <img src="~assets/img/tabs/member-active.png" alt=""/>
                </template>
                <template  v-slot:item-text>我的</template >
            </tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>
import TabBarItem from 'components/common/tabbar/TabBarItem'
import TabBar from 'components/common/tabbar/TabBar'
export default {
    name: 'MainTabBar',
    components: {
        TabBar,
        TabBarItem
    }
}
</script>

<style scoped>

</style>