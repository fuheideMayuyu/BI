<template>
<!-- 供应商贡献度详情页 -->
  <div class="dashboard-container">
    <div class="content-header">     
      <span>近期:</span>
      <el-button class="btn" size="small" type="primary" plain>今日</el-button>
      <el-button class="btn" size="small" type="primary" plain>近七天</el-button>
      <el-button class="btn" size="small" type="primary" plain>近30日</el-button>
      <span class="filterTime">筛选时间:</span>
      <el-date-picker
        v-model="timeValue"
        type="daterange"
        size="small"
        format="yyyy-MM-dd"
        value-format="yyyy-MM-dd"
        range-separator="~"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
      <el-button class="filter-btn" size="small" type="primary">筛选</el-button>
      <el-button class="Remake-btn" size="small">重置</el-button>
    </div>
    <div class="content-inner">
      <div class="content-inner-left item">
        <div class="chart-top clearfloat">
          <span class="chart-top-text">供应商贡献度</span>
          <div class="sku-trend-right">
            <el-select class="select sel" size="small" v-model="value3" placeholder="请选择">
              <el-option 
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div class="content-inner-right item">
        <div class="chart-top">
          <span class="chart-top-text">供应商贡献度</span>
          
          <div class="sku-Detail-right">
            <el-select class="select sel" size="small" v-model="value4" filterable placeholder="请选择">
              <el-option
                v-for="item in options4"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-button class="Export-btn" size="small" type="primary">导出</el-button>
          </div>
        </div>
        <div class="content-inner-right-body">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      timeValue: '',
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
          value: '簇状条形图',
          label: '簇状条形图'
        },
        {
          value: '面积图',
          label: '面积图'
        }
      ],
      value3: '簇状柱状图+折线图',
      options4: [
        {
          value: '供应商1',
          label: '供应商1'
        },
        {
          value: '供应商2',
          label: '供应商2'
        }, 
        {
          value: '供应商3',
          label: '供应商3'
        },
        {
          value: '供应商4',
          label: '供应商4'
        },
        {
          value: '供应商5',
          label: '供应商5'
        },
        {
          value: '供应商6',
          label: '供应商6'
        },
        {
          value: '供应商7',
          label: '供应商7'
        },
        {
          value: '供应商8',
          label: '供应商8'
        }
      ],
      value4: '',
    }
  },
  components: {},
  computed: {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.dashboard-container{
  width: 100%;
  background: $dashboard-container;
  padding-bottom: 20px;
  padding-top: 20px;
  .content-header{
    height: 80px;
    line-height: 80px;
    background: #fff;
    box-sizing: border-box;
    border: 1px solid $border;
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
    .btn{
      margin-left: 10px;
    }
    .filterTime{
      margin-left: 20px;
      margin-right: 10px;
    }
    .filter-btn{
      margin-left: 20px;
    }
  }
  .content-inner{
    display: flex;
    height: 800px;
    margin-top: 20px;
    .item{
      border-radius: $boederRadius;
      flex: 0 0 49.5%;
      box-sizing: border-box;
      background: $itemBg;
      border: 1px solid $border;
    }
    .content-inner-left{ 
      margin-right: 0.5%;
      .chart-top{
        .sku-trend-right{
          float: right;
          .select{
            margin-right: 10px;
          }
          .sel{
            width: 180px;
          }
        }
      }
    }
    .content-inner-right{
      margin-left: 0.5%;
      .chart-top{
        .sku-Detail-right{
          float: right;
          .Export-btn{
            margin-right: 10px;
          }
          .sel{
            width: 180px;
          }
        }
      }
    }
  }
}
</style>