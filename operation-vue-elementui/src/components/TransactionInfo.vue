<script setup>
import { computed } from 'vue';
import { globalData, commodityShowed } from '../store.js';

const price = computed(() => commodityShowed.value.unitPrice ? commodityShowed.value.unitPrice : 0);
const amount = computed(() => commodityShowed.value.amount ? commodityShowed.value.amount : 0);

const sum = computed(() => price.value * amount.value);
</script>

<template>
    <div class="transaction">
        <el-descriptions title="收货人信息" :column="1" class="column">
            <el-descriptions-item label="收货人：">{{ globalData.receiver }}</el-descriptions-item>
            <el-descriptions-item label="联系电话：">{{ globalData.phone }}</el-descriptions-item>
            <el-descriptions-item label="地址：">{{ globalData.address }}</el-descriptions-item>
        </el-descriptions>
        <el-descriptions title="买家信息" :column="1" class="column">
            <el-descriptions-item label="用户名：">{{ globalData.user }}</el-descriptions-item>
        </el-descriptions>
        <el-descriptions title="付款信息" :column="1" class="column">
            <el-descriptions-item label="实付金额：">¥{{ sum.toFixed(2) }}</el-descriptions-item>
            <el-descriptions-item label="付款方式：">{{ globalData.paymentMethod }}</el-descriptions-item>
            <el-descriptions-item label="付款时间：">{{ globalData.paytime }}</el-descriptions-item>
        </el-descriptions>
    </div>
</template>

<style scoped>
    .transaction {
        display: flex;
        align-items: stretch;
        justify-content: space-around;
        height: 140px;
        margin-top: 20px;
        padding: 20px 40px;
        background-color: rgb(244, 244, 244);
    }
    .column {
        width: 33%;
    }
    .column :deep(table) {
        background-color: rgb(244, 244, 244);
    }
</style>