<template>
    <div class="recommend">
        <div v-for="(item,index) in recommend" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        recommend: {
            type: Array,
            default () {
                return []
            }
        }
    }
}
</script>

<style scoped>
.recommend{
    position: relative;
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    top: -50px;
    padding-bottom: 20px;
    border-bottom: 8px solid rgb(182, 179, 179);
}
.recommend div{
    flex: 1;
}
img{
    width:70px;
    height: 65px;
    margin-bottom: 10px;
}
a{
    color: black;
    text-decoration: none;
}
</style>