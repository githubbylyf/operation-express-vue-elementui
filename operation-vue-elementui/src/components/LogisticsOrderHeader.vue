<script setup>
import { Select } from '@element-plus/icons-vue';
import { computed } from 'vue';

import { globalData, commodityShowed} from '../store.js';

const stateArr = ['等待买家付款', '等待月球发货', '月球发货中', '交易完成'];
const timeline = computed(() => JSON.stringify(commodityShowed.value) === '{}' ? ['','',''] : commodityShowed.value.stateTimeline);
</script>

<template>
    <h3>订单单号：{{ globalData.orderId }}</h3>
    <div class="process">
        <div class="state">
            <div class="top">{{ stateArr[commodityShowed.state - 1] }}</div>
            <div class="btm">{{ timeline[commodityShowed.state - 2] || globalData.paytime }}</div>
        </div>
        <el-steps :active="commodityShowed.state" align-center class="items">
            <el-step title="等待买家付款" :description="globalData.paytime" :icon="Select"/>
            <el-step title="等待月球发货" :description="timeline[0]" :icon="Select"/>
            <el-step title="月球发货中" :description="timeline[1]" :icon="Select"/>
            <el-step title="交易完成" :description="timeline[2]" :icon="Select"/>
        </el-steps>
    </div>
</template>

<style scoped>
    .process {
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 2px solid rgb(244, 244, 244);
    }
    .state {
        width: 300px;
        text-align: center;
        height: 100%;
        border-right: 2px solid rgb(244, 244, 244);
    }
    .top {
        font-size: 2em;
        height: 50%;
        line-height: 150px;
    }
    .btm {
        height: 50%;
    }
    .items {
        width: 100%;
    }
</style>