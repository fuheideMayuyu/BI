<template>
<!-- 销售管理 -->
  <div class="dashboard-container">
    <div class="content-header">
      <div class="content-header-left">
        <div class="chart-top clearfloat">
          <span class="chart-top-text">SKU价格趋势</span>
          <div class="select-module">
            <el-select class="select" size="small" v-model="value1" placeholder="请选择">
              <el-option 
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-select class="select" size="small" v-model="value2" placeholder="请选择">
              <el-option 
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-select class="select last-sel" size="small" v-model="value3" placeholder="请选择">
              <el-option 
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <nuxt-link :to="{path: '/salesManagement/skuInfo'}">
              <el-button size="small" class="info-btn" type="primary">查看详情</el-button>
            </nuxt-link>
          </div>
        </div>
        <!-- sku图表 -->
        <div id="skuChart"></div>
      </div>
      <div class="content-header-right">
        <div class="content-header-right-top">
          <div class="gmvinfo item">
            <div class="chart-top clearfloat">
              <span class="chart-top-text">类目GMV</span>
              <div class="select-module">
                <el-select class="select sel" size="small" v-model="value4" placeholder="请选择">
                  <el-option 
                    v-for="item in options4"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <nuxt-link :to="{path: '/salesManagement/GrossProfitInfo'}">
                  <el-button size="small" class="info-btn" type="primary">查看详情</el-button>
                </nuxt-link>
              </div>
            </div>
            <div id="gmvChart"></div>
          </div>
          <div class="grossProfit item">
            <div class="chart-top clearfloat">
              <span class="chart-top-text">类目毛利额</span>
              <div class="select-module">
                <el-select class="select sel" size="small" v-model="value5" placeholder="请选择">
                  <el-option 
                    v-for="item in options5"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <nuxt-link :to="{path: '/salesManagement/GrossProfitInfo'}">
                  <el-button size="small" class="info-btn" type="primary">查看详情</el-button>
                </nuxt-link>
              </div>
            </div>
            <div id="GrossProfitChart"></div>
          </div>
        </div>
        <div class="content-header-right-bottom">
          <div class="chart-top clearfloat">
            <span class="chart-top-text">供应商贡献度</span>
            <div class="select-module">
              <el-select class="select sel" size="small" v-model="value6" placeholder="请选择">
                <el-option 
                  v-for="item in options6"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <nuxt-link :to="{path: '/salesManagement/supplierContributionInfo'}">
                <el-button size="small" class="info-btn" type="primary">查看详情</el-button>
              </nuxt-link>
            </div>
          </div>
          <div id="contributionChart"></div>
        </div>
      </div>
    </div>
    <div class="content-inner">
      <div class="content-inner-item">
        <div class="chart-top clearfloat">
          <span class="chart-top-text">TOPS</span>
          <div class="select-module">
            <el-select class="select" size="small" v-model="value7" placeholder="请选择">
              <el-option 
                v-for="item in options7"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-select class="select sel" size="small" v-model="value8" placeholder="请选择">
              <el-option 
                v-for="item in options8"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-select class="select sel2" size="small" v-model="value9" placeholder="请选择">
              <el-option 
                v-for="item in options9"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <nuxt-link :to="{path: '/salesManagement/TOPSInfo'}">
              <el-button size="small" class="info-btn" type="primary">查看详情</el-button>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="content-inner-item">
        <div class="chart-top clearfloat">
              <span class="chart-top-text">类目投标情况</span>
              <div class="select-module">
                <el-select class="select sel3" size="small" v-model="value10" placeholder="请选择">
                  <el-option 
                    v-for="item in options10"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <nuxt-link :to="{path: '/salesManagement/WinningStatistics'}">
                  <el-button size="small" class="info-btn" type="primary">查看详情</el-button>
                </nuxt-link>
              </div>
            </div>
      </div>
      <div class="content-inner-item">
        <div class="chart-top clearfloat">
          <span class="chart-top-text">供应商中标占比</span>
          <div class="select-module">
            <el-select class="select sel" size="small" v-model="value11" placeholder="请选择">
              <el-option 
                v-for="item in options11"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <!-- 暂时跳到批次中标明细页 -->
            <nuxt-link :to="{path: '/salesManagement/WinningStatisticsInfo'}">
              <el-button size="small" class="info-btn" type="primary">查看详情</el-button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="content-footer">
      <div class="chart-top clearfloat">
          <span class="chart-top-text">渠道平台</span>
          <div class="select-module">
            <el-select class="select" size="small" v-model="value1" placeholder="请选择">
              <el-option 
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-select class="select" size="small" v-model="value1" placeholder="请选择">
              <el-option 
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-select class="select" size="small" v-model="value1" placeholder="请选择">
              <el-option 
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <nuxt-link :to="{path: '/salesManagement/channePlatformlInfo'}">
              <el-button size="small" class="info-btn" type="primary">查看详情</el-button>
            </nuxt-link>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options1: [
        {
          value: '头部',
          label: '头部'
        }, 
        {
          value: '尾部',
          label: '尾部'
        }
      ],
      value1: '头部',
      options2: [
        {
          value: 'top1',
          label: 'top1'
        },
        {
          value: 'top2',
          label: 'top2'
        },
        {
          value: 'top3',
          label: 'top3'
        },
        {
          value: 'top4',
          label: 'top4'
        },
        {
          value: 'top5',
          label: 'top5'
        },
        {
          value: 'top6',
          label: 'top6'
        },
        {
          value: 'top7',
          label: 'top7'
        },
        {
          value: 'top8',
          label: 'top8'
        },
        {
          value: 'top9',
          label: 'top9'
        },
        {
          value: 'top10',
          label: 'top10'
        },
        {
          value: 'top11',
          label: 'top11'
        },
        {
          value: 'top12',
          label: 'top12'
        },
        {
          value: 'top13',
          label: 'top13'
        } 
      ],
      value2: 'top1',
      options3: [
        {
          value: '折线图',
          label: '折线图'
        },
        {
          value: '簇状柱状图',
          label: '簇状柱状图'
        }, 
        {
          value: '面积图',
          label: '面积图'
        }
      ],
      value3: '折线图',
      type3: 'line', // 设置折线or柱状图
      isboundaryGap3: false, // 设置刻度分割线(X轴刻度显示位置)
      smooth3: true, // 设置曲率
      areaStyle3: null, // 是否设置为面积图

      options4: [
        {
          value: '饼图',
          label: '饼图'
        },
        {
          value: '环图',
          label: '环图'
        }, 
        {
          value: '玫瑰图',
          label: '玫瑰图'
        }
      ],
      value4: '饼图',
      radius4: '70%',
      roseType4: false,

      options5: [
        {
          value: '饼图',
          label: '饼图'
        },
        {
          value: '环图',
          label: '环图'
        }, 
        {
          value: '玫瑰图',
          label: '玫瑰图'
        }
      ],
      value5: '饼图',
      radius5: '70%',
      roseType5: false,

      options6: [
        {
          value: '簇状柱状图+折线图',
          label: '簇状柱状图+折线图'
        },
        {
          value: '簇状柱状图+面积图',
          label: '簇状柱状图+面积图'
        }, 
        {
          value: '折线图+簇状柱状图',
          label: '折线图+簇状柱状图'
        },
        {
          value: '面积图+簇状柱状图',
          label: '面积图+簇状柱状图'
        },
        {
          value: '折线图',
          label: '折线图'
        },
        {
          value: '簇状柱状图',
          label: '簇状柱状图'
        },
        {
          value: '面积图',
          label: '面积图'
        }
      ],
      value6: '簇状柱状图+折线图',
      type6: 'line',
      type6Two: 'bar',
      isboundaryGap6: true,
      smooth6: true,
      smooth6Two: true,
      areaStyle6: null,
      areaStyle6Two: null,

      options7: [
        {
          value: '品牌',
          label: '品牌'
        },
        {
          value: 'SKU',
          label: 'SKU'
        }
      ],
      value7: '品牌',
      options8: [
        {
          value: '1',
          label: '母婴用品'
        },
        {
          value: '2',
          label: '美妆个护'
        },
        {
          value: '3',
          label: '食品保健'
        },
        {
          value: '4',
          label: '生活家居'
        }
      ],
      value8: '1',
      options9: [
        {
          value: '雷达图',
          label: '雷达图'
        },
        {
          value: '簇状柱状图',
          label: '簇状柱状图'
        },
        {
          value: '折线图',
          label: '折线图'
        },
        {
          value: '饼图',
          label: '饼图'
        },
        {
          value: '玫瑰图',
          label: '玫瑰图'
        },
        {
          value: '簇状条形图',
          label: '簇状条形图'
        },
        {
          value: '面积图',
          label: '面积图'
        }
      ],
      value9: '雷达图',
      options10: [
        {
          value: '簇状柱状图',
          label: '簇状柱状图'
        },
        {
          value: '折线图',
          label: '折线图'
        },
        {
          value: '簇状条形图',
          label: '簇状条形图'
        },
        {
          value: '面积图',
          label: '面积图'
        },
        {
          value: '雷达图',
          label: '雷达图'
        },
        {
          value: '簇状柱状图+折线图',
          label: '簇状柱状图+折线图'
        },
        {
          value: '簇状柱状图+面积图',
          label: '簇状柱状图+面积图'
        },
        {
          value: '折线图+簇状柱状图',
          label: '折线图+簇状柱状图'
        },
        {
          value: '面积图+簇状柱状图',
          label: '面积图+簇状柱状图'
        }
      ],
      value10: '簇状柱状图',
      options11: [
        {
          value: '饼图',
          label: '饼图'
        },
        {
          value: '环图',
          label: '环图'
        }, 
        {
          value: '玫瑰图',
          label: '玫瑰图'
        }
      ],
      value11: '饼图',
    }
  },
  components: {},
  computed: {
    
  },
  watch: {
    // 切换sku图表
    value3 () {
      switch(this.value3) {
        case '折线图':
          this.type3 = 'line'
          this.isboundaryGap3 = false
          this.smooth3 = true
          this.areaStyle3 = null
          this.echartsInit3()
          break;
        case '簇状柱状图':
          this.type3 ='bar'
          this.isboundaryGap3 = true
          this.areaStyle3 = null
          this.echartsInit3()
          break;
        case '面积图':
          this.type3 = 'line'
          this.isboundaryGap3 = false
          this.smooth3 = false
          this.areaStyle3 = {}
          this.echartsInit3()
          break;
      }
    },
    // 切换类目GMV图表
    value4 () {
      switch(this.value4) {
        case '饼图':
          this.radius4 = '70%'
          this.roseType4 = false
          this.echartsInit4()
          break;
        case '环图':
          this.radius4 = ['50%','70%']
          this.roseType4 = false
          this.echartsInit4()
          break;
        case '玫瑰图':
          this.radius4 = '70%'
          this.roseType4 = 'angle'
          this.echartsInit4()
          break;
      }
    },
    // 切换类目毛利额图表
    value5 () {
      switch(this.value5) {
        case '饼图':
          this.radius5 = '70%'
          this.roseType5 = false
          this.echartsInit5()
          break;
        case '环图':
          this.radius5 = ['50%','70%']
          this.roseType5 = false
          this.echartsInit5()
          break;
        case '玫瑰图':
          this.radius5 = '70%'
          this.roseType5 = 'angle'
          this.echartsInit5()
          break;
      }
    },
    // 切换供应商贡献度图表
    value6 () {
      switch(this.value6) {
        case '簇状柱状图+折线图':
          this.type6 = 'line'
          this.type6Two = 'bar'
          this.smooth6 = true
          this.smooth6Two = false
          this.areaStyle6 = null
          this.areaStyle6Two = null
          this.isboundaryGap6 = true
          this.echartsInit6()
          break;
        case '簇状柱状图+面积图':
          this.type6 = 'line'
          this.type6Two = 'bar'
          this.smooth6 = false
          this.smooth6Two = false
          this.areaStyle6 = {}
          this.areaStyle6Two = null
          this.isboundaryGap6 = true
          this.echartsInit6()
          break;
        case '折线图+簇状柱状图':
          this.type6 = 'bar'
          this.type6Two = 'line'
          this.smooth6 = false
          this.smooth6Two = true
          this.areaStyle6 = null
          this.areaStyle6Two = null
          this.isboundaryGap6 = true
          this.echartsInit6()
          break;
        case '面积图+簇状柱状图':
          this.type6 = 'bar'
          this.type6Two = 'line'
          this.smooth6 = true
          this.smooth6Two = false
          this.areaStyle6 = null
          this.areaStyle6Two = {}
          this.isboundaryGap6 = true
          this.echartsInit6()
          break;
        case '折线图':
          this.type6 = 'line'
          this.type6Two = 'line'
          this.smooth6 = true
          this.smooth6Two = true
          this.areaStyle6 = null
          this.areaStyle6Two = null
          this.isboundaryGap6 = false
          this.echartsInit6()
          break;
        case '簇状柱状图':
          this.type6 = 'bar'
          this.type6Two = 'bar'
          this.smooth6 = false
          this.smooth6Two = false
          this.areaStyle6 = null
          this.areaStyle6Two = null
          this.isboundaryGap6 = true
          this.echartsInit6()
          break;
        case '面积图':
          this.type6 = 'line'
          this.type6Two = 'line'
          this.smooth6 = false
          this.smooth6Two = false
          this.areaStyle6 = {}
          this.areaStyle6Two = {}
          this.isboundaryGap6 = false
          this.echartsInit6()
          break;
      }
    },
  },
  methods: {
    // 每个图形写一个方法，点击切换的时候通过计算属性来切换
    // SKU图表
    echartsInit3 () {
      // 找到容器
      let skuChart = this.$echarts.init(document.getElementById('skuChart'))
      // 开始渲染
      skuChart.setOption({
        // title: {text: '在Vue中使用echarts'},
        color: ['#4E86F2', '#F88C3F', '#40BB49', '#FDBB45'],
        tooltip: {
          trigger: 'axis' // 鼠标移入显示一列数据，而不是单个数据
        },
        legend: {
          data:['平台销售单价(元)','GMV(万元)','成本单价(元)','毛利率(%)'],
          x: 'center'
        },
        xAxis: {
          boundaryGap: this.isboundaryGap3,
          data: ['08-01', '08-02', '08-03', '08-04', '08-05', '08-06','08-07']
        },
        yAxis: [
          {
            name: '金额(元/万元)',
            type: 'value'
          },
          {
            name: '毛利率(%)',
            type: 'value'
          }
        ],
        series: [
          {
          name: '平台销售单价(元)',
          type: this.type3,
          areaStyle: this.areaStyle3, // 是否为面积图
          smooth: this.smooth3, //折线曲度
          yAxisIndex: 0, // 通过这个配置来设置双Y轴的数据
          data: [50, 8, 19, 34, 10, 10, 20]
          },
          {
          name: 'GMV(万元)',
          type: this.type3,
          areaStyle: this.areaStyle3,
          smooth: this.smooth3,
          yAxisIndex: 0,
          data: [10, 23, 159, 4, 10, 22, 14]
          },
          {
          name: '成本单价(元)',
          type: this.type3,
          areaStyle: this.areaStyle3,
          smooth: this.smooth3,
          data: [17, 28, 19, 36, 11, 18, 22]
          },
          {
          name: '毛利率(%)',
          type: this.type3,
          areaStyle: this.areaStyle3,
          smooth: this.smooth3,
          yAxisIndex: 1,
          data: [6, 81, 11, 34, 30, 15, 20]
          }
        ],
        dataZoom: [
          {
            id: 'dataZoomX',
            type: 'slider',
            xAxisIndex: [0],
            filterMode: 'filter'
          } 
        ],
      })
    },
    // 类目GMV图表
    echartsInit4 () {
      let gmvChart = this.$echarts.init(document.getElementById('gmvChart'))
      gmvChart.setOption({
        color: ['#4E86F2', '#F88C3F', '#40BB49', '#FDBB45', '#78C2C4'], // 图表颜色
        tooltip: {
          trigger: 'item',
          formatter: "{a}<br/>{b}: {c} ({d}%)",
          padding: 10,
        },
        legend: {
          x : 'center',
          y : 'bottom',
          data:['母婴用品','美妆个护','食品保健','生活家居']
        },
        series: [
            {
              name:'GMV',
              type:'pie',
              roseType: this.roseType4,
              radius: this.radius4,
              avoidLabelOverlap: true,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                }
              },
              labelLine: {
                normal: {
                  show: true
                }
              },
              data:[
                {value:335, name:'母婴用品'},
                {value:310, name:'美妆个护'},
                {value:234, name:'食品保健'},
                {value:135, name:'生活家居'}
              ]
            }
        ]
      })
    },
    // 类目毛利额图表
    echartsInit5 () {
      let GrossProfitChart = this.$echarts.init(document.getElementById('GrossProfitChart'))
      GrossProfitChart.setOption({
        color: ['#58B2DC', '#DAC9A6', '#40BB49', '#FDBB45', '#78C2C4'], // 图表颜色
        tooltip: {
          trigger: 'item',
          formatter: "{a}<br/>{b}: {c} ({d}%)",
          padding: 10,
        },
        legend: {
          x : 'center',
          y : 'bottom',
          data:['母婴用品','美妆个护','食品保健','生活家居']
        },
        series: [
            {
              name:'GMV',
              type:'pie',
              roseType: this.roseType5,
              radius: this.radius5,
              avoidLabelOverlap: true,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                }
              },
              labelLine: {
                normal: {
                  show: true
                }
              },
              data:[
                {value:335, name:'母婴用品'},
                {value:310, name:'美妆个护'},
                {value:234, name:'食品保健'},
                {value:135, name:'生活家居'}
              ]
            }
        ]
      })
    },
    echartsInit6 () {
      // 找到容器
      let contributionChart = this.$echarts.init(document.getElementById('contributionChart'))
      // 开始渲染
      contributionChart.setOption({
        // title: {text: '在Vue中使用echarts'},
        color: ['#E16B8C', '#2EA9DF'],
        tooltip: {
          trigger: 'axis' // 鼠标移入显示一列数据，而不是单个数据
        },
        legend: {
          data:['在线SKU数','毛利率'],
          x : 'center',
          y : 'bottom',
        },
        xAxis: {
          boundaryGap: this.isboundaryGap6,
          data: ['自营-上海嘉定仓', '嘉选', 'NZ100', '大鑫', '黑蚁', '自营-深圳优仓库','杭州络绎','千城记大师','辉煌十月','放心购','卖卖','旭京','杰恒','秀富'],
          axisLabel: { // x轴倾斜设置
            interval:0,
            rotate:15
          }
        },
        yAxis: [
          {
            name: '毛利率(%)',
            type: 'value'
          },
          {
            name: '在线SKU数',
            type: 'value'
          }
        ],
        series: [
          {
          name: '毛利率',
          type: this.type6,
          areaStyle: this.areaStyle6,
          smooth: this.smooth6,
          yAxisIndex: 0,
          data:[26, 59, 9, 24, 7, 17, 15, 12, 48, 18, 6, 13,25,15],
          },
          {
          name: '在线SKU数',
          type: this.type6Two,
          areaStyle: this.areaStyle6Two, 
          smooth: this.smooth6Two,
          // barWidth : 20,//柱图宽度
          yAxisIndex: 1, // 通过这个配置来设置双Y轴的数据
          data:[20, 49, 70, 232, 256, 767, 136, 162, 32, 25, 64, 33,89,50],
          }        
        ]
      })
    },
  },
  mounted () {
    this.echartsInit3()
    this.echartsInit4()
    this.echartsInit5()
    this.echartsInit6()
  }
}
</script>

<style lang='scss' scoped>
  .dashboard-container{
    // width: 100%;
    background: $dashboard-container;
    padding-bottom: 20px;
    padding-top: 20px;
    .content-header{
      display: flex;
      .content-header-left{
        border-radius: $boederRadius;
        background: $itemBg;
        border: 1px solid $border;
        box-sizing: border-box;
        flex: 0 0 49.5%;
        height: 700px;
        margin-right: 0.5%;
        .last-sel{
          width: 120px;
        }
        #skuChart{
          width: 100%;
          height: 600px;
          text-align: center;
          margin-left: auto;
          margin-right: auto;
          margin-top: 20px;
        }
        
      }
      .content-header-right{
        background: $dashboard-container;
        flex: 0 0 49.5%;
        height: 700px;
        margin-left: 0.5%;
        .content-header-right-top{
          display: flex;
          width: 100%;
          height: 340px;
          .item{
            border-radius: $boederRadius;
            background: $itemBg;
            border: 1px solid $border;
            box-sizing: border-box;
            flex: 0 0 49%;
            .sel{
              width: 100px;
            }
          }
          .gmvinfo{ 
            margin-right: 1%;
            #gmvChart{
              width: 100%;
              height: 250px;
              text-align: center;
              margin-left: auto;
              margin-right: auto;
            }  
          }
          .grossProfit{
            margin-left: 1%;
            #GrossProfitChart{
              width: 100%;
              height: 250px;
              text-align: center;
              margin-left: auto;
              margin-right: auto;
            }    
          }
        }
        .content-header-right-bottom{
          border-radius: $boederRadius;
          width: 100%;
          height: 340px;
          margin-top: 20px;
          box-sizing: border-box;
          border: 1px solid $border;
          background: $itemBg;
          #contributionChart{
            width: 100%;
            height: 250px;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
          }
          .sel{
            width: 165px;
          }
        }
      }
    }
    .content-inner{
      display: flex;
      margin-top: 20px;
      height: 500px;
      .content-inner-item{
        border-radius: $boederRadius;
        box-sizing: border-box;
        border: 1px solid $border;
        flex: 0 0 32.6666666%;
        margin-right: 1%;
        background: $itemBg;
        .select{
          width: 75px;
          min-width: 50px;
        }
        .sel{
          width: 100px;
          min-width: 50px;
        }
        .sel2{
          width: 112px;
          max-width: 120px;
          min-width: 50px;
        }
        .sel3{
          width: 160px;
        }
      }
      .content-inner-item:last-child{
        margin-right: 0px;
      }
    }
    .content-footer{
      border-radius: $boederRadius;
      height: 600px;
      margin-top: 20px;
      background: $itemBg;
      box-sizing: border-box;
      border: 1px solid $border;
    }
  }
</style>