<template>
    <div class="title">商品采购单</div>
    <el-row class="sub">
        <el-col :span="5"><div class="purchasehead">采购商品</div></el-col>
        <el-col :span="3"><div class="purchasehead">供应价</div></el-col>
        <el-col :span="2"><div class="purchasehead">数量</div></el-col>
        <el-col :span="3"><div class="purchasehead">供应价总计</div></el-col>
        <el-col :span="3"><div class="purchasehead">采购单状态</div></el-col>
        <el-col :span="2"><div class="purchasehead">采购链接</div></el-col>
        <el-col :span="3"><div class="purchasehead">售后状态</div></el-col>
        <el-col :span="3"><div class="purchasehead">操作</div></el-col>
    </el-row>
</template>

<style scoped>
    .title {
        padding: 0 0 10px 10px;
        font-weight: bold;
        border-bottom: 2px solid rgb(237, 238, 244);
    }
    .sub {
        margin: 20px 0 10px 0;
    }
    .purchasehead {
        padding-left: 10px;
        background-color: rgb(237, 238, 244);
        height: 40px;
        line-height: 40px;
        font-weight: bold;
    }
</style>