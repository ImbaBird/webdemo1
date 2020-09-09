<template>
  <el-container style=" border: 1px solid #eee" width="100%">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <Nav/>
    </el-aside>
    <el-container class="test" style="background: #e8e8e8">
      <el-header>
        <Header style="width: 500px"/>
      </el-header>

      <el-footer>
        <Main style="margin: auto"/>
      </el-footer>
    </el-container>

  </el-container>
</template>

<script>
  import Header from "../../components/layout/Header";
  import Nav from "../../components/layout/Nav";
  import Main from "../../components/layout/Main";

  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    },
    components: {Header, Nav, Main}
  };
</script>


<style>
  .el-aside {
    color: #333;
  }
</style>
