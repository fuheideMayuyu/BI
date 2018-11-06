<template>
<!-- 批次中标统计页 -->
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
    <div class="Category-info">
      <div class="Category-info-left item">
        <div class="chart-top clearfloat">
          <span class="chart-top-text">类目投标情况</span>
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
      <div class="Category-info-right item">
        <div class="chart-top clearfloat">
          <span class="chart-top-text">类目招、投标数量</span>
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
    </div>
    <div class="supplier-info">
        <div class="chart-top clearfloat">
          <span class="chart-top-text">供应商投、中标情况</span>
          <div class="select-module">
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
        <div class="supplier-info-body">
          <div class="item">
            <div class="chart-top clearfloat">
              <span class="chart-top-text">供应商投情况</span>
              <div class="select-module">
                <el-select class="select sel" size="small" v-model="value4" placeholder="请选择">
                  <el-option 
                    v-for="item in options4"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="chart-top clearfloat">
              <span class="chart-top-text">供应商中标占比</span>
              <div class="select-module">
                <el-select class="select" size="small" v-model="value5" placeholder="请选择">
                  <el-option 
                    v-for="item in options5"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>
          <div class="item last-item">
            <div class="chart-top clearfloat">
              <span class="chart-top-text">评分</span>
              <div class="select-module">
                <el-select class="select" size="small" v-model="value6" placeholder="请选择">
                  <el-option 
                    v-for="item in options6"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class="supplier-table">
      <div class="chart-top clearfloat">
          <span class="chart-top-text">中、投标明细</span>
          <div class="select-module">
            <el-select class="select" size="small" v-model="value7" placeholder="一级类目">
              <el-option 
                v-for="item in options7"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-select class="select" size="small" v-model="value8" placeholder="供应商名称">
              <el-option 
                v-for="item in options8"
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
      value1: '簇状柱状图',
      options2: [
        {
          value: '雷达图',
          label: '雷达图'
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
          value: '堆积柱状图',
          label: '堆积柱状图'
        },
        {
          value: '簇状条形图',
          label: '簇状条形图'
        },
        {
          value: '堆积条形图',
          label: '堆积条形图'
        }
      ],
      value2: '雷达图',
      options3: [
        {
          value: '母婴用品',
          label: '母婴用品'
        },
        {
          value: '美妆个护',
          label: '美妆个护'
        },
        {
          value: '食品保健',
          label: '食品保健'
        },
        {
          value: '生活用品',
          label: '生活用品'
        }
      ],
      value3: '母婴用品',
      options4: [
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
        }
      ],
      value4: '簇状柱状图+折线图',
      options5: [
        {
          value: '玫瑰图',
          label: '玫瑰图'
        },
        {
          value: '饼图',
          label: '饼图'
        },
        {
          value: '环图',
          label: '环图'
        }
      ],
      value5: '玫瑰图',
      options6: [
        {
          value: '堆积条形图',
          label: '堆积条形图'
        },
        {
          value: '堆积柱状图',
          label: '堆积柱状图'
        },
        {
          value: '折线图',
          label: '折线图'
        },
        {
          value: '环图',
          label: '环图'
        },
        {
          value: '雷达图',
          label: '雷达图'
        }
      ],
      value6: '堆积条形图',
      options7: [
        {
          value: '母婴用品',
          label: '母婴用品'
        },
        {
          value: '美妆个护',
          label: '美妆个护'
        },
        {
          value: '食品保健',
          label: '食品保健'
        },
        {
          value: '生活用品',
          label: '生活用品'
        }
      ],
      value7: '',
      options8: [
        {
          value: '测试供应商1',
          label: '测试供应商1'
        },
        {
          value: '测试供应商2',
          label: '测试供应商2'
        },
        {
          value: '测试供应商3',
          label: '测试供应商3'
        },
        {
          value: '测试供应商4',
          label: '测试供应商4'
        }
      ],
      value8: '',
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
  }
  .Category-info{
    margin-top: 20px;
    height: 500px;
    display: flex;
    .item{
      border: 1px solid $border;
      flex: 0 0 49.5%;
      background: $itemBg;
      border-radius: $boederRadius;
    }
    .Category-info-left{
      margin-right: 0.5%;
      .select{
        margin-right: 10px;
        width: 180px;
      }
    }
    .Category-info-right{
      margin-left: 0.5%;
      .select{
        margin-right: 10px;
        width: 120px;
      } 
    }
  }
  .supplier-info{
    border-radius: $boederRadius;
    margin-top: 20px;
    border: 1px solid $border;
    box-sizing: border-box;
    background: $itemBg;
    .chart-top{
      .select{
        margin-right: 10px;
        width: 120px;
      }
    }
    .supplier-info-body{
      width: 100%;
      display: flex;
      padding: 10px;
      height: 400px;
      .item{
        flex: 0 0 32.66666%;
        border: 1px solid $border;
        margin-right: 1%;
        border-radius: $boederRadius;
        .sel{
          width: 180px;
        }
      }
      .last-item{
        margin-right: 0px;
      }
    }
    
  }
  .supplier-table{
    margin-top: 20px;
    height: 800px;
    background: $itemBg;
    border: 1px solid $border;
    border-radius: $boederRadius;
    .chart-top{
      .select{
        width: 120px;
      }
      .Export-btn{
        margin-right: 10px;
      }     
    }
  }
}
</style>