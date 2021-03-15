<template>
    <div id="swiper">
        <div class="swiper-item">
            <a v-for="(item, index) in banner" :key="index" :href="item.link">
                <img :src="item.image" v-show="index == count"/>
            </a>
            <ul>
                <li  v-for="(item, index) in banner" :key="index" :class="index==count?'active':''" @click="liClick(index)"></li>
            </ul>
            <div class="lr">
                <div class="ciu1" @click="right">＞</div>
                <div class="ciu2" @click="left">＜</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        banner: []
    },
    data() {
        return {
            count: 0
        }
    },
    methods: {
        liClick (index) {
            this.count = index
        },
        play () {
            if(this.count < this.banner.length-1)
            {
                this.count ++
            }else{
                this.count = 0
            }
        },
        right() {
            if(this.count < this.banner.length-1) {
                this.count ++
            }else{
                this.count = 0
            }
        }, // 0 1 2 3
        left() {
            if(this.count <= this.banner.length-1 && this.count > 0) {
                this.count --
            }else{
                this.count = this.banner.length-1
            }
        }
    },
    created () {
        setInterval(this.play, 5000)
    }
}
</script>

<style scoped>
    .swiper-item{
        width: 100%;
        height: 150px;
        background: rebeccapurple;
     }
    img{
        width: 100%;
        height: 150px;
    }
    ul {
        margin: 0;
        padding: 0;
        display:inline-block;
        position: relative;
        top: -30px;
        display: flex;
        justify-content: center;
    }
    li{
        display:inline-block;
        background: rgba(18, 18, 19, 0.74);
        border-radius: 50%;
        padding:5px;
        margin: 2px;
    }
    .banner-circle{
        position: absolute;
        width: 100%;
        height: 150px;
        right: 0;
        color: #fff;
    }
    .active{
        background: white;
    }
    .lr{
        width: 100%;
        height: 50px;
        position: relative;
        bottom: 120px;
    }
    .ciu1, .ciu2 {
        width: 50px;
        height: 50px;
        background: white;
        opacity: .7;
        font-size: 35px;
    }
    .ciu1{
        float: right;
    }
</style>