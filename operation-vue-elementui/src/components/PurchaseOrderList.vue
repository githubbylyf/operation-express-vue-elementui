<script setup>
import PurchaseOrderHeader from './PurchaseOrderHeader.vue';
import CommodityPara from './CommodityPara.vue';
import { commodityList, commodityStateArr, serviceStateArr} from '../store.js'
</script>

<template>
    <PurchaseOrderHeader />

    <div v-for="item of commodityList" :key="item.spuId" class="single">
        <div class="id" v-if="item.type === 'goods'">采购单单号：{{item.purchaseOrderNumber}}</div>

        <el-row class="commodity" v-if="item.type === 'goods'">
            <el-col :span="5" class="col border">
                <div class="left">
                    <CommodityPara :name="item.name" :parameter="item.parameters" />
                </div>
                <div class="service"  v-if="item.hasIncidentalService">{{item.incidentalServiceName}}</div>
            </el-col>

            <el-col :span="3" class="col">
                <div class="left">¥{{ item.purchaseOrderUnitPrice.toFixed(2) }}</div>
                <div class="service"  v-if="item.hasIncidentalService">¥{{item.incidentalServiceUnitPrice.toFixed(2)}}/次</div>
            </el-col>

            <el-col :span="2" class="col">
                <div class="left">{{ item.amount }}</div>
                <div class="service"  v-if="item.hasIncidentalService">{{item.incidentalServiceAmount}}</div>
            </el-col>

            <el-col :span="3" class="col border">
                <div class="left">¥{{ (item.purchaseOrderUnitPrice * item.amount).toFixed(2) }}</div>
                <div class="service"  v-if="item.hasIncidentalService">¥{{(item.incidentalServiceUnitPrice * item.incidentalServiceAmount).toFixed(2)}}</div>
            </el-col>

            <el-col :span="3" class="col">
                <div class="right border">
                    {{ item.type === 'goods' ? commodityStateArr[item.state - 1] : serviceStateArr[item.state - 1] }}
                </div>
            </el-col>

            <el-col :span="2" class="col">
                <div class="right border">
                    <el-link type="primary">采购链接</el-link>
                </div>
            </el-col>

            <el-col :span="3" class="col"></el-col>

            <el-col :span="3" class="col">
                <div class="right operation">
                    <el-link type="primary">查看采购单</el-link>
                    <el-link type="primary">更换采购单</el-link>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped>
    .single {
        margin-bottom: 20px;
        font-size: 0.9em;
    }
    .id {
        background-color: rgb(237, 238, 244);
        height: 40px;
    }
    .commodity {
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
    .left, .right, .service, .id {
        padding: 0 10px;
        display: flex;
        align-items: center;
    }
    .service {
        border-top: 1px dashed rgb(237, 238, 244);
    }
    .border {
        border-right: 1px solid rgb(237, 238, 244);
    }
    .operation {
        flex-direction: column;
        justify-content: center;
    }
</style>