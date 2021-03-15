<template>
    <div id="home">
        <nav-bar class="home-nav">
            <template v-slot:center>购物街</template>
        </nav-bar>
        <swiper :banner = "banner"/>
        <recommend-view :recommend="recommend"/>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Swiper from 'components/common/swiper/Swiper'
import RecommendView from './RecommendView'
import {getHomeMultidata} from 'network/home'
export default {
    name: 'Home',
    components: {
        NavBar,
        Swiper,
        RecommendView
    },
    data() {
        return {
            banner: [],
            recommend: [],
        }
    },
    created() {
        // 请求数据
        getHomeMultidata().then(res => {
            this.banner = res.data.banner.list
            this.recommend = res.data.recommend.list
        })
    },
    methods: {
        liClick (index) {
            this.count = index
        },
    }
}
</script>

<style scoped>
    .home-nav{
        background: rgb(8, 9, 82);
        color: white;
    }
    
</style>