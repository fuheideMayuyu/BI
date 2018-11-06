<template>
<!-- 类目GMV与毛利详情页 -->
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
    <div class="GMVProportion">
      <div class="chart-top clearfloat">
        <span class="chart-top-text">类目GMV占比</span>
        <div class="select-module">
            <el-select class="select" size="small" v-model="value1" placeholder="请选择">
              <el-option 
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
      </div>
    </div>
    <div class="GMVProportion">
      <div class="chart-top clearfloat">
        <span class="chart-top-text">类目毛利额占比</span>
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
    <div class="GMVProportion">
      <div class="chart-top clearfloat">
        <span class="chart-top-text">类目GMV、货物毛利明细</span>
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
      value1: '饼图',
      options2: [
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
      value2: '饼图',
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
  .GMVProportion{
    border-radius: $boederRadius;
    margin-top: 20px;
    background: $itemBg;
    height: 600px;
    border: 1px solid $border;
    .select{
      margin-right: 10px;
      width: 100px;
    }
    .Export-btn{
      margin-right: 10px;
    }
  }
}
</style>