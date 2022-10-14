import { ref, computed } from 'vue'

const globalData = ref({});

const fetchData = async () => {
    const res = await fetch('http://localhost:3000/data');
    const data = await res.json();
    globalData.value = await data[0];
}

fetchData();

const commodityIdx = ref(0);
const handleCommodityIdx = (value) => {
    commodityIdx.value = value;
}

const commodityList = computed(() => globalData.value.commodity);
const commodityShowed = computed(() => commodityList.value === undefined ? {} : commodityList.value[commodityIdx.value]);
const commodityStateArr = ['已付款', '等待发货', '已发货', '交易完成'];
const serviceStateArr = ['已付款', '待兑现服务', '待支付首期款', '交易完成'];


export { globalData, commodityShowed, handleCommodityIdx, commodityList, commodityStateArr, serviceStateArr };