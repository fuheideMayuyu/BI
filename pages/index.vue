<template>
  <!-- 数据中心 -->
  <div class="dashboard-container">
    <div class="content-header">
      <div class="content-header-item">
        <p class="item-text">当日GMV&总GMV</p>
        <p class="item-num">12313/123133</p>
      </div>
      <div class="content-header-item">
        <p class="item-text">新增用户数&用户总数</p>
        <p class="item-num">12313/123133</p>
      </div>
      <div class="content-header-item">
        <p class="item-text">支付订单数</p>
        <p class="item-num">12313/123133</p>
      </div>
      <div class="content-header-item">
        <p class="item-text">访问量&日访问量</p>
        <p class="item-num">12313/123133</p>
      </div>
    </div>
    <div class="content-inner">
      <div class="content-inner-header">
        <el-button size="small">今日</el-button>
        <el-button size="small">本周</el-button>
        <el-button size="small">本月</el-button>
        <el-button class="last-btn" size="small">本年</el-button>
          <el-date-picker
            v-model="value"
            class="date-picker"
            size="small"
            type="daterange"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
            range-separator="~"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
      </div>
      <div class="content-inner-body">
        <div class="content-inner-body-top">
          <div class="gmv item">GMV趋势</div>
          <div class="supplier item">供应商贡献排行</div>
        </div>
        <div class="content-inner-body-center">
          <div class="sku item">sku排行</div>
          <div class="Category item">一级类目占比</div>
        </div>
        <div class="content-inner-body-footer">
          库存、活动运营
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        value: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
.dashboard-container{
  width: 100%;
  background: $dashboard-container;
  padding-bottom: 20px;
  .content-header {
    display: flex;
    .content-header-item{
      background: $itemBg;
      flex:1;
      border: 1px solid $border;
      border-radius: $boederRadius;
      height: 120px;
      margin-right: 20px;
      margin-top: 20px;
      text-align: center;
      .date-picker{
        width: 100px;
      }
      .item-text{
        margin-top: 30px;
      }
    }
    .content-header-item:last-child{
      margin-right: 0px;
    }
  }
  .content-inner{
    .content-inner-header {
      background: $itemBg;
      height: 70px;
      line-height: 70px;
      border: 1px solid $border;
      border-top-left-radius:$boederRadius;
      border-top-right-radius:$boederRadius;
      margin-top: 20px;
      text-align: right;
      padding-right: 10px;
      .last-btn{
        margin-right: 10px;
      }
    }
    .content-inner-body{
      .content-inner-body-top{
        display: flex;
        .item{
          background: $itemBg;
          box-sizing: border-box;
          height: 500px;
          border-left: 1px solid $border;
          border-bottom: 1px solid $border;
          border-right: 1px solid $border;
          border-bottom-left-radius:$boederRadius;
          border-bottom-right-radius:$boederRadius;
        }
        .gmv{
          flex: 0 0 55%; 
        }
        .supplier{ 
          flex: 0 0 44%;
          margin-left: 1%;
        }
      }
      .content-inner-body-center{
        margin-top: 20px;
        display: flex;
        .item{
          background: $itemBg;
          box-sizing: border-box;
          border: 1px solid $border;
          height: 500px;
          border-radius: $boederRadius;
        }
        .sku{ 
          flex: 0 0 45%; 
        }
        .Category{
          flex: 0 0 54%;
          margin-left: 1%;
          
        }
      }
      .content-inner-body-footer{
        border-radius: $boederRadius;
        background: $itemBg;
        box-sizing: border-box;
        flex: 0 0 100%;
        height: 500px;
        border: 1px solid $border;
        margin-top: 20px;
      }
    }
  }
}
</style>