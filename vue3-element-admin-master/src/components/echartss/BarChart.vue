<template>
  <div>
    <div id="barchart" style="width: 100%; height: 480px"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import { onMounted, onUnmounted } from 'vue'
export default {
  props: ['name1', 'saleTotal'],
  setup(props) {
    let mychart
    onMounted(() => {
      mychart = echarts.init(document.getElementById('barchart'))
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
          data: props.name1,
          //   data: [
          //     '直接访问',
          //     '邮件营销',
          //     '联盟广告',
          //     '视频广告',
          //     '搜索引擎',
          //     '百度',
          //   ],
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
            data: props.name1,
          },
        ],
        //y轴Wie数值轴
        yAxis: [
          {
            type: 'value',
          },
        ],
        series: [
          {
            name: '销量',
            type: 'line',
            data: props.saleTotal,
          },
        ],
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
