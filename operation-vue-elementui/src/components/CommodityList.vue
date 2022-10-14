<script setup>
import { computed } from 'vue';
import CommodityInfo from './CommodityInfo.vue';
import CommodityPara from './CommodityPara.vue';
import { commodityList, serviceStateArr, commodityStateArr } from '../store.js';

const sum = computed(() => commodityList.value === undefined ? 0 :commodityList.value.reduce((pre, cur) => pre + cur.unitPrice * cur.amount, 0));
</script>

<template>
    <CommodityInfo />
    
    <div v-for="item of commodityList" :key="item.spuId" class="single">
        <div class="id">SPU ID：{{ item.spuId }}</div>

        <el-row class="commodity">
            <el-col :span="5" class="col border">
                <div class="left">
                    <CommodityPara :name="item.name" :parameter="item.parameters"/>
                </div>
                <div class="service" v-if="item.hasIncidentalService">{{ item.incidentalServiceName }}</div>
            </el-col>

            <el-col :span="4" class="col">
                <div class="left">¥{{ item.unitPrice.toFixed(2) }}</div>
                <div class="service" v-if="item.hasIncidentalService">¥{{ item.incidentalServiceUnitPrice.toFixed(2) }}/次</div>
            </el-col>

            <el-col :span="4" class="col">
                <div class="left">{{ item.amount }}</div>
                <div class="service" v-if="item.hasIncidentalService">{{ item.incidentalServiceAmount }}</div>
            </el-col>

            <el-col :span="4" class="col border">
                <div class="left">¥{{ (item.unitPrice * item.amount).toFixed(2) }}</div>
                <div class="service" v-if="item.hasIncidentalService">¥{{ (item.incidentalServiceUnitPrice * item.incidentalServiceAmount).toFixed(2) }}</div>
            </el-col>

            <el-col :span="4" class="col">
                <div class="right">
                    <el-link type="primary">{{ item.type === 'goods' ? commodityStateArr[item.state - 1] : serviceStateArr[item.state - 1] }}</el-link>
                </div>
            </el-col>
            
            <el-col :span="3" class="col"></el-col>
        </el-row>

        <div class="note" v-if="item.notes">买家备注：{{ item.notes }}</div>
    </div>

    <el-descriptions size="large" :column="1" class="total">
        <el-descriptions-item label="商品总价：" label-align="right" align="right" label-class-name="price pricelabel" class-name="price">¥{{ sum.toFixed(2) }}</el-descriptions-item>
        <el-descriptions-item label="实收金额：" label-align="right" align="right" label-class-name="receive" class-name="receive money">¥{{ sum.toFixed(2) }}</el-descriptions-item>
    </el-descriptions>
</template>

<style scoped>
    .single {
        margin-bottom: 20px;
    }
    .id {
        background-color: rgb(237, 238, 244);
        height: 40px;
    }
    .commodity, .note {
        border: 1px solid rgb(237, 238, 244);
    }
    .col {
        min-height: 100px;
        max-height:200px;
    }
    .left, .service {
        height: 100px;
    }
    .right {
        height: 100%;
    }
    .left, .right, .service, .note, .id{
        padding-left: 10px;
        display: flex;
        align-items: center;
    }
    .service {
        border-top: 1px dashed rgb(237, 238, 244);
    }
    .border {
        border-right: 1px solid rgb(237, 238, 244);
    }
    .note {
        color: red;
        background-color: rgb(254, 233, 233);
        margin-top: -1px;
        height: 40px;
    }
    .total {
        margin-top: 20px;
    }
    .total :deep(.price) {
        font-size: 1.2em;
        padding-right: 30px;
    }
    .total :deep(.pricelabel) {
        padding-right: 57px;
    }
    .total :deep(.receive) {
        font-size: 1.6em;
        padding-right: 30px;
    }
    .total :deep(.money) {
        color: rgb(219, 103, 76);
    }
</style>
