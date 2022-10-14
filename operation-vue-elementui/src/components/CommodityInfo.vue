<template>
    <el-row class="outer">
        <el-col :span="5"><div class="listheader">商品</div></el-col>
        <el-col :span="4"><div class="listheader">单价</div></el-col>
        <el-col :span="4"><div class="listheader">数量</div></el-col>
        <el-col :span="4"><div class="listheader">小计</div></el-col>
        <el-col :span="4"><div class="listheader">采购单状态</div></el-col>
        <el-col :span="3"><div class="listheader">售后状态</div></el-col>
    </el-row>
</template>

<style scoped>
    .outer {
        margin: 20px 0 10px 0;
    }
    .listheader {
        padding: 0 20px;
        text-align: left;
        background-color: rgb(237, 238, 244);
        height: 40px;
        line-height: 40px;
        font-weight: bold;
    }
</style>