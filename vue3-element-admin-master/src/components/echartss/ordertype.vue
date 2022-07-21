<template>
  <div id="orderType" style="width: 100%; height: 280px"></div>
</template>

<script>
import * as echarts from 'echarts'
import { onMounted, onUnmounted } from 'vue'

export default {
  props: ['name1', 'saleTotal'],
  setup(props) {
    let myChart
    onMounted(() => {
      myChart = echarts.init(document.getElementById('orderType'))
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
            data: [
              { value: props.saleTotal[0], name: props.name1[0] },
              { value: props.saleTotal[1], name: props.name1[1] },
              { value: props.saleTotal[2], name: props.name1[2] },
              { value: props.saleTotal[3], name: props.name1[3] },
              { value: props.saleTotal[4], name: props.name1[4] },
              { value: props.saleTotal[5], name: props.name1[5] },
              { value: props.saleTotal[6], name: props.name1[6] },
              { value: props.saleTotal[7], name: props.name1[7] },
              { value: props.saleTotal[8], name: props.name1[8] },
              { value: props.saleTotal[9], name: props.name1[9] },
              // { value: 335, name: '基金' },
              // { value: 310, name: '股票' },
              // { value: 234, name: '债券' },
              // { value: 135, name: '储蓄' },
              // { value: 1548, name: '期货' },
            ],
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
  // data() {
  //   return {
  //     myChart: null,
  //   }
  // },
  // mounted() {
  //   this.myChart = echarts.init(document.getElementById(this.id))
  //   this.myChart.setOption(this.readyBin1Option(this.type))
  // },
  // props: ['id', 'type'],
  // methods: {
  //   readyBin1Option(type) {
  //     let text, legend_data, series_data
  //     if (type == 'ordertype') {
  //       text = '用户投资类型'
  //       legend_data = ['基金', '股票', '债券', '储蓄', '期货']
  //       series_data = [
  //         { value: 335, name: '基金' },
  //         { value: 310, name: '股票' },
  //         { value: 234, name: '债券' },
  //         { value: 135, name: '储蓄' },
  //         { value: 1548, name: '期货' },
  //       ]
  //     } else {
  //       text = '用户投资区域'
  //       legend_data = [
  //         '华东区',
  //         '华南区',
  //         '华中区',
  //         '华北区',
  //         '西南区',
  //         '东北区',
  //         '台港澳',
  //       ]
  //       series_data = [
  //         { value: 335, name: '华东区' },
  //         { value: 310, name: '华南区' },
  //         { value: 234, name: '华中区' },
  //         { value: 835, name: '华北区' },
  //         { value: 1548, name: '西南区' },
  //         { value: 335, name: '东北区' },
  //         { value: 454, name: '台港澳' },
  //       ]
  //     }
  //     let data = {
  //       title: {
  //         text: text,
  //         subtext: '纯属虚构',
  //         x: 'center',
  //       },
  //       tooltip: {
  //         trigger: 'item',
  //         formatter: '{a} <br/>{b} : {c} ({d}%)',
  //       },
  //       legend: {
  //         orient: 'vertical',
  //         left: 'left',
  //         data: legend_data,
  //       },
  //       series: [
  //         {
  //           name: '访问来源',
  //           type: 'pie',
  //           radius: '50%',
  //           center: ['50%', '60%'],
  //           data: series_data,
  //           itemStyle: {
  //             emphasis: {
  //               shadowBlur: 10,
  //               shadowOffsetX: 0,
  //               shadowColor: 'rgba(0, 0, 0, 0.5)',
  //             },
  //           },
  //         },
  //       ],
  //     }
  //     return data
  //   },
  // },
  // watch: {
  //   type: v => {
  //     this.readyBin1Option(v)
  //   },
  // },
}
</script>
