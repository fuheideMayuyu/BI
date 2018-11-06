<template>
<!-- sku详情页 -->
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
      <span class="skuRange">范围:</span>
      <el-select class="select" size="small" v-model="value1" placeholder="请选择">
        <el-option 
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select class="select sel" size="small" v-model="value2" placeholder="请选择">
        <el-option 
          v-for="item in options2"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button class="filter-btn" size="small" type="primary">筛选</el-button>
      <el-button class="Remake-btn" size="small">重置</el-button>
    </div>
    <div class="content-inner">
      <div class="content-inner-left item">
        <div class="chart-top clearfloat">
          <span class="chart-top-text">品牌TOPS</span>
          <div class="sku-trend-right">
            <el-select class="select" size="small" v-model="value3" placeholder="请选择">
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
          <span class="chart-top-text">品牌TOPS</span>
          <div class="sku-Detail-right">
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
          value: '品牌',
          label: '品牌'
        }, 
        {
          value: 'SKU',
          label: 'SKU'
        }
      ],
      value1: '品牌',
      options2: [
        {
          value: '头部TOP30',
          label: '头部TOP30'
        },
        {
          value: '尾部TOP30',
          label: '尾部TOP30'
        }
      ],
      value2: '头部TOP30',
      options3: [
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
      value3: '头部TOP30'
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
    .skuRange{
      margin-left: 20px;
      margin-right: 10px;
    }
    .filter-btn{
      margin-left: 20px;
    }
    .sel{
      width: 120px;
    }
  }
  .content-inner{
    display: flex;
    height: 800px;
    margin-top: 20px;
    .item{
      border-radius: $boederRadius;
      border: 1px solid $border;
      box-sizing: border-box;
      background: $itemBg;
      flex: 0 0 49.5%;
    }
    .content-inner-left{
      margin-right: 0.5%;
      .chart-top{
        .sku-trend-right{
          float: right;
          .select{
            margin-right: 10px;
            width: 150px;
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
        }
      }
    }
  }
}
</style>