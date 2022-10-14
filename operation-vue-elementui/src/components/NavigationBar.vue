<script setup>
import { ref } from 'vue';

    const isClose = ref(true);
    const isCommodityClick = ref(false);
    const isOrderClick = ref(false);
    const isListClick = ref(false);

    const handleCommodityClick = () => {
        isClose.value = false;
        isCommodityClick.value = true;
        isOrderClick.value = false;
    };
    const handleOrderClick = () => {
        isClose.value = true;
        isOrderClick.value = true;
        isCommodityClick.value = false;
    };
    const handleListClick = () => {
        isListClick.value = true;
    };
</script>

<template>
    <div class="title">LUNA HOME 运营端</div>
    <div class="nav top" @click="handleCommodityClick" :class="{click: isCommodityClick}">
        <el-icon class="icon"><GoodsFilled/></el-icon>
        商品
        <el-icon class="arrow"><ArrowRight /></el-icon>
    </div>
    <div class="nav center" :class="{close: isClose, listclick: isListClick}" @click="handleListClick">
        <el-icon class="icon"><Minus /></el-icon>
        商品管理列表
    </div>
    <div class="nav bottom" @click="handleOrderClick" :class="{click: isOrderClick}">
        <el-icon class="icon"><Memo /></el-icon>
        采购单
        <el-icon class="arrow"><ArrowRight /></el-icon>
    </div>
</template>

<style scoped>
    .title {
        text-align: center;
        margin-bottom: 40px;
        height: 60px;
        line-height: 60px;
        border-bottom: 2px solid rgb(22, 20, 31);
    }
    .nav {
        line-height: 50px;
        height: 50px;
        padding-left: 50px;
        position: relative;
    }
    .icon {
        vertical-align: -2px;
    }
    .arrow {
        position: absolute;
        top: 17px;
        right: 15px;
    }
    .center {
        padding-left: 60px;
    }
    .bottom {
        margin-top: 40px;
    }
    .close {
        display:none;
    }
    .click {
        color: rgb(53, 137, 255);
        background-color: rgb(22, 20, 31);
    }
    .listclick {
        background-color: rgb(22, 20, 31);
    }
</style>