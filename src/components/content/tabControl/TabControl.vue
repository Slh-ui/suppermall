<template>
    <div class="tab-control">
        <div v-for="(item, index) in title" :key="index" 
        class="tab-control-item" :class="index == activenum? 'active':''" @click="itemClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            activenum: 0
        }
    },
    methods: {
        itemClick(index) {
            this.activenum = index
            // console.log(this.activenum)
        }
    }
}
</script>

<style scoped>
.tab-control{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
}
.tab-control-item{
    flex: 1;
}
.active {
    color: pink;
}
.active span{
    border-bottom: pink 3px solid;
    padding: 5px;
}
</style>