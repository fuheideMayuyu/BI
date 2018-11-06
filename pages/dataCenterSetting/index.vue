<template>
  <div>
    <div class="dashboard-container">
      <div class="content-header">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            size="mini"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-switch
          class="switch"
          v-model="switchvalue"
          active-color="#42b983"
          inactive-color="#ff4949"
          active-text="按列表排列"
          inactive-text="按模块排列">
        </el-switch>
      </div>
      <div class="content-inner">
        <!-- <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="300">
          </el-table-column>
          <el-table-column
            label="排序"
            width="500">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="模块名称"
            width="800">
          </el-table-column>
        </el-table> -->
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            type="selection"
            width="100">
          </el-table-column>
          <el-table-column
            prop="date"
            width="300"
            label="排序">
          </el-table-column>
          <el-table-column
            prop="name"
            label="模块名称">
          </el-table-column>
        </el-table>
      </div>

      <!-- <div class="module">
        <div>
          <span>当日GMV & 总GMV</span>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div> -->

      <div class="content-footer">
        <el-button class="btn" type="primary">保存</el-button>
        <el-button class="btn">取消</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        options: [
          {
          value: '快速选择模板',
          label: '快速选择模板'
          }, 
          {
            value: '总裁办',
            label: '总裁办'
          }, 
          {
            value: '商品运营',
            label: '商品运营'
          }, 
          {
            value: '渠道运营',
            label: '渠道运营'
          }, 
          {
            value: '财务',
            label: '财务'
          }
        ],
        value: '快速选择模板',
        switchvalue: true,
        tableData: [
          {
          date: '1',
          name: '当日GMV & 总GMV'
          }, 
          {
            date: '2',
            name: '新增用户 & 用户总数'
          }, 
          {
            date: '3',
            name: '支付订单数'
          }, 
          {
            date: '4',
            name: '访问量& 日访问量'
          }, 
          {
            date: '5',
            name: 'GMV趋势'
          }, 
          {
            date: '6',
            name: '供应商贡献排行'
          }, 
          {
            date: '7',
            name: 'SKU排行'
          },
          {
            date: '8',
            name: '一级类目占比'
          }
        ],
      }
    },
  methods: {
      // 全选
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      // 单选
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>

<style lang="scss" scoped>
.dashboard-container{
  width: 100%;
  padding-bottom: 20px;
  padding-top: 20px;
  .content-header{
    background: $itemBg;
    border: 1px solid #aaa;
    border-radius: $boederRadius;
    height: 60px;
    line-height: 60px;
    padding-left: 20px;
    .switch{
      margin-left: 20px;
    }
  }
  .content-inner{
    background: $itemBg;
    margin-top: 40px;
    // padding-left: 40px;
    // padding-right: 40px;
  }
  .content-footer{
    margin-top: 40px;
    text-align: center;
    .btn{
      width: 120px;
    }
  }
}
</style>