<script setup>
import NavigationBar from "./components/NavigationBar.vue";
import CommodityList from "./components/CommodityList.vue";
import PurchaseOrderList from "./components/PurchaseOrderList.vue";
import LogisticInfomation from "./components/LogisticInfomation.vue";
import LogisticsOrderHeader from "./components/LogisticsOrderHeader.vue";
</script>

<template>
  <el-container>
      <el-aside width="250px" class="aside">
        <NavigationBar />
      </el-aside>

      <el-container>
        <el-header class="header">
          <span class="name">employee account</span>
          <el-avatar src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
        </el-header>

        <el-main class="main">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item>一级菜单</el-breadcrumb-item>
            <el-breadcrumb-item>二级菜单</el-breadcrumb-item>
            <el-breadcrumb-item >三级菜单</el-breadcrumb-item>
          </el-breadcrumb>

          <h1>成品订单</h1>
          <div class="order">
            <LogisticsOrderHeader />
            <div class="subtitle">物流信息</div>
            <LogisticInfomation />
            <CommodityList />
            <div class="subtitle">采购单</div>
            <PurchaseOrderList />
          </div>
        </el-main>
      </el-container>
    </el-container>
</template>
