<script setup>
    defineProps(['name', 'parameter']);
</script>

<template>
    <div class="contain">
        <img src="../assets/logo.svg" class="img">
        <div class="toptext">
            <el-link type="primary">{{ name }}</el-link>
        </div>
        <div class="btmtext">{{ parameter }}</div>
    </div>
</template>

<style scoped>
    .contain {
        font-size: 0.5em;
        width: 250px;
        height: 70px;
        display: grid;
        grid-template-columns: 75px 1fr;
        grid-template-rows: repeat(2, 1fr);
    }
    .img {
        width: 70px;
        height: 70px;
        border: 1px solid grey;
        grid-row-start: 1;
        grid-row-end: 3;
    }
    .toptext, .btmtext {
        padding-left: 8px;
    }
    .btmtext {
        display: flex;
        align-items: flex-end;
    }
</style>
