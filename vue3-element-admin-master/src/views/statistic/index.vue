<template>
  <div>
    <section class="data_section">
      <el-row :gutter="10" class="row_list">
        <el-col :span="24" v-if="name1 && saleTotal">
          <BarChart :name1="name1" :saleTotal="saleTotal" />
        </el-col>
        <!-- </el-row> -->
        <!-- <el-row :gutter="10" class="row_list"> -->
        <el-col :span="16" v-if="name1 && saleTotal">
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
    // const getMcakes = async () => {
    //   const result = await GetRequest()
    //   //   console.log(result)
    // }

    // const initMcake = async () => {
    //   const result = await GetRequest1()
    //   //   console.log(result)
    //   if (result.code === 0) {
    //     scene.value = result.data[0].scene
    //   }
    //   scene.value = scene.value.map(item => item.tname)
    //   //   console.log(result.data[0].scene);
    // }

    const McakeTotal = async () => {
      const result = await GetRequest2()
      //   console.log(result)
      if (result.code === 0) {
        name1.value = result.data.data.map(item => item.name)
        saleTotal.value = result.data.data.map(item => item.saleTotal)
      }
    }
    // getMcakes()
    // initMcake()
    McakeTotal()
    return { name1, saleTotal }
  },
})
</script>
