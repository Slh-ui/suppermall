<template>
    <div id="home">
        <nav-bar class="home-nav">
            <template v-slot:center>购物街</template>
        </nav-bar>
        <swiper :banner = "banner"/>
        <recommend-view :recommend="recommend"/>
        <feature/>
        <tab-control :title="['流行', '新款', '精选']" class="tab-control"/>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
            <li>5</li>
        </ul>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Swiper from 'components/common/swiper/Swiper'
import TabControl from 'components/content/tabControl/TabControl'

import RecommendView from './RecommendView'
import Feature from './childComps/Feature'

import {getHomeMultidata, getHomeGoods} from 'network/home'
export default {
    name: 'Home',
    components: {
        NavBar,
        Swiper,
        TabControl,
        RecommendView,
        Feature
    },
    data() {
        return {
            banner: [],
            recommend: [],
            goods: {
                'pop': {page: 0, list: []},
                'new': {page: 0, list: []},
                'sell': {page: 0, list: []},
            }
        }
    },
    created() {
        // 请求数据
        this.getHomeMultidata();
        // 请求商品数据
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
    },
    methods: {
        liClick (index) {
            this.count = index
        },
        getHomeMultidata() {
            getHomeMultidata().then(res => {
                this.banner = res.data.banner.list
                this.recommend = res.data.recommend.list
            })
        },
        getHomeGoods(type) {
            const page = this.goods[type].page +1;
            getHomeGoods(type, page).then(res => {
                console.log(res)
                // this.goods[type].list.push(...res.data.list)
                // this.goods[type].page += 1
            })
        }
    }
}
</script>

<style scoped>
    #home{
        padding-top: 44px;
    }
    .home-nav{
        background: rgb(8, 9, 82);
        color: white;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 2;
    }
    /* 停留效果 */
    .tab-control{
        position: sticky;
        top: 44px;
        background: white;
    }
</style>