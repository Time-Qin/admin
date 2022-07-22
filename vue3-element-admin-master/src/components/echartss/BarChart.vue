<template>
  <div>
    <div id="barchart" style="width: 100%; height: 600px"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import { nextTick, onMounted, onUnmounted, onUpdated } from 'vue'
export default {
  props: ['name1', 'saleTotal'],
  setup(props) {
    let mychart
    console.log(props.name1, props.saleTotal)
    onUpdated(() => {
      mychart = echarts.init(document.getElementById('barchart'))
      // const nameList = props.name1
      // const saleTotalList = props.saleTotal
      let saleTotalArrList = []
      var dataList = []
      const nameArrList = []
      for (let i in props.saleTotal) {
        nameArrList.push(props.name1[i])
        saleTotalArrList.push(props.saleTotal[i] / 1)
      }

      for (let i = 30; i < saleTotalArrList.length; i++) {
        let a = {}
        a.type = 'bar'
        a.data = saleTotalArrList
        dataList.push(a)
      }
      const options = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        //图例控件
        legend: {
          data: nameArrList,
        },
        //绘图区域
        grid: {
          left: '3%',
          right: '4%',
          bottom: '10%',
          containLabel: true,
        },
        //x轴为类目轴
        xAxis: [
          {
            type: 'category',
            align: 'center',
            data: nameArrList,
          },
        ],
        //y轴Wie数值轴
        yAxis: [
          {
            type: 'value',
          },
        ],
        series: dataList,
      }
      mychart.setOption(options)
      window.onresize = mychart.resize
    })

    onUnmounted(() => {
      if (!mychart) {
        return
      }
      mychart.dispose()
      mychart = null
    })
  },
}
</script>
