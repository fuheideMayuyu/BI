<template>
<!-- 批次中标明细页 -->
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
      <span class="skuRange">商品类目:</span>
      <el-select class="select" size="small" v-model="value1" placeholder="请选择类目">
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

    <div class="sku-score">
        <div class="chart-top clearfloat">
          <span class="chart-top-text">SKU评分</span>
          <div class="select-module">
            <el-select class="select sel" size="small" v-model="value2" placeholder="请选择">
              <el-option 
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-select class="select sel2" size="small" v-model="value3" placeholder="请选择">
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
          
        </div>
    </div>
    <div class="sku-price">
        <div class="chart-top clearfloat">
          <span class="chart-top-text">SKU价格</span>
          <div class="select-module">
            <el-select class="select sel" size="small" v-model="value4" placeholder="请选择">
              <el-option 
                v-for="item in options4"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-select class="select sel2" size="small" v-model="value5" placeholder="请选择">
              <el-option 
                v-for="item in options5"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="supplier-info-body">
          
        </div>
    </div>
    <div class="supplier-table">
      <div class="chart-top clearfloat">
          <span class="chart-top-text">SKU中标明细</span>
          <div class="select-module">
            <el-select class="select sel" size="small" v-model="value6" placeholder="请选择">
              <el-option 
                v-for="item in options6"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-select class="select sel2" size="small" v-model="value7" placeholder="请选择">
              <el-option 
                v-for="item in options7"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-select class="select sel3" size="small" v-model="value8" placeholder="请选择">
              <el-option 
                v-for="item in options8"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-button class="Reset-btn" size="small">重置</el-button>
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
      value1: '',
      options2: [
        {
          value: 'HG 荷兰 酱料牛奶血渍衣物清洗剂 35g',
          label: 'HG 荷兰 酱料牛奶血渍衣物清洗剂 35g'
        }, 
        {
          value: 'HG 荷兰2 酱料牛奶血渍衣物清洗剂 35g',
          label: 'HG 荷兰2 酱料牛奶血渍衣物清洗剂 35g'
        }
        , 
        {
          value: 'HG 荷兰3 酱料牛奶血渍衣物清洗剂 35g',
          label: 'HG 荷兰3 酱料牛奶血渍衣物清洗剂 35g'
        }
        , 
        {
          value: 'HG 荷兰4 酱料牛奶血渍衣物清洗剂 35g',
          label: 'HG 荷兰4 酱料牛奶血渍衣物清洗剂 35g'
        }
      ],
      value2: 'HG 荷兰 酱料牛奶血渍衣物清洗剂 35g',
      options3: [
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
      value3: '堆积条形图',
      options4: [
        {
          value: 'HG 荷兰 酱料牛奶血渍衣物清洗剂 35g',
          label: 'HG 荷兰 酱料牛奶血渍衣物清洗剂 35g'
        }, 
        {
          value: 'HG 荷兰2 酱料牛奶血渍衣物清洗剂 35g',
          label: 'HG 荷兰2 酱料牛奶血渍衣物清洗剂 35g'
        }
        , 
        {
          value: 'HG 荷兰3 酱料牛奶血渍衣物清洗剂 35g',
          label: 'HG 荷兰3 酱料牛奶血渍衣物清洗剂 35g'
        }
        , 
        {
          value: 'HG 荷兰4 酱料牛奶血渍衣物清洗剂 35g',
          label: 'HG 荷兰4 酱料牛奶血渍衣物清洗剂 35g'
        }
      ],
      value4: 'HG 荷兰 酱料牛奶血渍衣物清洗剂 35g',
      options5: [
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
      value5: '簇状柱状图+折线图',
      options6: [
        {
          value: 'SKU名称',
          label: 'SKU名称'
        }, 
        {
          value: 'SKU编码',
          label: 'SKU编码'
        }
      ],
      value6: 'SKU名称',
      options7: [
        {
          value: 'HG 荷兰 酱料牛奶血渍衣物清洗剂 35g',
          label: 'HG 荷兰 酱料牛奶血渍衣物清洗剂 35g'
        }, 
        {
          value: 'HG 荷兰2 酱料牛奶血渍衣物清洗剂 35g',
          label: 'HG 荷兰2 酱料牛奶血渍衣物清洗剂 35g'
        }
        , 
        {
          value: 'HG 荷兰3 酱料牛奶血渍衣物清洗剂 35g',
          label: 'HG 荷兰3 酱料牛奶血渍衣物清洗剂 35g'
        }
        , 
        {
          value: 'HG 荷兰4 酱料牛奶血渍衣物清洗剂 35g',
          label: 'HG 荷兰4 酱料牛奶血渍衣物清洗剂 35g'
        }
      ],
      value7: 'HG 荷兰 酱料牛奶血渍衣物清洗剂 35g',
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
        }, 
        {
          value: '测试供应商5',
          label: '测试供应商5'
        }, 
        {
          value: '测试供应商6',
          label: '测试供应商6'
        }, 
        {
          value: '测试供应商7',
          label: '测试供应商7'
        }, 
        {
          value: '测试供应商8',
          label: '测试供应商8'
        }
      ],
      value8: 'SKU名称',
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
  .sku-score{
    margin-top: 20px;
    border: 1px solid $border;
    box-sizing: border-box;
    background: $itemBg;
    height: 400px;
    .chart-top{
      .select{
        margin-right: 10px;
      }
      .sel{
        width: 300px;
      }
      .sel2{
        width: 120px;
      }
    }
    
  }
  .sku-price{
    margin-top: 20px;
    border: 1px solid $border;
    box-sizing: border-box;
    background: $itemBg;
    height: 600px;
    .chart-top{
      .select-module{
        .select{
          margin-right: 10px;
        }
        .sel{
          width: 300px;
        }
        .sel2{
          width: 180px;
        }
      }
    }  
  }
  .supplier-table{
    margin-top: 20px;
    height: 800px;
    background: $itemBg;
    border: 1px solid $border;
    .chart-top{
      .sel{
        width: 100px;
      }
      .sel2{
        width: 300px;
      }
      .sel3{
        width: 180px;
      }
      .Export-btn{
        margin-right: 10px;
      }     
    }
  }
}
</style>