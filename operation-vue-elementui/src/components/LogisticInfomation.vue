<script setup>
import { ref, computed } from 'vue'
import TransactionInfo from './TransactionInfo.vue'
import LogisticsTimeLine from './LogisticsTimeLine.vue'
import CommodityPara from './CommodityPara.vue';

import { handleCommodityIdx, commodityShowed, commodityList, commodityStateArr, serviceStateArr } from '../store.js'

    const stateArr = computed(() => commodityShowed.value.type === 'goods' ? commodityStateArr : serviceStateArr);
    const activeName = ref(0);
    
    const handleClick = (tab) => {
        handleCommodityIdx(tab.props.name);
    }
</script>

<template>
    <el-tabs
        v-model="activeName"
        type="card"
        @tab-click="handleClick"
    >
        <el-tab-pane
            v-for="(cy, idx) of commodityList"
            :key="cy.spuId"
            :label="`包裹${idx + 1}`"
            :name="idx"
            class="outer"
        >
        <el-descriptions :title="`发货方式：${cy.deliveryMethod}`" :column="2" >
            <el-descriptions-item label="发货人：" span="2">{{ cy.consigner }}</el-descriptions-item>
            <el-descriptions-item label="发货时间：" width="400px">{{ cy.stateTimeline ? cy.stateTimeline[1] : '' }}</el-descriptions-item>
            <el-descriptions-item label="物流状态：">
                <el-link type="primary">{{ stateArr[cy.state - 1] }}</el-link>
            </el-descriptions-item>
            <el-descriptions-item label="运单号：">{{ cy.waybillNumber }}</el-descriptions-item>
            <el-descriptions-item class="container">
                <LogisticsTimeLine :timeline="cy.LogisticsTimeline" />
            </el-descriptions-item>
        </el-descriptions>

        <CommodityPara :name="cy.name" :parameter="`X ${cy.amount}`" />
        </el-tab-pane>
    </el-tabs>

    <TransactionInfo />
</template>

<style scoped>
    .outer {
        border: 2px solid rgb(244, 244, 244);
        padding: 20px 40px 8px 40px;
        height: 230px;
    }
    .container {
        position: relative;
    }
</style>