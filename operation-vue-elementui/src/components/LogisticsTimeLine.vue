<script setup>
    defineProps(['timeline']);
</script>

<template>
    <el-timeline class="timeline">
        <el-timeline-item color="rgb(255,255,255,0)" class="item top" center></el-timeline-item>
        <el-timeline-item
            v-for="({time, msg}, idx) in timeline"
            :key="time || idx"
            :color="time ? '#FF0033' : 'rgb(255,255,255,0)'"
            class="item"
            center
            :timestamp="`${time}  ${msg}`"
        >
        </el-timeline-item>
        <el-timeline-item color="rgb(255,255,255,0)" class="item" center></el-timeline-item>
    </el-timeline>
</template>

<style scoped>
    .timeline {
        position: absolute;
        bottom: -2px;
        left: 400px;
    }
    .item {
        padding: 2px 0 8px 0;
        height: 17px;
    }
    .top {
        height: 0;
        padding: 0;
    }
</style>