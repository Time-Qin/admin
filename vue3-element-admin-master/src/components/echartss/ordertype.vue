<template>
  <div id="orderType" style="width: 100%; height: 400px"></div>
</template>

<script>
import * as echarts from 'echarts'
import { onMounted, onUnmounted, onUpdated, nextTick } from 'vue'

export default {
  props: ['name1', 'saleTotal'],
  setup(props) {
    let myChart
    onUpdated(() => {
      myChart = echarts.init(document.getElementById('orderType'))
      const nameList = props.name1
      const saleTotalList = props.saleTotal
      const dataList = saleTotalList.map((value, i) => ({
        value,
        name: nameList[i],
      }))
      let readyBin1Option = {
        title: {
          text: '产品销量',
          subtext: '蛋糕',
          x: 'center',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: props.name1,
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            center: ['50%', '60%'],
            data: dataList,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      }
      myChart.setOption(readyBin1Option)
      window.onresize = myChart.resize
    })

    onUnmounted(() => {
      if (!myChart) {
        return
      }
      myChart.dispose()
      myChart = null
    })
  },
}
</script>
