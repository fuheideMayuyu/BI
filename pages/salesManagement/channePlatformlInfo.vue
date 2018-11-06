<template>
<!-- 渠道平台详情页 -->
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
      <span class="skuRange">SKU范围:</span>
      <el-select class="select" size="small" v-model="value1" placeholder="请选择">
        <el-option 
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button class="filter-btn" size="small" type="primary">筛选</el-button>
      <el-button class="Remake-btn" size="small">重置</el-button>
    </div>
    <div class="Category-info">
      <div class="chart-top clearfloat">
        <span class="chart-top-text">渠道平台</span>
        <div class="select-module">
          <el-select class="select" size="small" v-model="value2" placeholder="请选择">
            <el-option 
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
    </div>
    <div class="supplier-table">
      <div class="chart-top clearfloat">
          <span class="chart-top-text">渠道平台明细</span>
          <div class="select-module">
            <el-select class="select sel" size="small" v-model="value3" placeholder="请选择SKU">
              <el-option 
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-button class="Export-btn" size="small" type="primary">导出</el-button>
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
          value: '头部TOP30',
          label: '头部TOP30'
        }, 
        {
          value: '尾部TOP30',
          label: '尾部TOP30'
        }
      ],
      value1: '头部TOP30',
      options2: [
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
      value2: '簇状柱状图+折线图',
      options3: [
        {
          value: 'A1 新西兰 奶粉白金装 2段 6-12个月 900g',
          label: 'A1 新西兰 奶粉白金装 2段 6-12个月 900g'
        }, 
        {
          value: 'A2 新西兰 奶粉白金装 2段 6-12个月 900g',
          label: 'A2 新西兰 奶粉白金装 2段 6-12个月 900g'
        },
        {
          value: 'A3 新西兰 奶粉白金装 2段 6-12个月 900g',
          label: 'A3 新西兰 奶粉白金装 2段 6-12个月 900g'
        },
        {
          value: 'A4 新西兰 奶粉白金装 2段 6-12个月 900g',
          label: 'A4 新西兰 奶粉白金装 2段 6-12个月 900g'
        },
        {
          value: 'A5 新西兰 奶粉白金装 2段 6-12个月 900g',
          label: 'A5 新西兰 奶粉白金装 2段 6-12个月 900g'
        },
        {
          value: 'A6 新西兰 奶粉白金装 2段 6-12个月 900g',
          label: 'A6 新西兰 奶粉白金装 2段 6-12个月 900g'
        },
        {
          value: 'A7 新西兰 奶粉白金装 2段 6-12个月 900g',
          label: 'A7 新西兰 奶粉白金装 2段 6-12个月 900g'
        }
      ],
      value3: '',
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
    .select{
      width: 120px;
    }
  }
  .Category-info{
    margin-top: 20px;
    height: 500px;
    background: $itemBg;
    border: 1px solid $border;
    .chart-top{
      .select{
        margin-right: 10px;
        width: 180px;
      }
    }
  }

  .supplier-table{
    margin-top: 20px;
    height: 800px;
    background: $itemBg;
    border: 1px solid $border;
    .chart-top{
      .Export-btn{
        margin-right: 10px;
      }
      .sel{
        width: 300px;
      }    
    }
  }
}
</style>