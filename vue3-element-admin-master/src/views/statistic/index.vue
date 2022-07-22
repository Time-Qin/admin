<template>
  <div>
    <div>
      <el-button type="primary" plain round @click="dangao">蛋糕</el-button>
      <el-button type="primary" plain round @click="mianbao">面包</el-button>
      <el-button type="primary" plain round @click="binggan">饼干</el-button>
    </div>
    <section class="data_section">
      <el-row :gutter="10" class="row_list">
        <el-col :span="24">
          <BarChart :name1="name1" :saleTotal="saleTotal" />
        </el-col>
        <el-col :span="24">
          <OrderChart :name1="name1" :saleTotal="saleTotal" />
        </el-col>
      </el-row>
    </section>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from '@vue/runtime-core'
import { GetRequest, GetRequest1, GetRequest2 } from '@/api/products.js'
import BarChart from '../../components/echartss/BarChart.vue'
import OrderChart from '../../components/echartss/ordertype.vue'

export default defineComponent({
  name: 'statistic',
  components: { BarChart, OrderChart },
  setup() {
    const name1 = ref()
    const saleTotal = ref()

    const dangao = () => {
      const McakeTotal = async () => {
        const result = await GetRequest2()
        console.log(result)
        if (result.code === 0) {
          name1.value = result.data.data.map(item => item.name)
          saleTotal.value = result.data.data.map(item => item.saleTotal)
        }
      }
      McakeTotal()
    }
    dangao()

    const binggan = () => {
      const getBinggan = async () => {
        const result = await GetRequest()
        console.log(result)
        if (result.code === 0) {
          name1.value = result.data.data.map(item => item.name)
          saleTotal.value = result.data.data.map(item => item.saleTotal)
        }
      }
      getBinggan()
    }

    const mianbao = () => {
      const mianbaoTotal = async () => {
        const result = await GetRequest1()
        console.log(result)
        if (result.code === 0) {
          name1.value = result.data.data.map(item => item.name)
          saleTotal.value = result.data.data.map(item => item.saleTotal)
        }
      }
      mianbaoTotal()
    }
    // const McakeTotal = async () => {
    //   const result = await GetRequest2()
    //   //   console.log(result)
    //   if (result.code === 0) {
    //     name1.value = result.data.data.map(item => item.name)
    //     saleTotal.value = result.data.data.map(item => item.saleTotal)
    //   }
    // }
    // // getMcakes()
    // // initMcake()
    // McakeTotal()
    return { name1, saleTotal, dangao, mianbao, binggan }
  },
})
</script>
